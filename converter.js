async function convertWasmFromURLToUint(url) {
  const req = await fetch(url);
  const bytes = await req.arrayBuffer();
  return new Uint8Array(bytes);
}
