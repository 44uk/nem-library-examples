/**
 * Run this code:
 * tsc
 * node concepts/account/AccountHttpExample.js
 */
import {AccountHttp, NEMLibrary, NetworkTypes, Address} from "nem-library";

// Inicializate NEMLibrary for TEST_NET Network
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

const address = new Address("TALICE-ROONSJ-CPHC63-F52V6F-Y3SDMS-VAEUGH-MB7C");

const accountHttp = new AccountHttp({domain: "104.128.226.60"});
accountHttp.getFromAddress(address).subscribe(accountInfoWithMetaData => {
    console.log(accountInfoWithMetaData);
});