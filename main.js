import { Modal } from "./src/modal.js";

const memeCanvas = document.getElementById("meme");
// Create unattached canvas elements
// to serve as "layers" of the meme
const selfieLayer = document.createElement("canvas");
const textLayer = document.createElement("canvas");
for (let canvas of [selfieLayer, textLayer]) {
  canvas.width = memeCanvas.width;
  canvas.height = memeCanvas.height;
  console.log(`selfieLayer ${selfieLayer}`)
  console.log(`textLayer ${selfieLayer}`)
}


function setupAddText() {
  const textInputs = document.getElementById("add-text");
  const saveTextBtn = document.getElementById("text-save");

  saveTextBtn.addEventListener("click", () => {
    // drawText(textLayer);
    // redrawMeme();
  });

  const textModal = new Modal(
    "Add some text",
    textInputs,
    textInputs.querySelector(".modal-content")
  );
  textModal.render();
}


(async function run() {
  // setupSettings();
  setupAddText();
  // await setupTakeSelfie();
})();
