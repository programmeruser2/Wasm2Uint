function convertWasmFromURLToUint(url) {
  let result;
  fetch(url)
  .then(response => response.arrayBuffer())
  .then(bytes => return new Uint8Array(response))
}
