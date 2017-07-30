import {AccountHttp, Address, NEMLibrary, NetworkTypes} from "nem-library";

NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

const accountHttp = new AccountHttp();
const address = new Address("TCFFOM-Q2SBX7-7E2FZC-3VX43Z-TRV4ZN-TXTCGW-BM5J");
let pagedTransactions = accountHttp.allTransactionsPaginated(address, undefined, 100);
let time = 0;
pagedTransactions.subscribe(x => {
    console.log("TIME ", ++time);
    console.log("transactions size", x.length);
    pagedTransactions.nextPage();
}, err => {
    console.log("error");
}, () => {
    // when this lambda is called, it means all transactions have been fetched
    console.log("complete");
});
