import {AccountHttp, NEMLibrary, NetworkTypes} from "nem-library";

NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

const accountHttp = new AccountHttp();

accountHttp.getAccountImportances()
    .subscribe(x => {
        console.log(x);
    });