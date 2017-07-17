/**
 * Run this code:
 * tsc
 * node concepts/node/NodeHttpExample.js
 */
import {NodeHttp, NEMLibrary, NetworkTypes} from "nem-library";

// Inicializate NEMLibrary for TEST_NET Network
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

const nodeHttp = new NodeHttp({domain: "104.128.226.60"});
nodeHttp.getNodeInfo().subscribe(node => {
    console.log(node);
});
