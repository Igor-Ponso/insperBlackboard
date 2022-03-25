function sendTo(id) {
  var elem = document.getElementById(id);
  elem.scrollIntoView();
}

window.addEventListener(
  "resize",
  function () {
    var nav = document.getElementById("globalNavPageNavArea").getHeight();
    var innerHeight = window.innerHeight;
    var value = innerHeight - nav;
    var elem = document.getElementById("newTheme");
    elem.style.height = value;
  },
  true
);
