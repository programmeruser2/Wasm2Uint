const outputArea = document.getElementById('output');
const fileURLInput = document.getElementById('wasm-file-url');
const fileInput = document.getElementById('wasm-file-upload');

fileInput.onchange = function(event) {
	const fileReader = new FileReader();
	let result;
	fileReader.onload = function() {
		result = new Uint8Array(fileReader.result)
		outputArea.value = `var wasmCode = new Uint8Array([${result}])`;
	}
	fileReader.readAsArrayBuffer(this.files[0]);
}

async function wasmFromURL() {
  const url = fileURLInput.value;
  if (url.trim()) {
    const result = await convertWasmFromURLToUint(url);
		if(result) {
    	outputArea.value = `var wasmCode = new Uint8Array([${result}]);`;
		}
  }
}
async function convertWasmFromURLToUint(url) {
  const res = await fetch('https://cors-anywhere.herokuapp.com/'+url);
	if (
		res.headers.get('Content-Type').indexOf('application/wasm') === -1 && 
		!(window.confirm(`This file doesn\'t appear to be a WebAssembly file.\n Do you want to load the file at ${url}?`)) 
	) {
		return;
	}
  const bytes = await res.arrayBuffer();
  return new Uint8Array(bytes);
}
