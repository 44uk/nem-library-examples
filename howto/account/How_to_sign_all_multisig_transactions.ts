/**
 * nem-library 0.3.7
 */

import { AccountHttp, TransactionHttp, Address, NEMLibrary, NetworkTypes, Account, Transaction, TransactionTypes, MultisigTransaction, MultisigSignatureTransaction, TimeWindow, PublicAccount } from "nem-library";

NEMLibrary.bootstrap(NetworkTypes.TEST_NET);
let accountHttp = new AccountHttp();
let transactionHttp = new TransactionHttp();

let account = Account.createWithPrivateKey("");

accountHttp.unconfirmedTransactions(account.address)
    .map(x => x)
    // Convert result Transaction[] into Transaction
    .flatMap(x => x )
    // just return the Multisig Transactions
    .filter(transaction => transaction.type == TransactionTypes.MULTISIG)
    // Convert the multisig transaction into MultisigSignatureTransaction
    .map((transaction: MultisigTransaction): MultisigSignatureTransaction => MultisigSignatureTransaction.create(
        TimeWindow.createWithDeadline(),
        transaction.otherTransaction.signer!.address,
        transaction.hashData!
    ))
    // Sign the transaction
    .map(transaction => account.signTransaction(transaction))
    // announce the transaction to be included in a block
    .flatMap(signedTransaction => transactionHttp.announceTransaction(signedTransaction))
    .subscribe(result => {
        // Listen the success
        console.log(result);
    }, err => {
        // Know if something has gone wrong
        console.error(err)
    })
