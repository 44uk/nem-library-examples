/**
 * Run this code:
 * tsc
 * node concepts/namespace/NamespaceHttpExample.js
 */
import {NamespaceHttp, NEMLibrary, NetworkTypes} from "nem-library";

// Initialize NEMLibrary for TEST_NET Network
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

const namespaceHttp = new NamespaceHttp();
const id = 12344;

namespaceHttp.getRootNamespaces(id).subscribe(namespaces => {
    console.log(namespaces);
});