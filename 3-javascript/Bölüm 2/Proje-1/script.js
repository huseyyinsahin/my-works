"use";
var _buttonlar = document.getElementsByTagName("button"),
  _uzunluk = _buttonlar.length,
  i = 0,
  _sonuç = document.getElementById("sonuç");

for (i = 0; i < _uzunluk; i++) {
  _buttonlar[i].onclick = hesapla;
}

function hesapla() {
  var _değer = this.innerHTML;
  if (_değer == "=") {
    try {
      _sonuç.value = eval(_sonuç.value);
    } catch (e) {
      _sonuç.value = "0";
    }
    return;
  }

  _sonuç.value += _değer;
}
