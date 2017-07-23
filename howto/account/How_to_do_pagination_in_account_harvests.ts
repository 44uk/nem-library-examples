/**
 * nem-library 0.3.0
 */

import { AccountHttp, Address, NEMLibrary, NetworkTypes } from "nem-library";

NEMLibrary.bootstrap(NetworkTypes.TEST_NET);
let address = new Address("TALICESKTW5TAN5GEOK4TQKD43AUGSDTHK7UIIAK");
let accountHttp = new AccountHttp();

let pageable = accountHttp.getHarvestInfoDataForAnAccountPaginated(address);

pageable.subscribe(x => {

});

pageable.nextPage(); // Fetch the nexts 25 AccountHarvestInfo