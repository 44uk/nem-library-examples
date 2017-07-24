/**
 * nem-library 0.3.0
 */

import { AccountHttp, Address, NEMLibrary, NetworkTypes } from "nem-library";

NEMLibrary.bootstrap(NetworkTypes.TEST_NET);
let address = new Address("TCFFOM-Q2SBX7-7E2FZC-3VX43Z-TRV4ZN-TXTCGW-BM5J");
let accountHttp = new AccountHttp();

let pageable = accountHttp.allTransactionsPaginated(address);

pageable.subscribe(transactions => {
    console.log(transactions);
});

pageable.nextPage(); // Fetch the nexts 25 transactions