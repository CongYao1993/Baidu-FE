var btns = document.getElementsByClassName('btn')

for (var i = 0; i < btns.length; i++) {
  var btn = btns[i]
  changeStyle(btn, i + 1)
}

function changeStyle(btn, i) {
  var clickHandler = function () {
    document.getElementById('style').href = "style_" + i + ".css"
  }
  btn.addEventListener('click', clickHandler, false)
}