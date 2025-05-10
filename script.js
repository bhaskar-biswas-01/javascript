function upDate(previewPic) {
  console.log("Event triggered");
  console.log("Source: " + previewPic.src);
  console.log("Alt text: " + previewPic.alt);

  let imageDiv = document.getElementById('image');
  imageDiv.innerHTML = previewPic.alt;
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
  let imageDiv = document.getElementById('image');
  imageDiv.innerHTML = "Hover over an image below to display here.";
  imageDiv.style.backgroundImage = "url('')";
}
