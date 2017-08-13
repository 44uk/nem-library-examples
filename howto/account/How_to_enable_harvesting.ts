import {
    NEMLibrary, NetworkTypes, Account, TimeWindow,
    PublicAccount, TransactionHttp, ImportanceMode, ImportanceTransferTransaction, AccountHttp
} from "nem-library";
declare let process: any;

// Initialize NEMLibrary for TEST_NET Network
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

const privateKey: string = process.env.PRIVATE_KEY;
const delegateAccountHarvestingPrivateKey: string = process.env.HARVESTING_PRIVATE_KEY;

const account = Account.createWithPrivateKey(privateKey);
const delegatedAccount = Account.createWithPublicKey(delegateAccountHarvestingPrivateKey);

const importanceTransferTransaction = ImportanceTransferTransaction.create(
    TimeWindow.createWithDeadline(),
    ImportanceMode.Activate,
    PublicAccount.createWithPublicKey(delegatedAccount.publicKey)
);

const signedTransaction = account.signTransaction(importanceTransferTransaction);

const transactionHttp = new TransactionHttp();
transactionHttp.announceTransaction(signedTransaction).subscribe(x => console.log(x));

// Wait aproximately 6h for you delegated account to be active

const accountHttp = new AccountHttp();

// Testnet supernode
const supernodeDomain = "188.68.50.161";

accountHttp.unlockHarvesting(supernodeDomain, delegateAccountHarvestingPrivateKey).subscribe(success => console.log(success));
