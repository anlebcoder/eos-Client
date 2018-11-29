const fibos = require("fibos");
const p2p = require("./p2p.json");

if (!p2p.length) {
	console.warn("p2p-peer-address is empty!\nPlease Run: fibos p2p.js");
	process.exit();
}

fibos.config_dir = "./data";
fibos.data_dir = "./data";
fibos.load("http", {
	"http-server-address": "0.0.0.0:8870",
	"access-control-allow-origin": "*",
	"http-validate-host": false,
	"verbose-http-errors": true
});

fibos.load("net", {
	"p2p-peer-address": p2p
});

fibos.load("producer");
fibos.load("chain", {
	"contracts-console": true
});

fibos.load("chain_api");

fibos.start();