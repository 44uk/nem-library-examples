import {NEMLibrary, NetworkTypes, NodeHttp} from "nem-library";

// Inicializate NEMLibrary for TEST_NET Network
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

const nodeHttp = new NodeHttp({domain: "104.128.226.60"});
nodeHttp.getNisNodeInfo().subscribe(nisNodeInfo => console.log(nisNodeInfo));