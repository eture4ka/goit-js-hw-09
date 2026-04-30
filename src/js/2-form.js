const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");

let formData = { email: "", message: "" };

// Завантаження збережених даних при старті
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  formData = JSON.parse(savedData);
  form.elements.email.value = formData.email ?? "";
  form.elements.message.value = formData.message ?? "";
}

// Збереження при введенні
form.addEventListener("input", (event) => {
  const { name, value } = event.target;

  if (name === "email" || name === "message") {
    formData[name] = value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
});

// Відправка форми
form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  formData = { email: "", message: "" };
  form.reset();
});