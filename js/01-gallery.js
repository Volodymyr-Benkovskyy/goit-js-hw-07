import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (item) => `<li class="gallery__item">
  <a class="gallery__link" href='${item.original}'>
    <img
      class="gallery__image"
      src='${item.preview}'
      data-source='${item.original}'
      alt='${item.description}'
    />
  </a>
</li>`
  )
  .join("");

galleryList.insertAdjacentHTML("afterbegin", markup);

const onClick = (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return;

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="1280" height="900">`,
    {
      onShow: () => {
        document.addEventListener("keydown", closeEscape);
      },

      onClose: () => {
        document.removeEventListener("keydown", closeEscape);
      },
    }
  );

  const closeEscape = (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  };
  instance.show();
};

galleryList.addEventListener("click", onClick);
console.log(galleryItems);
