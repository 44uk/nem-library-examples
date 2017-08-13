import {BlockHttp, NEMLibrary, NetworkTypes} from "nem-library";

// InitializeLibrary for TEST_NET Network
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

const blockHttp = new BlockHttp();
blockHttp.getBlockByHeight(1033023).subscribe(block => {
    console.log(block);
});