"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderNotFound = renderNotFound;
function renderNotFound() {
    const div = document.createElement('div');
    div.innerHTML = `
    <section class="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
        <div class="text-center animate-fadeIn">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/022/310/933/small_2x/404-error-page-not-found-3d-illustration-png.png" alt="404 Illustration" class="mx-auto w-80 animate-[float_3s_infinite] shadow-xl rounded-lg">
            <h1 class="text-7xl font-extrabold text-blue-700 mt-6">Looks Like You're Lost!</h1>
            <p class="text-xl text-gray-700 mt-2">We can't seem to find the page you're looking for.</p>
            <a href="/" class="mt-6 inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transform transition hover:scale-105 hover:bg-blue-700">Return Home</a>
        </div>
    </section>
  `;
    return div;
}
