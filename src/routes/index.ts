export default eventHandler(() => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Bad Developer</title>
      <link rel="icon" href="https://i.postimg.cc/nLNDZDKZ/logo-1.png" />
      <meta property="og:title" content="Bad Developer" />
      <meta property="og:description" content="Bad developer's portfolio website" />
      <meta property="og:image" content="https://i.postimg.cc/nLNDZDKZ/logo-1.png" />
      <meta property="og:url" content="https://cozi.lol" />
      <meta property="og:type" content="website" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
      <script src="https://cdn.tailwindcss.com"></script>
      <script>
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              colors: {
                primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8" },
                mono: { background: "#0c0c0c", card: "#111", accent: "#1a1a1a" },
                type: { emphasized: "#e0e0e0", subheader: "#d0d0d0", dimmed: "#c0c0c0", "footer": "#6b7280" },
              },
            },
          },
        };
      </script>
    </head>

    <body class="bg-mono-background min-h-screen flex flex-col items-center justify-center p-4 cursor-default">
      <div class="bg-mono-card rounded-lg shadow-2xl p-8 max-w-xl w-full">
        <div class="flex items-center justify-between mb-6">
          <h1 class="text-4xl font-bold text-primary-700">Bad <span class="text-type-emphasized">Developer</span></h1>
          <img src="https://i.postimg.cc/nLNDZDKZ/logo-1.png" class="w-14 h-auto shadow-md" />
        </div>

        <p class="text-type-dimmed mb-4">
          Hi I am Cooper Ransom and I am a student programmer and web designer. I am 16 and develop in my free time, I am a self taught programmer and I started in 7th grade with python. Now I am designing web apps and API's using React and unjs.
        </p>

        <h2 class="flex items-center mb-4 text-2xl font-semibold text-type-emphasized">
          Frameworks & Languages
        </h2>
        <div class="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center mb-4">
          <img loading="lazy" src="https://i.postimg.cc/sD0SKqBv/icons8-python-144.png" class="w-10 h-auto hover:scale-110 cursor-pointer duration-300" onClick="window.open('https://www.python.org/', '_blank')">
          <img loading="lazy" src="https://i.postimg.cc/fTZZpR9P/Typescript.png" class="w-10 h-auto hover:scale-110 cursor-pointer duration-300" onClick="window.open('https://www.typescriptlang.org/', '_blank')">
          <img loading="lazy" src="https://i.postimg.cc/Nfs4Y8Ys/js.png" class="w-10 h-auto hover:scale-110 cursor-pointer duration-300" onClick="window.open('https://www.javascript.com/', '_blank')">
          <img loading="lazy" src="https://i.postimg.cc/nzxm2ZhF/java.png" class="w-10 h-auto hover:scale-110 cursor-pointer duration-300" onClick="window.open('https://www.java.com/', '_blank')">
          <img loading="lazy" src="https://i.postimg.cc/BZK66RSN/icons8-c-144.png" class="w-10 h-auto hover:scale-110 cursor-pointer duration-300" onClick="window.open('https://isocpp.org/', '_blank')">
          <img loading="lazy" src="https://i.postimg.cc/4ygTnLPF/pngwing-com.png" class="w-10 h-auto hover:scale-110 cursor-pointer duration-300" onClick="window.open('https://www.gnu.org/software/bash/', '_blank')">
          <img loading="lazy" src="https://i.postimg.cc/63YxndHx/react.png" class="w-10 h-auto hover:scale-110 cursor-pointer duration-300" onClick="window.open('https://react.dev/', '_blank')">
          <img loading="lazy" src="https://i.postimg.cc/BQyXNDSZ/5968322.png" class="w-10 h-auto hover:scale-110 cursor-pointer duration-300" onClick="window.open('https://nodejs.org/en', '_blank')">
          <img loading="lazy" src="https://i.postimg.cc/DwBNC2r1/tailwind.png" class="w-10 h-auto hover:scale-110 cursor-pointer duration-300" onClick="window.open('https://tailwindcss.com/', '_blank')">
          <img loading="lazy" src="https://i.postimg.cc/9XwjrqGK/icon.png" class="w-10 h-auto hover:scale-110 cursor-pointer duration-300" onClick="window.open('https://nitro.unjs.io/', '_blank')">
          <img loading="lazy" src="https://i.postimg.cc/2SVdDrpQ/workers.png" class="w-10 h-auto hover:scale-110 cursor-pointer duration-300" onClick="window.open('https://workers.cloudflare.com/', '_blank')">
          <img loading="lazy" src="https://i.postimg.cc/JztS7Cmz/logo-1-1.png" class="w-10 h-auto hover:scale-110 cursor-pointer duration-300" onClick="window.open('https://zod.dev', '_blank')">
          <img loading="lazy" src="https://i.postimg.cc/c4DJC3gM/124599.jpg" class="w-10 h-auto hover:scale-110 cursor-pointer duration-300" onClick="window.open('https://ui.shadcn.com/', '_blank')">
          <img loading="lazy" src="https://i.postimg.cc/Z5MF80g6/72518640.png" class="w-10 h-auto hover:scale-110 cursor-pointer duration-300" onClick="window.open('https://tanstack.com/', '_blank')">
          <img loading="lazy" src="https://i.postimg.cc/9QryQCM0/logo-2.png" class="w-10 h-auto hover:scale-110 cursor-pointer duration-300" onClick="window.open('https://neatojs.com/docs/guider', '_blank')">
          <img loading="lazy" src="https://i.postimg.cc/25WvnGnf/download-2-removebg-preview.png" class="w-10 h-auto hover:scale-110 cursor-pointer duration-300" onClick="window.open('https://million.dev/', '_blank')">
          <img loading="lazy" src="https://i.postimg.cc/d02Yr0qF/Vite-js.png" class="w-10 h-auto hover:scale-110 cursor-pointer duration-300" onClick="window.open('https://million.dev/', '_blank')">
          <img loading="lazy" src="https://i.postimg.cc/gJnJH0CG/hono-logo-85-A5-D1206-D-seeklogo-com.png" class="w-10 h-auto hover:scale-110 cursor-pointer duration-300" onClick="window.open('https://hono.dev/', '_blank')">
          <img loading="lazy" src="https://i.postimg.cc/90wnGJ8x/images-1-removebg-preview.png" class="w-10 h-auto hover:scale-110 cursor-pointer duration-300" onClick="window.open('https://svelte.dev/', '_blank')">
          <img loading="lazy" src="https://i.postimg.cc/ZKhG8hmp/prettier-removebg-preview.png" class="w-10 h-auto hover:scale-110 cursor-pointer duration-300" onClick="window.open('https://prettier.io/', '_blank')">
        </div>

        <h2 class="flex items-center mb-4 text-2xl font-semibold text-type-emphasized">
          Software
        </h2>
        <div class="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center mb-4">
          <img loading="lazy" src="https://i.postimg.cc/fyqkGSYK/logo-removebg-preview.png" class="w-10 h-auto hover:scale-110 cursor-pointer duration-300" onClick="window.open('https://httptoolkit.com/', '_blank')">
          <img loading="lazy" src="https://i.postimg.cc/3JywyRgs/Visual-Studio-Code-1-35-icon-svg.png" class="w-10 h-auto hover:scale-110 cursor-pointer duration-300" onClick="window.open('https://code.visualstudio.com/', '_blank')">
          <img loading="lazy" src="https://i.postimg.cc/ZqLYkySd/download-3-removebg-preview.png" class="w-10 h-auto hover:scale-110 cursor-pointer duration-300" onClick="window.open('https://git-scm.com/', '_blank')">
          <img loading="lazy" src="https://i.postimg.cc/B6Yqb9tZ/figma-logo-512.png" class="w-10 h-auto hover:scale-110 cursor-pointer duration-300" onClick="window.open('https://www.figma.com/', '_blank')">
          <img loading="lazy" src="https://i.postimg.cc/jS0RLhqf/images-2-removebg-preview.png" class="w-10 h-auto hover:scale-110 cursor-pointer duration-300" onClick="window.open('https://www.cloudflare.com', '_blank')">
          <img loading="lazy" src="https://i.postimg.cc/cLB6Wz7C/linux-icon-2048x2048-sy06t4un-removebg-preview.png" class="w-10 h-auto hover:scale-110 cursor-pointer duration-300" onClick="window.open('https://www.linux.org/', '_blank')">
        </div>

        <h2 class="flex items-center mb-4 text-2xl font-semibold text-type-emphasized">
          Contributions
        </h2>
        <div class="text-type-dimmed mb-8 flex flex-wrap justify-between">
          <a class="underline text-primary-500 hover:text-primary-600 transition duration-100" href="https://wyzie.ru" alt="wyzie-subs" title="Wyzie Toolset">wyzie toolset</a>
          <a class="underline text-primary-500 hover:text-primary-600 transition duration-100" href="https://files.vc" alt="files.vc" title="files.vc">files.vc</a>
          <a class="underline text-primary-500 hover:text-primary-600 transition duration-100" href="https://markd.it" alt="markd" title="markd">markd</a>
          <a class="underline text-primary-500 hover:text-primary-600 transition duration-100" href="https://github.com/sussy-code" alt="sudo-flix" title="sudo-flix">sudo-flix</a>
          <a class="underline text-primary-500 hover:text-primary-600 transition duration-100" href="https://github.com/bookracy" alt="bookracy" title="bookracy">bookracy</a>
          <a class="underline text-primary-500 hover:text-primary-600 transition duration-100" href="https://365.ilysm.nl" alt="365 Radio" title="365 Radio">365 Radio</a>
        </div>

        <a href="https://github.com/itzcozi" class="flex justify-center" alt="Github" title="Github">
          <button class="text-type-emphasized shadow-lg text-lg w-5/6 py-1 rounded bg-primary-700 hover:scale-105 transition duration-200 flex gap-4 items-center justify-center">
            My Github
            <img loading="lazy" src="https://i.postimg.cc/0QL9ypJH/github-mark-white.png" alt="Github Logo" class="w-6 h-6" />
          </button>
        </a>
      </div>

      <footer class="mt-12 text-center text-type-footer text-sm">
        <p class="flex justify-center items-center space-x-2 mt-2">
          <a href="https://x.com/lilmancoop420" class="hover:text-primary-600 text-dark transition duration-100" alt="Twitter link" title="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current">
              <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path
                d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
              />
            </svg>
          </a>
          <a href="mailto:dev@wyzie.ru" class="hover:text-primary-600 text-dark transition duration-100" alt="Email link" title="Email">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1920" class="w-5 h-5 fill-current">
              <path
                d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z"
                fill-rule="evenodd"
              />
            </svg>
          </a>
        </p>
        <p class="mt-2 text-dark">
          Created by
          <a href="https://github.com/itzcozi" class="text-primary-500 font-semibold hover:text-primary-600 transition duration-100 underline" alt="Developer social link">BadDeveloper</a>
          with 💙
        </p>
      </footer>
    </body>
  </html>
  `;
});