var getIndex,item=document.getElementsByClassName("item"),items=item.length,sound=document.getElementsByClassName("sound"),keys=["w","e","r","s","d","f","x","c","v"],text=document.getElementsByClassName("keys")[0];text.innerHTML=keys,window.addEventListener("keydown",onKeyPush,!1);for(var index=0;index<items;index++)item[index].addEventListener("click",onMouseClick,!1);function onKeyPush(e){if(-1===keys.indexOf(e.key))return!1;var t=item[keys.indexOf(e.key)],n=t.getAttribute("id");if("farmer"!=n){t.classList.add("item--active");var i=document.getElementById(n+"Sound"),a=i.duration;i.load(),i.play();var r=setInterval(function(){i.currentTime>=a-.7&&(clearInterval(r),t.classList.remove("item--active"))},100)}else farmer();e.preventDefault()}function onMouseClick(){var e=this,t=e.getAttribute("id");if("farmer"!==t){var n=document.getElementById(t+"Sound"),i=n.duration;e.classList.add("item--active"),n.load(),n.play();var a=setInterval(function(){n.currentTime>=i-.7&&(clearInterval(a),e.classList.remove("item--active"))},100)}else farmer()}function randomize(){for(getIndex=[];getIndex.length<items-1;){var e=Math.floor(Math.random()*(items-1));getIndex.includes(e)||getIndex.push(e)}return getIndex}function farmer(){for(var e=0;e<items;e++)item[e].classList.remove("item--active");var i=0;randomize();var a=setInterval(function(){var e=item[getIndex[i]],t=e.getAttribute("id"),n=document.getElementById(t+"Sound");n.duration;e.classList.add("item--active"),n.load(),n.play(),++i===items-1&&clearInterval(a)},1e3)}