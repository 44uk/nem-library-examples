/**
 * nem-library 0.3.0
 */

import { AccountHttp, Address, NEMLibrary, NetworkTypes, Transaction } from "nem-library";

NEMLibrary.bootstrap(NetworkTypes.TEST_NET);
let address = new Address("TCFFOM-Q2SBX7-7E2FZC-3VX43Z-TRV4ZN-TXTCGW-BM5J");
let accountHttp = new AccountHttp();

let pageable = accountHttp.outgoingTransactionsPaginated(address);

pageable.subscribe(incomingTransactions => {
    // do something with the info
});

pageable.nextPage(); // Fetch the nexts 25 incomming transactions