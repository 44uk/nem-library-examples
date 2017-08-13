/**
 * nem-library 0.3.0
 */
import {
    NEMLibrary, NetworkTypes, Account, TransferTransaction, TimeWindow,
    TransactionHttp, XEM, PublicAccount
} from "nem-library";
declare let process: any;

// Initialize NEMLibrary for TEST_NET Network
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

const transactionHttp = new TransactionHttp();

// Replace with a cosignatory private key
const privateKey: string = process.env.PRIVATE_KEY;
const recipientPublicAccount = PublicAccount.createWithPublicKey("b254d8b2b00e1b1266eb54a6931cd7c1b0f307e41d9ebb01f025f4933758f0be");

const account = Account.createWithPrivateKey(privateKey);

const encryptedMessage = account.encryptMessage("a transaction", recipientPublicAccount);
const transferTransaction = TransferTransaction.create(
    TimeWindow.createWithDeadline(),
    recipientPublicAccount.address,
    new XEM(2),
    encryptedMessage
);
