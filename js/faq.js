let ls = document.querySelectorAll(".faq-tab");
ls = Array.from(ls);
console.log(ls);
ls.map(li => {
  li.addEventListener("click", () => {
    console.log(li);
  });
});
