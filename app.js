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
