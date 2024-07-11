const date = new Date();
const month = date.toLocaleString('en', { month: 'long' });
const year = date.toLocaleString('en', { year: 'numeric' });

const finishDate = month.concat(' ' + year);

const duree = document.getElementById('duree');

duree.textContent = duree.textContent.concat(finishDate);