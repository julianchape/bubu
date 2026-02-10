(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function a(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(n){if(n.ep)return;n.ep=!0;const l=a(n);fetch(n.href,l)}})();const s={nombreNovia:"Bubu",fotos:["/bubu/foto1.jpeg","/bubu/foto2.jpeg","/bubu/foto4.jpeg","/bubu/foto5.jpeg","/bubu/foto6.jpeg","/bubu/foto7.jpeg","/bubu/foto8.jpeg","/bubu/foto9.jpeg","/bubu/foto10.jpeg"],razonesAmor:["Tu felicidad ilumina mis días","Me encantas vos y tu sentido del humor","Tu compañía hace todo mejor","Me inspirás a ser mejor persona"],preguntasTrivia:[{pregunta:"¿Cuál es tu color favorito?",opciones:["Azul","Negro","Lila"],respuesta:0},{pregunta:"¿Dónde conociste al Julibaby?",opciones:["Trabajo","Amigos","Facultad"],respuesta:2},{pregunta:"¿Cuál es tu comida favorita?",opciones:["Asado","Sushi","Fideos"],respuesta:1}]},t={currentPage:"home",gameScore:0,revealed:new Set,musicPlaying:!1,triviaActual:0,respuestaCorrecta:null};function c(){return{app:document.getElementById("app"),navbar:document.getElementById("navbar"),content:document.getElementById("content"),particles:document.getElementById("particles")}}function m(r,e,a){const o=document.createElement(r);return o.className=e,o}function p(){const{particles:r}=c();r.innerHTML="";for(let e=0;e<30;e++){const a=m("div","fixed w-2 h-2 bg-rose-300 rounded-full pointer-events-none animate-fall"),o=Math.random()*100,n=Math.random()*.5,l=2+Math.random()*1;a.style.left=`${o}%`,a.style.top="-10px",a.style.animationDelay=`${n}s`,a.style.animationDuration=`${l}s`,a.style.opacity=String(Math.random()*.5+.3),r.appendChild(a)}}function b(){const{navbar:r}=c();r.innerHTML=`
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-200">
      <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <svg class="w-6 h-6 text-blue-500 animate-heartbeat" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          <h1 class="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
  ¡Feliz Cumpleaños ${s.nombreNovia}!
</h1>
        </div>
        <button id="musicBtn" class="p-2 rounded-full transition-all bg-gray-100 text-gray-600 hover:bg-rose-100 hover:text-rose-600">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z"/>
          </svg>
        </button>
      </div>
    </nav>
  `;const e=r.querySelector("#musicBtn");e==null||e.addEventListener("click",()=>{t.musicPlaying=!t.musicPlaying,t.musicPlaying?e.classList.add("bg-rose-100","text-rose-600"):e.classList.remove("bg-rose-100","text-rose-600")})}function f(){var e,a,o;const{content:r}=c();r.innerHTML=`
    <div class="max-w-6xl mx-auto space-y-8 py-12">
      <div class="text-center space-y-6">
        <div class="flex justify-center">
          <svg class="w-16 h-16 text-purple-400 animate-glow" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        <h2 class="text-5xl md:text-6xl font-bold text-gray-900">
          SORPRESA! 🎉
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          te hice una web tiquita como vos por tu cumple jiji
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
          <button id="btnGaleria" class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-white hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
            <div class="relative z-10">
              <svg class="w-8 h-8 mx-auto mb-2 group-hover:animate-heartbeat" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              <h3 class="text-xl font-bold">Galería</h3>
              <p class="text-sm opacity-90 mt-2">Nuestros mejores momentos</p>
            </div>
          </button>

          <button id="btnRazones" class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 p-8 text-white hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
            <div class="relative z-10">
              <svg class="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <h3 class="text-xl font-bold">Razones</h3>
              <p class="text-sm opacity-90 mt-2">Por qué te amo</p>
            </div>
          </button>

          <button id="btnTrivia" class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 p-8 text-white hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
            <div class="relative z-10">
              <svg class="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
              <h3 class="text-xl font-bold">Trivia</h3>
              <p class="text-sm opacity-90 mt-2">¿Cuánto te conocemos?</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  `,(e=document.getElementById("btnGaleria"))==null||e.addEventListener("click",()=>{t.currentPage="galeria",i()}),(a=document.getElementById("btnRazones"))==null||a.addEventListener("click",()=>{t.currentPage="razones",i()}),(o=document.getElementById("btnTrivia"))==null||o.addEventListener("click",()=>{t.currentPage="trivia",t.triviaActual=0,t.gameScore=0,t.respuestaCorrecta=null,i()}),p()}function h(){var e;const{content:r}=c();r.innerHTML=`
    <div class="max-w-6xl mx-auto">
      <button id="btnVolver" class="mb-6 px-6 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all text-gray-700 font-medium cursor-pointer">
        ← Volver
      </button>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        ${s.fotos.map((a,o)=>`
          <div class="group relative overflow-hidden rounded-2xl aspect-square shadow-lg hover:shadow-2xl transition-all hover:scale-105">
            <img src="${a}" alt="Foto ${o+1}" class="w-full h-full object-cover group-hover:brightness-75 transition-all" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all flex items-end justify-center pb-4">
              <p class="text-white text-sm font-semibold">Recuerdo especial #${o+1}</p>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `,(e=document.getElementById("btnVolver"))==null||e.addEventListener("click",()=>{t.currentPage="home",i()})}function x(){var e;const{content:r}=c();r.innerHTML=`
    <div class="max-w-6xl mx-auto">
      <button id="btnVolver" class="mb-6 px-6 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all text-gray-700 font-medium cursor-pointer">
        ← Volver
      </button>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${s.razonesAmor.map((a,o)=>`
          <div id="razon-${o}" class="cursor-pointer relative h-32 rounded-2xl overflow-hidden transition-all hover:shadow-lg bg-gradient-to-br from-gray-200 to-gray-300">
            <div class="absolute inset-0 flex items-center justify-center p-6 text-center">
              <div class="flex flex-col items-center gap-2">
                <svg class="w-8 h-8 text-blue-500 animate-heartbeat" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
                <p class="text-gray-600 font-medium">Click para descubrir</p>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `,(e=document.getElementById("btnVolver"))==null||e.addEventListener("click",()=>{t.currentPage="home",i()}),s.razonesAmor.forEach((a,o)=>{var n;(n=document.getElementById(`razon-${o}`))==null||n.addEventListener("click",()=>{y(o)})})}function y(r){t.revealed.has(r)?t.revealed.delete(r):t.revealed.add(r);const e=document.getElementById(`razon-${r}`);e&&(t.revealed.has(r)?(e.className="cursor-pointer relative h-32 rounded-2xl overflow-hidden transition-all hover:shadow-lg bg-gradient-to-br from-blue-400 to-purple-500",e.innerHTML=`
        <div class="absolute inset-0 flex items-center justify-center p-6 text-center">
          <p class="text-white font-semibold text-lg">${s.razonesAmor[r]}</p>
        </div>
      `):(e.className="cursor-pointer relative h-32 rounded-2xl overflow-hidden transition-all hover:shadow-lg bg-gradient-to-br from-gray-200 to-gray-300",e.innerHTML=`
        <div class="absolute inset-0 flex items-center justify-center p-6 text-center">
          <div class="flex flex-col items-center gap-2">
            <svg class="w-8 h-8 text-blue-500 animate-heartbeat" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <p class="text-gray-600 font-medium">Click para descubrir</p>
          </div>
        </div>
      `))}function v(){var o,n,l;const{content:r}=c(),e=s.preguntasTrivia[t.triviaActual],a=(t.triviaActual+1)/s.preguntasTrivia.length*100;t.triviaActual<s.preguntasTrivia.length?(r.innerHTML=`
      <div class="max-w-2xl mx-auto">
        <button id="btnVolver" class="mb-6 px-6 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all text-gray-700 font-medium cursor-pointer">
          ← Volver
        </button>

        <div class="bg-white rounded-2xl shadow-lg p-8">
          <div class="mb-6">
            <p class="text-sm text-gray-500 font-semibold">
              Pregunta ${t.triviaActual+1} de ${s.preguntasTrivia.length}
            </p>
            <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                class="bg-gradient-to-r from-blue-400 to-cyan-500 h-2 rounded-full transition-all"
                style="width: ${a}%"
              />
            </div>
          </div>

          <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">
            ${e.pregunta}
          </h3>

          <div class="space-y-3" id="opciones">
            ${e.opciones.map((d,u)=>`
              <button
                id="opcion-${u}"
                class="w-full p-4 rounded-xl font-semibold transition-all text-lg bg-gray-100 hover:bg-blue-100 text-gray-900 cursor-pointer"
              >
                ${d}
              </button>
            `).join("")}
          </div>

          <div id="resultado"></div>
        </div>
      </div>
    `,(o=document.getElementById("btnVolver"))==null||o.addEventListener("click",()=>{t.currentPage="home",i()}),e.opciones.forEach((d,u)=>{var g;(g=document.getElementById(`opcion-${u}`))==null||g.addEventListener("click",()=>{w(u)})})):(r.innerHTML=`
      <div class="max-w-2xl mx-auto">
        <button id="btnVolver" class="mb-6 px-6 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all text-gray-700 font-medium cursor-pointer">
          ← Volver
        </button>

        <div class="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl shadow-lg p-8 text-white text-center space-y-4">
          <h3 class="text-3xl font-bold">¡Felicidades!</h3>
          <p class="text-xl">Obtuviste ${t.gameScore} de ${s.preguntasTrivia.length} puntos</p>
          ${t.gameScore===s.preguntasTrivia.length?'<p class="text-lg">¡Me conoces perfectamente! 💕</p>':""}
          <button id="btnJugarDeNuevo" class="mt-4 px-6 py-3 bg-white text-purple-600 font-bold rounded-full hover:bg-gray-100 transition-all cursor-pointer">
            Jugar de nuevo
          </button>
        </div>
      </div>
    `,(n=document.getElementById("btnVolver"))==null||n.addEventListener("click",()=>{t.currentPage="home",i()}),(l=document.getElementById("btnJugarDeNuevo"))==null||l.addEventListener("click",()=>{t.triviaActual=0,t.gameScore=0,t.respuestaCorrecta=null,i()}))}function w(r){const e=s.preguntasTrivia[t.triviaActual];if(r===e.respuesta){t.respuestaCorrecta=!0,t.gameScore+=1,document.querySelectorAll("#opciones button").forEach(o=>{o.disabled=!0});const a=document.getElementById("resultado");a&&(a.innerHTML=`
        <div class="mt-6 p-4 rounded-xl text-center font-bold text-lg bg-green-100 text-green-700">
          ¡Correcto! 🎉
        </div>
      `),setTimeout(()=>{t.triviaActual<s.preguntasTrivia.length-1?(t.triviaActual+=1,t.respuestaCorrecta=null,v()):(t.respuestaCorrecta=null,v())},1500)}else{const a=document.getElementById(`opcion-${r}`);a&&(a.classList.add("bg-red-400","text-white","opacity-50"),a.disabled=!0);const o=document.getElementById("resultado");o&&(o.innerHTML=`
        <div class="mt-6 p-4 rounded-xl text-center font-bold text-lg bg-red-100 text-red-700">
          ❌ Intenta de nuevo
        </div>
      `),setTimeout(()=>{o&&(o.innerHTML="")},1500)}}function i(){switch(b(),t.currentPage){case"home":f();break;case"galeria":h();break;case"razones":x();break;case"trivia":v();break}}document.addEventListener("DOMContentLoaded",()=>{i()});
//# sourceMappingURL=index-BwUt6mId.js.map
