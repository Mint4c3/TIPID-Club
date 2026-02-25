/*
 * T.I.P.I.D. Club - Custom JavaScript
 * Depends on: bootstrap.min.js, wow.min.js, tiny-slider.js,
 *             glightbox.min.js, count-up.min.js, main.js
 * Load this AFTER all other JS files.
 */

(function () {

  /* ── Preloader ── */
  window.addEventListener('load', function () {
    setTimeout(function () {
      var pre = document.querySelector('.preloader');
      if (pre) { pre.style.opacity = '0'; pre.style.display = 'none'; }
    }, 500);
  });

  /* ── Photo Upload Preview ── */
  window.previewPhoto = function (input, imgId, placeholderId) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        var img = document.getElementById(imgId);
        if (img) {
          img.src = e.target.result;
          img.style.display = 'block';
        }
        var placeholder = document.getElementById(placeholderId);
        if (placeholder) placeholder.style.display = 'none';
      };
      reader.readAsDataURL(input.files[0]);
    }
  };

})();
