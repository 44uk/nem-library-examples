import {
    AccountHttp, Address, MultisigTransaction, NEMLibrary, NetworkTypes, Transaction,
    TransactionTypes
} from "nem-library";

NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

const accountHttp = new AccountHttp();

accountHttp.allTransactions(new Address("TCFFOM-Q2SBX7-7E2FZC-3VX43Z-TRV4ZN-TXTCGW-BM5J"))
    .map((transactions: Transaction[]): MultisigTransaction[] => {
        console.log(">>>>>>>>>>>>");
        console.log("All Transactions", transactions);
        return <MultisigTransaction[]>transactions.filter(x => x.type == TransactionTypes.MULTISIG)
    })
    .subscribe((x: MultisigTransaction[]) => {
        console.log("\n\n>>>>>>>>>>>>");
        console.log("Just Multisig", x)
    });