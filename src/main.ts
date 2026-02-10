/// <reference types="vite/client" />
import './styles.css';
const BASE_URL = import.meta.env.BASE_URL;

// ===== TIPOS =====
type Page = 'home' | 'galeria' | 'razones' | 'trivia';
type TriviaResult = boolean | null;

interface Particula {
  id: number;
  left: number;
  delay: number;
  duration: number;
}

interface PreguntaTrivia {
  pregunta: string;
  opciones: string[];
  respuesta: number;
}

// ===== CONFIGURACIÓN (PERSONALIZA AQUÍ) =====
const CONFIG = {
  nombreNovia: 'Bubu',
  fechaCumple: new Date('2026-02-10'),
  fotos: [
    `${BASE_URL}foto1.jpeg`,
    `${BASE_URL}foto2.jpeg`,
    `${BASE_URL}foto4.jpeg`,
    `${BASE_URL}foto5.jpeg`,
    `${BASE_URL}foto6.jpeg`,
    `${BASE_URL}foto7.jpeg`,
    `${BASE_URL}foto8.jpeg`,
    `${BASE_URL}foto9.jpeg`,
    `${BASE_URL}foto10.jpeg`
  ],
  razonesAmor: [
    'Tu felicidad ilumina mis días',
    'Me encantas vos y tu sentido del humor',
    'Tu compañía hace todo mejor',
    'Me inspirás a ser mejor persona',
  ],
  preguntasTrivia: [
    {
      pregunta: '¿Cuál es tu color favorito?',
      opciones: ['Azul', 'Negro', 'Lila'],
      respuesta: 0,
    },
    {
      pregunta: '¿Dónde conociste al Julibaby?',
      opciones: ['Trabajo', 'Amigos', 'Facultad'],
      respuesta: 2,
    },
    {
      pregunta: '¿Cuál es tu comida favorita?',
      opciones: ['Asado', 'Sushi', 'Fideos'],
      respuesta: 1,
    },
  ] as PreguntaTrivia[],
};

// ===== ESTADO =====
interface State {
  currentPage: Page;
  gameScore: number;
  revealed: Set<number>;
  musicPlaying: boolean;
  triviaActual: number;
  respuestaCorrecta: TriviaResult;
}

const state: State = {
  currentPage: 'home',
  gameScore: 0,
  revealed: new Set(),
  musicPlaying: false,
  triviaActual: 0,
  respuestaCorrecta: null,
};

// ===== FUNCIONES AUXILIARES =====
function getElements() {
  return {
    app: document.getElementById('app') as HTMLElement,
    navbar: document.getElementById('navbar') as HTMLElement,
    content: document.getElementById('content') as HTMLElement,
    particles: document.getElementById('particles') as HTMLElement,
  };
}

function createElement<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  className?: string,
  innerHTML?: string
): HTMLElementTagNameMap[K] {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (innerHTML) element.innerHTML = innerHTML;
  return element;
}

function crearConfetiParticulas(): void {
  const { particles } = getElements();
  particles.innerHTML = '';

  for (let i = 0; i < 30; i++) {
    const particula = createElement(
      'div',
      'fixed w-2 h-2 bg-rose-300 rounded-full pointer-events-none animate-fall'
    );
    const left = Math.random() * 100;
    const delay = Math.random() * 0.5;
    const duration = 2 + Math.random() * 1;

    particula.style.left = `${left}%`;
    particula.style.top = '-10px';
    particula.style.animationDelay = `${delay}s`;
    particula.style.animationDuration = `${duration}s`;
    particula.style.opacity = String(Math.random() * 0.5 + 0.3);

    particles.appendChild(particula);
  }
}

function renderNavbar(): void {
  const { navbar } = getElements();
  navbar.innerHTML = `
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-200">
      <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <svg class="w-6 h-6 text-blue-500 animate-heartbeat" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          <h1 class="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
  ¡Feliz Cumpleaños ${CONFIG.nombreNovia}!
</h1>
        </div>
        <button id="musicBtn" class="p-2 rounded-full transition-all bg-gray-100 text-gray-600 hover:bg-rose-100 hover:text-rose-600">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z"/>
          </svg>
        </button>
      </div>
    </nav>
  `;

  const musicBtn = navbar.querySelector('#musicBtn');
  musicBtn?.addEventListener('click', () => {
    state.musicPlaying = !state.musicPlaying;
    if (state.musicPlaying) {
      musicBtn.classList.add('bg-rose-100', 'text-rose-600');
    } else {
      musicBtn.classList.remove('bg-rose-100', 'text-rose-600');
    }
  });
}

function renderHome(): void {
  const { content } = getElements();
  content.innerHTML = `
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
  `;

  document.getElementById('btnGaleria')?.addEventListener('click', () => {
    state.currentPage = 'galeria';
    render();
  });

  document.getElementById('btnRazones')?.addEventListener('click', () => {
    state.currentPage = 'razones';
    render();
  });

  document.getElementById('btnTrivia')?.addEventListener('click', () => {
    state.currentPage = 'trivia';
    state.triviaActual = 0;
    state.gameScore = 0;
    state.respuestaCorrecta = null;
    render();
  });

  crearConfetiParticulas();
}

function renderGaleria(): void {
  const { content } = getElements();
  content.innerHTML = `
    <div class="max-w-6xl mx-auto">
      <button id="btnVolver" class="mb-6 px-6 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all text-gray-700 font-medium cursor-pointer">
        ← Volver
      </button>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        ${CONFIG.fotos
          .map(
            (foto, i) => `
          <div class="group relative overflow-hidden rounded-2xl aspect-square shadow-lg hover:shadow-2xl transition-all hover:scale-105">
            <img src="${foto}" alt="Foto ${i + 1}" class="w-full h-full object-cover group-hover:brightness-75 transition-all" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all flex items-end justify-center pb-4">
              <p class="text-white text-sm font-semibold">Recuerdo especial #${i + 1}</p>
            </div>
          </div>
        `
          )
          .join('')}
      </div>
    </div>
  `;

  document.getElementById('btnVolver')?.addEventListener('click', () => {
    state.currentPage = 'home';
    render();
  });
}

function renderRazones(): void {
  const { content } = getElements();
  content.innerHTML = `
    <div class="max-w-6xl mx-auto">
      <button id="btnVolver" class="mb-6 px-6 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all text-gray-700 font-medium cursor-pointer">
        ← Volver
      </button>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${CONFIG.razonesAmor
          .map(
            (razon, i) => `
          <div id="razon-${i}" class="cursor-pointer relative h-32 rounded-2xl overflow-hidden transition-all hover:shadow-lg bg-gradient-to-br from-gray-200 to-gray-300">
            <div class="absolute inset-0 flex items-center justify-center p-6 text-center">
              <div class="flex flex-col items-center gap-2">
                <svg class="w-8 h-8 text-blue-500 animate-heartbeat" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
                <p class="text-gray-600 font-medium">Click para descubrir</p>
              </div>
            </div>
          </div>
        `
          )
          .join('')}
      </div>
    </div>
  `;

  document.getElementById('btnVolver')?.addEventListener('click', () => {
    state.currentPage = 'home';
    render();
  });

  CONFIG.razonesAmor.forEach((_, i) => {
    document.getElementById(`razon-${i}`)?.addEventListener('click', () => {
      toggleReveal(i);
    });
  });
}

function toggleReveal(index: number): void {
  if (state.revealed.has(index)) {
    state.revealed.delete(index);
  } else {
    state.revealed.add(index);
  }

  const razonDiv = document.getElementById(`razon-${index}`);
  if (razonDiv) {
    if (state.revealed.has(index)) {
      razonDiv.className = `cursor-pointer relative h-32 rounded-2xl overflow-hidden transition-all hover:shadow-lg bg-gradient-to-br from-blue-400 to-purple-500`;
      razonDiv.innerHTML = `
        <div class="absolute inset-0 flex items-center justify-center p-6 text-center">
          <p class="text-white font-semibold text-lg">${CONFIG.razonesAmor[index]}</p>
        </div>
      `;
    } else {
      razonDiv.className = `cursor-pointer relative h-32 rounded-2xl overflow-hidden transition-all hover:shadow-lg bg-gradient-to-br from-gray-200 to-gray-300`;
      razonDiv.innerHTML = `
        <div class="absolute inset-0 flex items-center justify-center p-6 text-center">
          <div class="flex flex-col items-center gap-2">
            <svg class="w-8 h-8 text-blue-500 animate-heartbeat" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <p class="text-gray-600 font-medium">Click para descubrir</p>
          </div>
        </div>
      `;
    }
  }
}

function renderTrivia(): void {
  const { content } = getElements();
  const pregunta = CONFIG.preguntasTrivia[state.triviaActual];
  const progreso =
    ((state.triviaActual + 1) / CONFIG.preguntasTrivia.length) * 100;

  if (state.triviaActual < CONFIG.preguntasTrivia.length) {
    content.innerHTML = `
      <div class="max-w-2xl mx-auto">
        <button id="btnVolver" class="mb-6 px-6 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all text-gray-700 font-medium cursor-pointer">
          ← Volver
        </button>

        <div class="bg-white rounded-2xl shadow-lg p-8">
          <div class="mb-6">
            <p class="text-sm text-gray-500 font-semibold">
              Pregunta ${state.triviaActual + 1} de ${CONFIG.preguntasTrivia.length}
            </p>
            <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                class="bg-gradient-to-r from-blue-400 to-cyan-500 h-2 rounded-full transition-all"
                style="width: ${progreso}%"
              />
            </div>
          </div>

          <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">
            ${pregunta.pregunta}
          </h3>

          <div class="space-y-3" id="opciones">
            ${pregunta.opciones
              .map(
                (opcion, i) => `
              <button
                id="opcion-${i}"
                class="w-full p-4 rounded-xl font-semibold transition-all text-lg bg-gray-100 hover:bg-blue-100 text-gray-900 cursor-pointer"
              >
                ${opcion}
              </button>
            `
              )
              .join('')}
          </div>

          <div id="resultado"></div>
        </div>
      </div>
    `;

    document.getElementById('btnVolver')?.addEventListener('click', () => {
      state.currentPage = 'home';
      render();
    });

    pregunta.opciones.forEach((_, i) => {
      document.getElementById(`opcion-${i}`)?.addEventListener('click', () => {
        responderTrivia(i);
      });
    });
  } else {
    content.innerHTML = `
      <div class="max-w-2xl mx-auto">
        <button id="btnVolver" class="mb-6 px-6 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all text-gray-700 font-medium cursor-pointer">
          ← Volver
        </button>

        <div class="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl shadow-lg p-8 text-white text-center space-y-4">
          <h3 class="text-3xl font-bold">¡Felicidades!</h3>
          <p class="text-xl">Obtuviste ${state.gameScore} de ${CONFIG.preguntasTrivia.length} puntos</p>
          ${
            state.gameScore === CONFIG.preguntasTrivia.length
              ? '<p class="text-lg">¡Me conoces perfectamente! 💕</p>'
              : ''
          }
          <button id="btnJugarDeNuevo" class="mt-4 px-6 py-3 bg-white text-purple-600 font-bold rounded-full hover:bg-gray-100 transition-all cursor-pointer">
            Jugar de nuevo
          </button>
        </div>
      </div>
    `;

    document.getElementById('btnVolver')?.addEventListener('click', () => {
      state.currentPage = 'home';
      render();
    });

    document.getElementById('btnJugarDeNuevo')?.addEventListener('click', () => {
      state.triviaActual = 0;
      state.gameScore = 0;
      state.respuestaCorrecta = null;
      render();
    });
  }
}

function responderTrivia(opcionIndex: number): void {
  const pregunta = CONFIG.preguntasTrivia[state.triviaActual];

  if (opcionIndex === pregunta.respuesta) {
    state.respuestaCorrecta = true;
    state.gameScore += 1;

    // Desabilitar botones
    document.querySelectorAll('#opciones button').forEach((btn) => {
      (btn as HTMLButtonElement).disabled = true;
    });

    // Mostrar resultado correcto
    const resultadoDiv = document.getElementById('resultado');
    if (resultadoDiv) {
      resultadoDiv.innerHTML = `
        <div class="mt-6 p-4 rounded-xl text-center font-bold text-lg bg-green-100 text-green-700">
          ¡Correcto! 🎉
        </div>
      `;
    }

    // Pasar a siguiente pregunta
    setTimeout(() => {
      if (state.triviaActual < CONFIG.preguntasTrivia.length - 1) {
        state.triviaActual += 1;
        state.respuestaCorrecta = null;
        renderTrivia();
      } else {
        state.respuestaCorrecta = null;
        renderTrivia();
      }
    }, 1500);
  } else {
    // Opción incorrecta - mostrar error pero permitir reintentar
    const botonIncorrecto = document.getElementById(`opcion-${opcionIndex}`) as HTMLButtonElement;
    if (botonIncorrecto) {
      botonIncorrecto.classList.add('bg-red-400', 'text-white', 'opacity-50');
      botonIncorrecto.disabled = true;
    }

    // Mostrar resultado incorrecto
    const resultadoDiv = document.getElementById('resultado');
    if (resultadoDiv) {
      resultadoDiv.innerHTML = `
        <div class="mt-6 p-4 rounded-xl text-center font-bold text-lg bg-red-100 text-red-700">
          ❌ Intenta de nuevo
        </div>
      `;
    }

    // Después de 1.5 segundos, limpiar el mensaje de error
    setTimeout(() => {
      if (resultadoDiv) {
        resultadoDiv.innerHTML = '';
      }
    }, 1500);
  }
}

function render(): void {
  renderNavbar();

  switch (state.currentPage) {
    case 'home':
      renderHome();
      break;
    case 'galeria':
      renderGaleria();
      break;
    case 'razones':
      renderRazones();
      break;
    case 'trivia':
      renderTrivia();
      break;
  }
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
  render();
});
