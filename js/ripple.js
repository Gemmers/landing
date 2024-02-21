document.body.addEventListener('click', (e) => {
  const droplet = document.createElement('i');
  droplet.classList.add('fa', 'fa-droplet', 'click-drop');
  droplet.style.left = `${e.clientX}px`;
  droplet.style.top = `${e.clientY}px`;
  document.body.appendChild(droplet);

  setTimeout(() => {
    droplet.style.opacity = '0'; // Réduit l'opacité à 0
    setTimeout(() => {
      droplet.remove(); // Supprime l'élément après la transition
    }, 500); // Durée de la transition (0,5 seconde)
  }, 1000); // Durée avant la disparition (1 seconde)
});
