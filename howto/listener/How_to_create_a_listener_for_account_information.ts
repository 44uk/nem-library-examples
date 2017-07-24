/**
 * nem-library 0.3.0
 */

import {AccountListener, Address, NEMLibrary, NetworkTypes} from "nem-library";

// Initialize NEMLibrary for TEST_NET Network
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

const address = new Address("TCJZJH-AV63RE-2JSKN2-7DFIHZ-RXIHAI-736WXE-OJGA");
let accountListener = new AccountListener({domain: "23.228.67.85"}).given(address).subscribe(x => {
    console.log(x);
}, err => {
    console.log(err);
});

