
import {
    NEMLibrary, NetworkTypes, TimeWindow, Account, TransactionHttp,
    AssetDefinitionCreationTransaction, AssetDefinition, PublicAccount, AssetId, AssetProperties, AssetLevy,
    AssetLevyType
} from "nem-library";

declare let process: any;

// Initialize NEMLibrary for TEST_NET Network
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

const privateKey: string = process.env.PRIVATE_KEY;
const account = Account.createWithPrivateKey(privateKey);
const transactionHttp = new TransactionHttp();

const assetDefinitionTransaction = AssetDefinitionCreationTransaction.create(
    TimeWindow.createWithDeadline(),
    new AssetDefinition(
        PublicAccount.createWithPublicKey(account.publicKey),
        new AssetId("new-namespace", "new-asset"),
        "asset description",
        new AssetProperties(0, 9000000, true, true),
        new AssetLevy(
            AssetLevyType.Percentil,
            account.address,
            new AssetId("nem", "xem"),
            2
        )
    )
);

const signedTransaction = account.signTransaction(assetDefinitionTransaction);
transactionHttp.announceTransaction(signedTransaction).subscribe( x => console.log(x));