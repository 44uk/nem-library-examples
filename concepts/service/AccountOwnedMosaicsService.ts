import {NEMLibrary, NetworkTypes, Address, AccountOwnedMosaicsService, AccountHttp, MosaicHttp} from "nem-library";

// Initialize NEMLibrary for TEST_NET Network
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

let address = new Address("");
let accountOwnedMosaics = new AccountOwnedMosaicsService(new AccountHttp(), new MosaicHttp());
accountOwnedMosaics.fromAddress(address).subscribe(mosaics => {
    console.log(mosaics);
});