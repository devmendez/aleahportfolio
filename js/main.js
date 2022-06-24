//Bootstrap modal copied message
function myCopyFunction() {
  var copyText = document.getElementById('myInput');
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy")
  $(".message").text("link copied");
  }