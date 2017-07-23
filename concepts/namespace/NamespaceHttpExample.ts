/**
 * Run this code:
 * tsc
 * node concepts/namespace/NamespaceHttpExample.js
 */
import {NamespaceHttp, NEMLibrary, NetworkTypes} from "nem-library";

// Initialize NEMLibrary for TEST_NET Network
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

const namespaceHttp = new NamespaceHttp({domain: "104.128.226.60"});
const id = 12344;

namespaceHttp.getRootNamespaces(id).subscribe(namespaces => {
    console.log(namespaces);
});