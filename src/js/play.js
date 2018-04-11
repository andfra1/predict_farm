var item = document.getElementsByClassName('item');
var items = item.length;
var sound = document.getElementsByClassName('sound');
var keys = ["w", "e", "r", "s", "d", "f", "x", "c", "v"];
var getIndex;
var text = document.getElementsByClassName('keys')[0];
text.innerHTML = keys;

window.addEventListener('keydown', onKeyPush, false);

for (var index = 0; index < items; index++) {
  item[index].addEventListener('click', onMouseClick, false);
}

function onKeyPush(e) {
  if (keys.indexOf(e.key) !== -1) {
    var _this = item[keys.indexOf(e.key)];
    var getId = _this.getAttribute('id');
    if (getId != 'farmer') {
      _this.classList.add('item--active');
      var audio = document.getElementById(getId + 'Sound');
      var audioDuration = audio.duration;
      audio.load();
      audio.play();
      var si = setInterval(function () {
        if (audio.currentTime >= (audioDuration - 0.7)) {
          clearInterval(si);
          _this.classList.remove('item--active');
        }
      }, 100);
    } else {
      farmer();
    }
  } else {
    return false;
  }
  e.preventDefault();
}

function onMouseClick() {
  var _this = this;
  var getId = _this.getAttribute('id');
  if (getId !== 'farmer') {
    var audio = document.getElementById(getId + 'Sound');
    var audioDuration = audio.duration;
    _this.classList.add('item--active');
    audio.load();
    audio.play();
    var si = setInterval(function () {
      if (audio.currentTime >= (audioDuration - 0.7)) {
        clearInterval(si);
        _this.classList.remove('item--active');
      }
    }, 100);
  } else {
    farmer();
  }
}

function randomize() {
  getIndex = [];
  while (getIndex.length < (items - 1)) {
    var random = Math.floor(Math.random() * (items - 1));
    if (!getIndex.includes(random)) {
      getIndex.push(random);
    }
  }
  return getIndex;
}

function farmer() {
  for (var index = 0; index < items; index++) {
    item[index].classList.remove('item--active')
  }
  var count = 0;
  randomize();
  var si = setInterval(function () {
    var _this = item[getIndex[count]];
    var getId = _this.getAttribute('id');
    var audio = document.getElementById(getId + 'Sound');
    var audioDuration = audio.duration;
    _this.classList.add('item--active');
    audio.load();
    audio.play();
    count++;
    if (count === items - 1) {
      clearInterval(si);
    }
  }, 1000);
}