// layout.js

document.addEventListener('DOMContentLoaded', () => {
  // Load Header
  const headerPlaceholder = document.getElementById('header-placeholder');
  if (headerPlaceholder) {
    fetch('header.html')
      .then(res => res.text())
      .then(html => {
        headerPlaceholder.innerHTML = html;
      })
      .catch(err => console.error('Error loading header:', err));
  }

  // Load Footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    fetch('footer.html')
      .then(res => res.text())
      .then(html => {
        footerPlaceholder.innerHTML = html;
      })
      .catch(err => console.error('Error loading footer:', err));
  }
});
