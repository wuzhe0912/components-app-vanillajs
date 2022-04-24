document.querySelectorAll('.accordion-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const accordionContent = btn.nextElementSibling;
    btn.classList.toggle('accordion-btn-active');

    if (btn.classList.contains('accordion-btn-active')) {
      accordionContent.classList.toggle('accordion-content-active');
    } else {
      accordionContent.classList.toggle('accordion-content-active');
    }
  });
});
