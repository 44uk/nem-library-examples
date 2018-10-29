/**
 * nem-library 0.5.1
 */
import {
    NEMLibrary, NetworkTypes, Address, TransferTransaction, TimeWindow,
    AssetHttp, TransactionHttp, Account, EmptyMessage, AssetId
} from "nem-library";
import {from} from "rxjs";
import {flatMap, map, toArray} from "rxjs/operators";

declare let process: any;

// Initialize NEMLibrary for TEST_NET Network
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

// Replace with a cosignatory private key
const privateKey: string = process.env.PRIVATE_KEY;

const transactionHttp = new TransactionHttp();
const assetHttp = new AssetHttp();
const account = Account.createWithPrivateKey(privateKey);

from([
    {asset: new AssetId("mynamespace", "asset1"), quantity: 10},
    {asset: new AssetId("mynamespace", "asset2"), quantity: 10},
    {asset: new AssetId("mynamespace", "asset3"), quantity: 10}
    ])
    .pipe(
        flatMap(_ => assetHttp.getAssetTransferableWithAbsoluteAmount(_.asset, _.quantity)),
        toArray(),
        map(assets => TransferTransaction.createWithAssets(
            TimeWindow.createWithDeadline(),
            new Address("TBV7LE4TFDEMGVOON5MYOK2P7TU2KEKLMHOLHQT6"),
            assets,
            EmptyMessage
            )
        ),
        map(transaction => account.signTransaction(transaction)),
        flatMap(signedTransaction => transactionHttp.announceTransaction(signedTransaction))
    )
    .subscribe(nemAnnounceResult => {
        console.log(nemAnnounceResult);
    });