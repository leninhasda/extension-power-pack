window.addEventListener('keyup', (e) => {
  console.log(e.key, e.code)
  if (e.ctrlKey && e.code == "Backslash") { // Ctrl+\
    document.querySelector('div[aria-label="Main menu"]').click();
  }
})