import {
    NEMLibrary, NetworkTypes, Transaction, TimeWindow, ProvisionNamespaceTransaction, Account, TransactionHttp
} from "nem-library";

declare let process: any;

// Initialize NEMLibrary for TEST_NET Network
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

const privateKey: string = process.env.PRIVATE_KEY;
const account = Account.createWithPrivateKey(privateKey);
const transactionHttp = new TransactionHttp();

const namespace = "new-namespace";

const provisionNamespaceTransaction: Transaction = ProvisionNamespaceTransaction.create(
    TimeWindow.createWithDeadline(),
    namespace
);

const signedTransaction = account.signTransaction(provisionNamespaceTransaction);
transactionHttp.announceTransaction(signedTransaction).subscribe( x => console.log(x));

