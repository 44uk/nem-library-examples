import {
    AccountHttp, NEMLibrary, NetworkTypes, Address, Account, TransferTransaction, TimeWindow,
    EmptyMessage, MultisigTransaction, PublicAccount, TransactionHttp, XEM
} from "nem-library";
declare let process: any;

// Initialize NEMLibrary for TEST_NET Network
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

const transactionHttp = new TransactionHttp();

// Replace with a cosignatory private key
const privateKey: string = process.env.PRIVATE_KEY;

const account = Account.createWithPrivateKey(privateKey);

const transferTransaction = TransferTransaction.create(
    TimeWindow.createWithDeadline(),
    new Address("TCFFOM-Q2SBX7-7E2FZC-3VX43Z-TRV4ZN-TXTCGW-BM5J"),
    new XEM(2),
    EmptyMessage
);

const signedTransaction = account.signTransaction(transferTransaction);

transactionHttp.announceTransaction(signedTransaction).subscribe( x => console.log(x));
