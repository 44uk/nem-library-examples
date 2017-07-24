/**
 * nem-library 0.3.0
 */

import {SimpleWallet, Password, NetworkTypes, NEMLibrary} from "nem-library";
declare let process: any;

// Initialize NEMLibrary for TEST_NET Network
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

const privateKey: string = process.env.PRIVATE_KEY;


const password = new Password("password");
const simpleWallet = SimpleWallet.createWithPrivateKey("simple wallet", password, privateKey);
const account = simpleWallet.open(password);