import {NEMLibrary, NetworkTypes, Address, AccountHttp, ServerConfig} from "nem-library";

NEMLibrary.bootstrap(NetworkTypes.MAIN_NET);
// const accountHttp = new AccountHttp();
const accountHttp = new AccountHttp();
const address = new Address("NAAEWH-QWSAU3-5EFTMK-DU3UPT-H35WLD-G3JKLZ-3MYB");
let pagedTransactions = accountHttp.allTransactionsPaginated(address,undefined,100);
pagedTransactions.subscribe( x => {
    console.log(x);
});
pagedTransactions.nextPage();
pagedTransactions.nextPage();