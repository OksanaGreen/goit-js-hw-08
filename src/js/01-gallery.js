import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';

// Change code below this line
let original;
let preview;
let description;
const gallery = document.querySelector('.gallery');
const galleryMarcup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item np ">
    <a class="gallery__link" href='${original}' width="800" height="600">
      <img
        class="gallery__image"
        src='${preview}'
        alt='${description}'
      />
    </a>
  </li>`
  )
  .join('');
gallery.insertAdjacentHTML('beforeend', galleryMarcup);

var lightbox = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionDelay: '250',
});

console.log(galleryItems);
