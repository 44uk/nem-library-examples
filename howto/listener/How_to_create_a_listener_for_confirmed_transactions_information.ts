/**
 * nem-library 0.3.0
 */

import {Address, ConfirmedTransactionListener, NEMLibrary, NetworkTypes} from "nem-library";

NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

const address = new Address("TDM3DO-ZM5WJ3-ZRBPSM-YRU6JS-WKUCAH-5VIPOF-4W7K");

let confirmedTransactionListener = new ConfirmedTransactionListener().given(address);
confirmedTransactionListener.subscribe(x => {
    console.log(x);
}, err => {
    console.log(err);
});