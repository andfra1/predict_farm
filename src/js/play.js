var item = document.getElementsByClassName('item'),
  items = item.length,
  sound = document.getElementsByClassName('sound'),
  keys = ["w", "e", "r", "s", "d", "f", "x", "c", "v"],
  getIndex,
  audio = 0,
  audioDuration,
  text = document.getElementsByClassName('keys')[0].textContent = keys,
  checkCurrentTime = setInterval(function () {
    return false;
  });

window.addEventListener('keydown', onKeyPush, false);

for (var index = 0; index < items; index++) {
  item[index].addEventListener('click', onMouseClick, false);
}

/* plays selected audio */
function audioRun() {
  _this.classList.add('item--active');
  audio = document.getElementById(getId + 'Sound');
  audioDuration = audio.duration;
  audio.load();
  audio.play();
}

/* resets iterval and remove class 'item--active'*/
function reset() {
  clearInterval(checkCurrentTime);
  for (var index = 0; index < items; index++) {
    item[index].classList.remove('item--active');
  }
};

/*
chceck audio duration and do things when finish playing;
audioDuration - 0.7 helps JS chcecking audio.currentTime
audio.duration shows real duration, audio.currentTime is NOT! (it's always lower than audio.duration)
*/
function audioTimeCheck() {
  if (audio.currentTime >= (audioDuration - 0.7)) {
    reset();
  }
}

function onKeyPush(e) {
  reset();
  if (keys.indexOf(e.key) !== -1) {
    /* _this assign pressed key form 'keys' array and returns it's index in to 'item' array */
    _this = item[keys.indexOf(e.key)];
    /* ...and gets THIS 'item' ID */
    getId = _this.getAttribute('id');
    if (getId != 'farmer') {
      audioRun();
      /* 'checkCurrentTime' chcecking audio.currentTime every 100ms */
      checkCurrentTime = setInterval(audioTimeCheck, 100);
    } else {
      farmer();
    }
  } else {
    /* if pressed key is different than from 'keys' array then do nothing (no error in console) */
    return false;
  }
}

function onMouseClick() {
  reset();
  _this = this;
  getId = _this.getAttribute('id');
  if (getId !== 'farmer') {
    audioRun();
    checkCurrentTime = setInterval(audioTimeCheck, 100);
  } else {
    farmer();
  }
}

/* create 'getIndex' array with random numbers */
function randomize() {
  /* every time strarts as empty array */
  getIndex = [];
  /* 'getIndex' must be smaller than 'items' by 1 (8 elements, without farmer) */
  while (getIndex.length < (items - 1)) {
    /* every time make a random number */
    var random = Math.floor(Math.random() * (items - 1));
    /* .includes chcecks numbers in 'getIndex' array, if it's not, then pushes random number into array */
    if (!getIndex.includes(random)) {
      getIndex.push(random);
    }
  }
  return getIndex;
}

function farmer() {
  console.log('Hey farmer, make some noise!');
  reset();
  var count = 0;
  randomize();
  checkCurrentTime = setInterval(function () {
    _this = item[getIndex[count]];
    getId = _this.getAttribute('id');
    audioRun();
    count++;
    if (count === items - 1) {
      clearInterval(checkCurrentTime);
    }
 }, 1000);
}