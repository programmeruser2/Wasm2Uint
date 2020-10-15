const outputArea = document.getElementById('output');
const fileURLInput = document.getElementById('wasm-file-url');

async function wasmFromURL() {
  const url = fileURLInput.value;
  if(url.trim()) {
    const result = await convertWasmFromURLToUint(url);
    outputArea.value = `var wasmCode = new Uint8Array([${result}])`;
  }
}
async function convertWasmFromURLToUint(url) {
  const req = await fetch('https://cors-anywhere.herokuapp.com/'+url);
  const bytes = await req.arrayBuffer();
  return new Uint8Array(bytes);
}
