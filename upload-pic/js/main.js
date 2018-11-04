$(document).ready(function() {

  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      
      reader.onload = function(e) {
        $('.view-img img').attr('src', e.target.result);
      }

      reader.readAsDataURL(input.files[0]);
    }
  }
  $("#upload").change(function() {
    readURL(this);
  });

  $('.uploadbtn').on('click', function() {
    $('#upload').trigger('click');
    
  });
});



;(function() {
  function DropMenu() {}

  DropMenu.prototype = {
    init: function() {
      document.querySelector('.drop-menu ul').style.display = 'none';
      document.querySelector('.drop-menu > a').addEventListener('click', this.toggle, false);
    },
    toggle: function() {
      this.parentNode.classList.toggle('active');
    }
  };

  var dropMenu = new DropMenu();
  dropMenu.init();
})();















