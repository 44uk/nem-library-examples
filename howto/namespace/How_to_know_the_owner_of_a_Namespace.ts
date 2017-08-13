import {
    NEMLibrary, NetworkTypes, NamespaceHttp
} from "nem-library";

// Initialize NEMLibrary for TEST_NET Network
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

const namespaceHttp = new NamespaceHttp();
const namespace = "new-namespace";

namespaceHttp.getNamespace(namespace).subscribe(namespace => console.log(namespace));