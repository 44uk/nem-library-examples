import {ChainHttp, NEMLibrary, NetworkTypes} from "nem-library";

// Initialize NEMLibrary for TEST_NET Network
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

const chainHttp = new ChainHttp();
chainHttp.getBlockchainLastBlock().subscribe(block => {
    console.log(block);
});
