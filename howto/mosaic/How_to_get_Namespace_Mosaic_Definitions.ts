import {
    NEMLibrary, NetworkTypes, MosaicHttp, TransactionTypes
} from "nem-library";

// Initialize NEMLibrary for TEST_NET Network
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

const mosaicHttp = new MosaicHttp();
const namespace = "new-namespace";

mosaicHttp.getAllMosaicsGivenNamespace(namespace).subscribe(mosaicDefinitions => console.log(mosaicDefinitions));