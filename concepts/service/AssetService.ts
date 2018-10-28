import {NEMLibrary, NetworkTypes, AssetId, AssetLevy, AssetLevyType, Address, AssetTransferable, AssetHttp, AssetProperties, AssetService} from "nem-library";

// Initialize NEMLibrary for TEST_NET Network
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

let levyAssetId = new AssetId("server", "testasset");
let levy = new AssetLevy(AssetLevyType.Percentil, new Address(""), levyAssetId, 5);
let assetTransferable = new AssetTransferable(new AssetId("server", "asset"), new AssetProperties(0, 10000000, true, false), 100000, levy);

let assetService = new AssetService(new AssetHttp());
assetService.calculateLevy(assetTransferable).subscribe(levy => {
    console.log(levy);
});