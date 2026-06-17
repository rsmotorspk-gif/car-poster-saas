let uploadedImage = "";

document.getElementById("carImage").addEventListener("change", function(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    uploadedImage = e.target.result;
    document.getElementById("posterImage").src = uploadedImage;
  }

  reader.readAsDataURL(file);
});

function generate() {
  document.getElementById("pName").innerText =
    document.getElementById("name").value;

  document.getElementById("pPrice").innerText =
    "Price: " + document.getElementById("price").value;

  document.getElementById("pMileage").innerText =
    "Mileage: " + document.getElementById("mileage").value;

  document.getElementById("pCity").innerText =
    "City: " + document.getElementById("city").value;
}

// 📸 Download Poster
function downloadPoster() {
  const poster = document.getElementById("poster");

  html2canvas(poster).then(canvas => {
    const link = document.createElement("a");
    link.download = "car-poster.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}

// 💬 WhatsApp Share
function shareWhatsApp() {
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;

  let text =
`🚗 Car Available
${name}
💰 Price: ${price}
📞 Contact for details`;

  let url = "https://wa.me/?text=" + encodeURIComponent(text);
  window.open(url, "_blank");
}
