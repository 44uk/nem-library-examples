/**
 * nem-library 0.3.0
 */

import { AccountListener, Address, NEMLibrary, NetworkTypes } from "nem-library";

// Initialize NEMLibrary for TEST_NET Network
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

const address = new Address("TDM3DO-ZM5WJ3-ZRBPSM-YRU6JS-WKUCAH-5VIPOF-4W7K");
const senderAddress = new Address('TDKUBA-3Z6KDX-NRQNNL-HOTC64-JGP2LL-YOXBKU-FQHY');

new AccountListener([
    {
        domain: '23.228.67.85'
    }
]).given(address).subscribe(x => {
    console.log('address', x);
}, err => {
    console.log(err);
});

new AccountListener([
    {
        domain: '23.228.67.85'
    }
]).given(senderAddress).subscribe(x => {
    console.log('sender', x);
}, err => {
    console.log(err);
});

console.log('Running, send transaction to ', address.pretty());
console.log('Running, send transaction from ', senderAddress.pretty());