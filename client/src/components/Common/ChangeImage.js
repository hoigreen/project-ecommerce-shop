const changeImage = () => {
  const preview = document.querySelector('.account__box-info-avatar');
  const imageAdmin = document.querySelector('#avatar-change').files[0];
  const reader = new FileReader();
  reader.addEventListener(
    'load',
    () => {
      preview.src = reader.result;
    },
    false,
  );

  if (imageAdmin) {
    reader.readAsDataURL(imageAdmin);
  }
};

export { changeImage };
