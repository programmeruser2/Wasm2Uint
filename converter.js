function convertWasmFromURLToUint(url) {
  let result;
  fetch(url)
  .then(response => response.arrayBuffer())
  .then(bytes => { result = new Uint8Array(bytes) });
  return result;
}
