const changeThemeBtn = document.querySelector('.handle-btn');
const themeWrap = document.getElementById('app');

changeThemeBtn.addEventListener('click', function () {
  // if class is set remove it, otherwise add it
  changeThemeBtn.classList.toggle('active');
  themeWrap.classList.toggle('night');
});
