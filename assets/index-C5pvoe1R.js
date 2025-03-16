(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();var t=0;const u=new Audio("./alarm.mp3");var f=!1,p=!1;const a=60,y=5*60;function v(i,n,r,s,e,o,c){document.getElementById(r).addEventListener("click",()=>{console.log("Removed 5 minutes"),t>=y?t-=5*60:(t<y||t<a)&&(t=0),l(t,i,n)}),document.getElementById(e).addEventListener("click",()=>{t+=5*60,l(t,i,n),console.log(t)}),document.getElementById(s).addEventListener("click",()=>{console.log("Removed 1 minute"),t>=a?t-=a:t<a&&(t=0),l(t,i,n)}),document.getElementById(o).addEventListener("click",()=>{console.log("Added 1 minute"),t+=a,l(t,i,n)}),document.getElementById(c).addEventListener("click",()=>{f?(g(i,n,"pause"),f=!1,document.getElementById(c).innerHTML="Start"):!f&&!p&&t>0&&(g(i,n,"start"),f=!0,document.getElementById(c).innerHTML="Pause")}),window.addEventListener("keydown",d=>{d.preventDefault(),d.code==="Space"&&document.getElementById(c).click()}),window.addEventListener("keydown",d=>{d.code==="ArrowDown"&&document.getElementById(r).click()}),window.addEventListener("keydown",d=>{d.code==="ArrowUp"&&document.getElementById(e).click()}),window.addEventListener("keydown",d=>{d.code==="ArrowLeft"&&document.getElementById(s).click()}),window.addEventListener("keydown",d=>{d.code==="ArrowRight"&&document.getElementById(o).click()})}function l(i,n,r){var s=Math.floor(i/60).toFixed(),e=i%60;e<=9?document.getElementById(r).innerHTML="0"+e:document.getElementById(r).innerHTML=e,t<=a*9?document.getElementById(n).innerHTML="0"+s:document.getElementById(n).innerHTML=s}var m=null;function g(i,n,r){r=="start"?m=setInterval(()=>{t>0&&(t-=1),t<=0&&p==!1&&(u.play(),console.log("alarm playing"),clearInterval(m),p=!0),l(t,i,n)},1e3):r=="pause"&&(clearInterval(m),u&&(u.pause(),u.load(),p=!1))}document.querySelector("#app").innerHTML=`
  <div>
  <span><button id="minus5Btn">-5</button></span> 
  <span><button id="minus1Btn">-1</button></span> 

  <span id="timer">
  <span id="minSpan">00</span>

  <span>:</span>
  
  <span id="secSpan">00</span>
  </span>  

  <span><button id="plus1Btn">+1</button></span> 
  <span><button id="plus5Btn">+5</button></span> 
  </div>
  <div>
    <button id="startPauseBtn">Start</button>
  </div>

<div class="controls">
    <p>Spacebar = Start/Pause</p>
    <p>↓ = -5 minutes | ↑ = +5 minutes</p>
    <p>← = -1 minute | → = +1 minute</p>
</div>


`;v("minSpan","secSpan","minus5Btn","minus1Btn","plus5Btn","plus1Btn","startPauseBtn");
