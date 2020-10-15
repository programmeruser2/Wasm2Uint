const outputArea = document.getElementById('output');
const fileURLInput = document.getElementById('wasm-file-url);

async function wasmFromURL() {
  const result = await convertWasmFromURL(fileURLInput.value);
  outputArea.value = result;
}
async function convertWasmFromURLToUint(url) {
  const req = await fetch(url);
  const bytes = await req.arrayBuffer();
  return new Uint8Array(bytes);
}
