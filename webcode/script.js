document.getElementById('post-ad-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form values
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const image = document.getElementById('image').value;

  // Create ad element
  const adItem = document.createElement('div');
  adItem.classList.add('ad-item');
  adItem.innerHTML = `
    <h3>${title}</h3>
    <p>${description}</p>
    <img src="${image}" alt="${title}">
  `;

  // Append ad to the ads container
  document.getElementById('ads-container').appendChild(adItem);

  // Clear the form
  document.getElementById('post-ad-form').reset();
});