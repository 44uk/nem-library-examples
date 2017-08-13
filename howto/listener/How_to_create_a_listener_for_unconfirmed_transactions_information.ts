/**
 * nem-library 0.3.0
 */

import {Address, NEMLibrary, NetworkTypes, UnconfirmedTransactionListener} from "nem-library";

// Initialize NEMLibrary for TEST_NET Network
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

const address = new Address("TDM3DO-ZM5WJ3-ZRBPSM-YRU6JS-WKUCAH-5VIPOF-4W7K");

let unconfirmedTransactionListener = new UnconfirmedTransactionListener().given(address);
unconfirmedTransactionListener.subscribe(x => {
    console.log(x);
}, err => {
    console.log(err);
});