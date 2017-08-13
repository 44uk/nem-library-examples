/**
 * Run this code:
 * tsc
 * node concepts/node/NodeHttpExample.js
 */
import {NodeHttp, NEMLibrary, NetworkTypes} from "nem-library";

// Initialize NEMLibrary for TEST_NET Network
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

const nodeHttp = new NodeHttp();
nodeHttp.getNodeInfo().subscribe(node => {
    console.log(node);
});
