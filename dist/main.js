var getIndex,audioDuration,item=document.getElementsByClassName("item"),items=item.length,sound=document.getElementsByClassName("sound"),keys=["w","e","r","s","d","f","x","c","v"],audio=0,text=document.getElementsByClassName("keys")[0].textContent=keys,checkCurrentTime=setInterval(function(){return!1});window.addEventListener("keydown",onKeyPush,!1);for(var index=0;index<items;index++)item[index].addEventListener("click",onMouseClick,!1);function audioRun(){_this.classList.add("item--active"),audio=document.getElementById(getId+"Sound"),audioDuration=audio.duration,audio.load(),audio.play()}function reset(){clearInterval(checkCurrentTime);for(var e=0;e<items;e++)item[e].classList.remove("item--active")}function audioTimeCheck(){audio.currentTime>=audioDuration-.7&&reset()}function farmerChecksTime(){audio.currentTime>=audioDuration-.7&&(reset(),count++,playOneByOne())}function onKeyPush(e){if(reset(),-1===keys.indexOf(e.key))return!1;_this=item[keys.indexOf(e.key)],getId=_this.getAttribute("id"),"farmer"!=getId?(audioRun(),checkCurrentTime=setInterval(audioTimeCheck,100)):farmer()}function onMouseClick(){reset(),_this=this,getId=_this.getAttribute("id"),"farmer"!==getId?(audioRun(),checkCurrentTime=setInterval(audioTimeCheck,100)):farmer()}function randomize(){for(getIndex=[];getIndex.length<items-1;){var e=Math.floor(Math.random()*(items-1));getIndex.includes(e)||getIndex.push(e)}return getIndex}var count=0;function playOneByOne(){if(!(count<items-1))return!1;_this=item[getIndex[count]],getId=_this.getAttribute("id"),audioRun(),checkCurrentTime=setInterval(farmerChecksTime,100)}function farmer(){reset(),count=0,randomize(),playOneByOne()}