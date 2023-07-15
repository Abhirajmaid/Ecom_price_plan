const checkbox = document.getElementById("checkbox");
const professional = document.getElementById("professional");
const master = document.getElementById("master");
const basic = document.getElementById("basic");

checkbox.addEventListener("click", () => {
    basic.textContent = basic.textContent === "Rs. 799/mo" ? "Rs. 639/mo" : "Rs. 799/mo";
    professional.textContent = professional.textContent === "Rs. 1,699/mo" ? "Rs. 1,359/mo" : "Rs. 1,699/mo";
    master.textContent = master.textContent === "Rs. 5,999/mo" ? "Rs. 4,799/mo" : "Rs. 5,999/mo";
});
