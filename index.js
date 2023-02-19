const endDate = "21 February 2023 7:00 PM";
document.getElementById("end-date").textContent = endDate;
const input = document.querySelectorAll("input");
const title = document.getElementById("head")

function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;
  if(diff < 0 ) {
    finalScreen()
    return
  }

  input[0].value = Math.floor(diff / 3600 / 24);
  input[1].value = Math.floor((diff / 3600 ) % 24);
  input[2].value = Math.floor((diff / 60 ) % 60);
  input[3].value = Math.floor(diff % 60);
}

function finalScreen(){
        title.textContent = "Wohoo..!! We are here 🥳🎉"
}
clock();
setInterval(() => {
    clock();
}, 1000);


