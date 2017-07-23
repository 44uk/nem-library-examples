import {ChainHttp, NEMLibrary, NetworkTypes} from "nem-library";

// Initialize NEMLibrary for TEST_NET Network
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

const chainHttp = new ChainHttp({domain: "104.128.226.60"});
chainHttp.getBlockchainLastBlock().subscribe(block => {
    console.log(block);
});