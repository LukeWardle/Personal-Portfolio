const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Script that handles contact page form.
const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    const formData = new FormData(form); // Create a new FormData object from the form data

    fetch('/submit', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // Log the response from the server to the console
        // Do something with the response, e.g. display a success message to the user
    })
    .catch(error => {
        console.error(error); // Log any errors to the console
        // Display an error message to the user
    });
});


