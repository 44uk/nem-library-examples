/**
 * nem-library 0.3.0
 */

import {Address, ConfirmedTransactionListener} from "nem-library";

const address = new Address("TDM3DO-ZM5WJ3-ZRBPSM-YRU6JS-WKUCAH-5VIPOF-4W7K");

let confirmedTransactionListener = new ConfirmedTransactionListener({domain: "23.228.67.85"}).given(address).subscribe(x => {
    console.log(x);
}, err => {
    console.log(err);
});