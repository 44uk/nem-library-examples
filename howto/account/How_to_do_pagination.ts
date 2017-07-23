import { AccountHttp, Address, NEMLibrary, NetworkTypes, Transaction } from "nem-library";

NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

const accountHttp = new AccountHttp();

let incomingTransactionsObservable = accountHttp.incomingTransactions(new Address("TCFFOM-Q2SBX7-7E2FZC-3VX43Z-TRV4ZN-TXTCGW-BM5J"));

let firstFetch = true;
incomingTransactionsObservable.subscribe(x => {
    console.log("CALL ", x);
    if (firstFetch) {
        firstFetch = false;
        const lastTransactionHash: string = x.pop()!.getTransactionInfo().hash.data;
        console.log("LAST HASH", lastTransactionHash)
        incomingTransactionsObservable = accountHttp.incomingTransactions(
            new Address("TCFFOM-Q2SBX7-7E2FZC-3VX43Z-TRV4ZN-TXTCGW-BM5J"),
            lastTransactionHash
        )
    }
});