document.addEventListener("DOMContentLoaded", () => {
  const skills = document.querySelectorAll(".skill-level");

  skills.forEach(skill => {
    const percentage = skill.getAttribute("data-percentage");
    // delay a little so transition works
    setTimeout(() => {
      skill.style.width = percentage + "%";
    }, 200);
  });
});