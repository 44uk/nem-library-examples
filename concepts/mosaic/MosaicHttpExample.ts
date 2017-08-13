/**
 * Run this code:
 * tsc
 * node concepts/mosaic/MosaicHttpExample.js
 */
import {MosaicHttp, NEMLibrary, NetworkTypes} from "nem-library";

// Initialize NEMLibrary for TEST_NET Network
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

const mosaicHttp = new MosaicHttp();
const namespace = "server";

mosaicHttp.getAllMosaicsGivenNamespace(namespace).subscribe(mosaicDefinitions => {
    console.log(mosaicDefinitions);
});