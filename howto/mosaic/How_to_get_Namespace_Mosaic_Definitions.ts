import {
    NEMLibrary, NetworkTypes, MosaicHttp, TransactionTypes
} from "nem-library";

// Inicializate NEMLibrary for TEST_NET Network
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

const mosaicHttp = new MosaicHttp({domain: "104.128.226.60"});
const namespace = "new-namespace";

mosaicHttp.getMosaicDefinitions(namespace).subscribe(mosaicDefinitions => console.log(mosaicDefinitions));