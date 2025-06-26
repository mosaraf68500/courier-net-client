import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="bg-black text-white px-6 py-10 rounded-2xl text-center">
  <div class="mb-4">
    <h1 class="text-2xl font-bold text-green-400">Profast</h1>
    <p class="text-sm mt-2 text-gray-300">
      Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to<br />
      business shipments — we deliver on time, every time.
    </p>
  </div>

  <div class="border-t border-dotted border-gray-700 my-6"></div>

  <div class="flex justify-center gap-6 text-sm text-gray-300 mb-6">
    <a href="#">Services</a>
    <a href="#">Coverage</a>
    <a href="#">About Us</a>
    <a href="#">Pricing</a>
    <a href="#">Blog</a>
    <a href="#">Contact</a>
  </div>

  <div class="flex justify-center gap-4">
    {/* <!-- LinkedIn --> */}
    <a href="#" aria-label="LinkedIn">
      <svg class="w-5 h-5 fill-white hover:fill-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0H13v2.7h.1c.7-1.2 2.5-2.7 5.1-2.7 5.4 0 6.4 3.5 6.4 8V24h-5v-7.6c0-1.8-.03-4.1-2.5-4.1-2.5 0-2.9 1.9-2.9 3.9V24h-5V8z"/>
      </svg>
    </a>

    {/* <!-- X (Twitter) --> */}
    <a href="#" aria-label="X">
      <svg class="w-5 h-5 fill-white hover:fill-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M432 32H80C53.5 32 32 53.5 32 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM347.1 178.7l-48.5 55 77.5 99.6h-65.2l-52.2-68.5-59.5 68.5H137l86.1-99.1-74-96.5h65.2l47.6 62.2 56.7-62.2h65.5l-86 100.2 85.6 105.8H347.1z"/>
      </svg>
    </a>

    {/* <!-- Facebook --> */}
    <a href="#" aria-label="Facebook">
      <svg class="w-5 h-5 fill-white hover:fill-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.408.593 24 1.325 24h11.49v-9.294H9.691v-3.622h3.124V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.408 24 24 23.408 24 22.676V1.325C24 .593 23.408 0 22.675 0z"/>
      </svg>
    </a>

    {/* <!-- YouTube --> */}
    <a href="#" aria-label="YouTube">
      <svg class="w-5 h-5 fill-white hover:fill-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path d="M549.655 124.083c-6.281-23.65-24.784-42.143-48.432-48.425C458.529 64 288 64 288 64s-170.528 0-213.224 11.658c-23.647 6.282-42.15 24.775-48.431 48.425C16 167.086 16 256 16 256s0 88.913 10.345 131.917c6.281 23.65 24.784 42.143 48.431 48.425C117.472 448 288 448 288 448s170.529 0 213.223-11.658c23.648-6.282 42.151-24.775 48.432-48.425C560 344.913 560 256 560 256s0-88.914-10.345-131.917zM232 336V176l142.857 80L232 336z"/>
      </svg>
    </a>
  </div>
</footer>

    </div>
  );
};

export default Footer;
