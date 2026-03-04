document.addEventListener("DOMContentLoaded", function() {
  // Attach listeners to all "View details" buttons
  document.querySelectorAll('button[data-product]').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const { product, desc, price, img } = btn.dataset;
      openModal(product, desc, price, img);
    });
  });
  // Attach close button logic
  document.querySelectorAll('#product-modal .close-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.getElementById('product-modal').classList.remove('active');
    });
  });
});

function openModal(title, desc, price, imgSrc) {
  const modal = document.getElementById('product-modal');
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-desc').textContent = desc;
  document.getElementById('modal-price').textContent = price;
  document.getElementById('modal-img').src = imgSrc;
  modal.classList.add('active');
  // Accessibility: focus trap
  const focusable = modal.querySelectorAll('button, [tabindex]:not([tabindex="-1"])');
  let first = focusable[0], last = focusable[focusable.length - 1];
  function trap(e) {
    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    }
    if (e.key === 'Escape') closeModal();
  }
  function closeOnOverlay(e) {
    if (e.target === modal) closeModal();
  }
  function closeModal() {
    modal.classList.remove('active');
    document.removeEventListener('keydown', trap);
    modal.removeEventListener('click', closeOnOverlay);
  }
  document.addEventListener('keydown', trap);
  modal.addEventListener('click', closeOnOverlay);
  setTimeout(() => first && first.focus(), 50);
}
