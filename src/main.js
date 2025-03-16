import './style.css'
import { timer } from './timer.js';

document.querySelector('#app').innerHTML = `
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


`

timer("minSpan","secSpan","minus5Btn","minus1Btn","plus5Btn","plus1Btn", "startPauseBtn");