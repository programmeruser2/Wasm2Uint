function convertWasmFromURLToUint(url) {
  let result;
  return fetch(url)
  .then(response => response.arrayBuffer())
  .then(bytes => return new Uint8Array(response))
}
