// // Add click event listeners to the buttons
// const buttons = document.querySelectorAll(".dropbtn");
// buttons.forEach(button => {
//     button.addEventListener("click", function() {
//         // Close all dropdowns except the one clicked
//         closeAllDropdowns();
//         const dropdown = this.nextElementSibling;
//         dropdown.classList.toggle("show");
//     });
// });

// // Close the dropdown when the user clicks outside of it
// window.addEventListener("click", function(event) {
//     if (!event.target.matches(".dropbtn")) {
//         closeAllDropdowns();
//     }
// });

// // Function to close all dropdowns
// function closeAllDropdowns() {
//     const dropdowns = document.querySelectorAll(".dropdown-content");
//     dropdowns.forEach(dropdown => {
//         if (dropdown.classList.contains("show")) {
//             dropdown.classList.remove("show");
//         }
//     });
// }
