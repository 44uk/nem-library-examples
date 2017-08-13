/**
 * nem-library 0.3.0
 */

import {BlockchainListener, NEMLibrary, NetworkTypes} from "nem-library";

// Initialize NEMLibrary for TEST_NET Network
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

let blockchainListener = new BlockchainListener().newHeight();
blockchainListener.subscribe(x => {
    console.log(x);
}, err => {
    console.log(err);
});
