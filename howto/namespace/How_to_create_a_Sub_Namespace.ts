import {
    NEMLibrary, NetworkTypes, Transaction, TimeWindow, ProvisionNamespaceTransaction, Account, TransactionHttp
} from "nem-library";

declare let process: any;

// Initialize NEMLibrary for TEST_NET Network
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

const privateKey: string = process.env.PRIVATE_KEY;
const account = Account.createWithPrivateKey(privateKey);
const transactionHttp = new TransactionHttp({domain: "104.128.226.60"});

const namespace = "new-namespace";
const subnamespace = "subnamespace";

const provisionNamespaceTransaction: Transaction = ProvisionNamespaceTransaction.create(
    TimeWindow.createWithDeadline(),
    subnamespace,
    namespace
);

const signedTransaction = account.signTransaction(provisionNamespaceTransaction);
transactionHttp.announceTransaction(signedTransaction).subscribe( x => console.log(x));