import {NEMLibrary, NetworkTypes, NodeHttp} from "nem-library";

// Initialize NEMLibrary for TEST_NET Network
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

const nodeHttp = new NodeHttp();
nodeHttp.getNisNodeInfo().subscribe(nisNodeInfo => console.log(nisNodeInfo));