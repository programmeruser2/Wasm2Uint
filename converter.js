function convertWasmFromURL(url) {
  fetch(url)
  .then(response => response.arrayBuffer())
  .then(bytes => return new Uint8Array(bytes));
}
