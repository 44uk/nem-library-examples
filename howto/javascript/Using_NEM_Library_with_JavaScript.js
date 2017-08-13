const nemLibrary = require("nem-library");
const NEMLibrary = nemLibrary.NEMLibrary,
    Address = nemLibrary.Address,
    NetworkTypes = nemLibrary.NetworkTypes,
    TimeWindow = nemLibrary.TimeWindow,
    TransferTransaction = nemLibrary.TransferTransaction,
    TransactionHttp = nemLibrary.TransactionHttp,
    XEM = nemLibrary.XEM,
    EmptyMessage = nemLibrary.EmptyMessage,
    Account = nemLibrary.Account;

// Initialize NEMLibrary for TEST_NET Network
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);
let transactionHttp = new TransactionHttp();

let account = Account.createWithPrivateKey("<INSERT HERE YOUR PRIVATE KEY>");

let transferTransaction = TransferTransaction.create(
    TimeWindow.createWithDeadline(),
    new Address("TCFFOM-Q2SBX7-7E2FZC-3VX43Z-TRV4ZN-TXTCGW-BM5J"),
    XEM(0),
    EmptyMessage
);

let signedTransaction = account.signTransaction(transferTransaction);

transactionHttp.announceTransaction(signedTransaction).subscribe( x => console.log(x));