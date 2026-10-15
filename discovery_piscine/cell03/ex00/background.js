const body = document.body;

body.style.margin = '0';
body.style.minHeight = '100vh';
body.style.display = 'flex';
body.style.alignItems = 'center';
body.style.justifyContent = 'center';
body.style.transition = 'background-color 0.3s ease';

const button = document.createElement('button');
button.textContent = 'Change color';
button.type = 'button';
button.style.padding = '12px 24px';
button.style.fontSize = '1rem';
button.style.fontWeight = '600';
button.style.cursor = 'pointer';
button.style.border = 'none';
button.style.borderRadius = '8px';
button.style.backgroundColor = '#ffffff';
button.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';

button.addEventListener('click', () => {
  const randomColor = '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
  document.body.style.backgroundColor = randomColor;
});

body.appendChild(button);
