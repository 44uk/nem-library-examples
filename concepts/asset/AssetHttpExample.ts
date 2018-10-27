/**
 * Run this code:
 * tsc
 * node concepts/asset/AssetHttpExample.js
 */
import {AssetHttp, NEMLibrary, NetworkTypes} from "nem-library";

// Initialize NEMLibrary for TEST_NET Network
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

const assetHttp = new AssetHttp();
const namespace = "server";

assetHttp.getAllAssetsGivenNamespace(namespace).subscribe(assetDefinitions => {
    console.log(assetDefinitions);
});