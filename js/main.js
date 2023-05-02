
/**
 * open and close detail-view
 */
const openDetailButtons = document.querySelectorAll('.icon-btn');
const detailView = document.querySelector('.detail-view');
const closeDetailButton = document.querySelector('.close-detail-btn');

openDetailButtons.forEach(button => {
  button.addEventListener('click', () => {
    detailView.classList.add('open');
  });
});

closeDetailButton.addEventListener('click', () => {
  detailView.classList.remove('open');
});

/**
 * resize detail view on drag
 */

const detailContent = document.querySelector('.detail-content');
const resizeHandle = document.querySelector('.resize-handle');

let isResizing = false;
let lastX = 0;
let detailWidth = 0;

resizeHandle.addEventListener('mousedown', e => {
  e.preventDefault();
  isResizing = true;
  lastX = e.clientX;
  detailWidth = parseInt(document.defaultView.getComputedStyle(detailView).width, 10);
  detailView.style.pointerEvents = 'none';
});

document.addEventListener('mousemove', e => {
  if (!isResizing) return;
  const delta = e.clientX - lastX;
  const newWidth = detailWidth - delta;
  detailView.style.width = newWidth + 'px';
});

document.addEventListener('mouseup', () => {
  isResizing = false;
  detailView.style.pointerEvents = 'auto';
});
