import {NEMLibrary, NetworkTypes, MosaicId, MosaicLevy, MosaicLevyType, Address, MosaicTransferable, MosaicHttp, MosaicProperties, MosaicService} from "nem-library";

// Initialize NEMLibrary for TEST_NET Network
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

let levyMosaicId = new MosaicId("server", "testmosaic");
let levy = new MosaicLevy(MosaicLevyType.Percentil, new Address(""), levyMosaicId, 5);
let mosaicTransferable = new MosaicTransferable(new MosaicId("server", "mosaic"), new MosaicProperties(0, 10000000, true, false), 100000, levy);

let mosaicService = new MosaicService(new MosaicHttp());
mosaicService.calculateLevy(mosaicTransferable).subscribe(levy => {
    console.log(levy);
});