import {
    Address,
    EmptyMessage,
    NEMLibrary,
    NetworkTypes,
    TimeWindow,
    Transaction,
    TransferTransaction,
    XEM
} from "nem-library";

// Initialize NEMLibrary for TEST_NET Network
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

const transferTransaction: Transaction = TransferTransaction.create(
    TimeWindow.createWithDeadline(),
    new Address("TCFFOM-Q2SBX7-7E2FZC-3VX43Z-TRV4ZN-TXTCGW-BM5J"),
    new XEM(2),
    EmptyMessage
);
