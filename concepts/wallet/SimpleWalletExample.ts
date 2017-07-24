/**
 * nem-library 0.3.0
 */

import {SimpleWallet, Password, NetworkTypes, NEMLibrary} from "nem-library";

// Initialize NEMLibrary for TEST_NET Network
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

const password = new Password("password");
const simpleWallet = SimpleWallet.create("simple wallet", password);

console.log(simpleWallet);