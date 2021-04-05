import ipfs from "ipfs";
import CID from "cids";

async function main() {
  // Start local IPFS node
  const node = await ipfs.create();
  const version = await node.version();

  console.log("Version: ", version.version);

  // Upload File
  const file = await node.add({
    path: "hello.txt",
    content: new TextEncoder().encode("Hello World"),
  });

  console.log("Uploaded File: ", file.path, file.cid.toString());

  // Download
  const decoder = new TextDecoder();
  let content = "";
  for await (const chunk of node.cat(file.cid.toString())) {
    content += decoder.decode(chunk);
  }

  console.log("Downloaded Content: ", content);
}

main();
