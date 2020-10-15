const outputArea = document.getElementById('output');
const fileURLInput = document.getElementById('wasm-file-url');

async function wasmFromURL() {
  const url = fileURLInput.value;
  if(url) {
    const result = await convertWasmFromURLToUint(url);
    outputArea.value = result;
  }
}
async function convertWasmFromURLToUint(url) {
  const req = await fetch(url);
  const bytes = await req.arrayBuffer();
  return new Uint8Array(bytes);
}
