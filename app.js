const smallSubscribeButton = document.querySelector(".smallsubscribe");

if (smallSubscribeButton) {
  smallSubscribeButton.addEventListener("click", function () {
    const email = document.querySelector(".p-email").value;
    window.localStorage.setItem("email", email);
  });
}

const insertemail = document.querySelector(".insertemail");

if (insertemail) {
  const email = window.localStorage.getItem("email");
  insertemail.innerHTML = email;
}

const searchtext = document.querySelector(".text");
const searchOptions = document.querySelector(".searchoptions");

if (searchtext) {
  searchtext.addEventListener("input", function () {
    if (searchtext.value.toLowerCase() === "p") {
      searchOptions.style.display = "flex";
    } else {
      searchOptions.style.display = "none";
    }
  });
}
