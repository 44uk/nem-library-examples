import {NEMLibrary, NetworkTypes, Address, AccountOwnedAssetService, AccountHttp, AssetHttp} from "nem-library";

// Initialize NEMLibrary for TEST_NET Network
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

let address = new Address("");
let accountOwnedAsset = new AccountOwnedAssetService(new AccountHttp(), new AssetHttp());
accountOwnedAsset.fromAddress(address).subscribe(asset => {
    console.log(asset);
});