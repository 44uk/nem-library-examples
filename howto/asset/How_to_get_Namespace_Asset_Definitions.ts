import {
    NEMLibrary, NetworkTypes, AssetHttp, TransactionTypes
} from "nem-library";

// Initialize NEMLibrary for TEST_NET Network
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

const assetHttp = new AssetHttp();
const namespace = "new-namespace";

assetHttp.getAllAssetsGivenNamespace(namespace).subscribe(assetDefinitions => console.log(assetDefinitions));