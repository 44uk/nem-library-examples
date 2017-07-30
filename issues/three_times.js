"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nem_library_1 = require("nem-library");
nem_library_1.NEMLibrary.bootstrap(nem_library_1.NetworkTypes.TEST_NET);
(function () {
    var accountHttp = new nem_library_1.AccountHttp();
    var address = new nem_library_1.Address("TCFFOM-Q2SBX7-7E2FZC-3VX43Z-TRV4ZN-TXTCGW-BM5J");
    var pagedTransactions = accountHttp.allTransactionsPaginated(address, undefined, 100);
    var time = 0;
    pagedTransactions.subscribe(function (x) {
        console.log("TIME ", ++time);
        console.log("transactions size", x.length);
        pagedTransactions.nextPage();
    });
})();
