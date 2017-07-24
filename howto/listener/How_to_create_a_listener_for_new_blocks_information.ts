/**
 * nem-library 0.3.0
 */

import {BlockchainListener} from "nem-library";

let blockchainListener = new BlockchainListener({domain: "23.228.67.85"}).newBlock().subscribe(x => {
    console.log(x);
}, err => {
    console.log(err);
});
