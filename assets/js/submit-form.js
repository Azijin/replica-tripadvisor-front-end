document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector("#contactForm");
  const buttonSubmit = document.querySelector("#submit-form");
  const confirmation = document.querySelector("#confirmation");
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    buttonSubmit.setAttribute("disabled", "disabled");
    buttonSubmit.classList.add("button-disabled");
    const data = {
      firstname: document.querySelector("#firstname").value,
      surname: document.querySelector("#surname").value,
      email: document.querySelector("#email").value,
      password: document.querySelector("#password").value,
      description: document.querySelector("#description").value,
    };
    console.log(data);
    const response = await axios.post(
      "https://replica-tripadvisor.herokuapp.com/",
      data
    );
    console.log(response);
    if (response.status !== 200) {
      alert("Le formulaire n'a pas pu être envoyé");
      buttonSubmit.removeAttribute("disabled");
      buttonSubmit.classList.remove("button-disabled");
    } else {
      buttonSubmit.removeAttribute("disabled");
      buttonSubmit.classList.remove("button-disabled");
      confirmation.style.display = "block";
      contactForm.reset();
    }
  });
});
