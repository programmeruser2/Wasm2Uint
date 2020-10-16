# Wasm2Uint
Convert WebAssembly files to a Uint8Array
Upload files or load from a URL
https://icositetrachoron-programmer.github.io/Wasm2Uint

## Using the Uint8Array
```
var wasmCode = new Uint8Array([/* Your array */]);
var module = new WebAssembly.Module(wasmCode);
var instance = new WebAssembly.Instance(module);
instance.exports.main() //or whatever exported function you need
```