import {
    AccountHttp, NEMLibrary, NetworkTypes, Address, Account, TransferTransaction, TimeWindow,
    EmptyMessage, MultisigTransaction, PublicAccount, TransactionHttp, XEM, MultisigAggregateModificationTransaction,
    CosignatoryModification, CosignatoryModificationAction
} from "nem-library";
declare let process: any;

// Initialize NEMLibrary for TEST_NET Network
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

const transactionHttp = new TransactionHttp();

// Replace with the private key of the account that you want to convert into multisig
const privateKey: string = process.env.PRIVATE_KEY;
const cosignatory1PublicKey: string = process.env.COSIGNATORY_1_PUBLIC_KEY;
const cosignatory2PublicKey: string = process.env.COSIGNATORY_2_PUBLIC_KEY;

const account = Account.createWithPrivateKey(privateKey);

const cosignatory1 = PublicAccount.createWithPublicKey(cosignatory1PublicKey);
const cosignatory2 = PublicAccount.createWithPublicKey(cosignatory2PublicKey);

const convertIntoMultisigTransaction = MultisigAggregateModificationTransaction.create(
    TimeWindow.createWithDeadline(),
    [
        new CosignatoryModification(cosignatory1, CosignatoryModificationAction.ADD),
        new CosignatoryModification(cosignatory2, CosignatoryModificationAction.ADD),
    ],
    2
);

const signedTransaction = account.signTransaction(convertIntoMultisigTransaction);

transactionHttp.announceTransaction(signedTransaction).subscribe(x => console.log(x));