(()=>{"use strict";const n=document.querySelector("[data-world");let e;function i(){let e;e=window.innerWidth/window.innerHeight<100/30?window.innerWidth/100:window.innerHeight/30,n.style.width=100*e+"px",n.style.height=30*e+"px"}i(),window.addEventListener("resize",i),window.requestAnimationFrame((function n(i){if(null==e)return e=i,void window.requestAnimationFrame(n);e=i}))})();