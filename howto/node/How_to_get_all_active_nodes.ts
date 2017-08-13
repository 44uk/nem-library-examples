import {NEMLibrary, NetworkTypes, NodeHttp} from "nem-library";

// Initialize NEMLibrary for TEST_NET Network
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

const nodeHttp = new NodeHttp();
nodeHttp.getActiveNodes().subscribe(nodes => console.log(nodes));