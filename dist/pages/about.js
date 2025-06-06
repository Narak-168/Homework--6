"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderAbout = renderAbout;
function renderAbout() {
    const div = document.createElement('div');
    div.innerHTML = `
    <section class="overflow-hidden bg-white py-8 sm:py-16">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div class="lg:pr-8 lg:pt-4">
        <div class="lg:max-w-lg">
          <h2 class="text-base font-semibold leading-7 text-indigo-600">Produce faster</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">An Enterprise API</p>
          <p class="mt-6 text-lg leading-8 text-gray-600">We've built an API that allows you to scale your podcast
            production workflow.
          </p>
          <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor" aria-hidden="true" class="absolute left-1 top-1 h-5 w-5 text-indigo-600">
                  <path
                    d="M3.196 12.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 12.87z">
                  </path>
                  <path
                    d="M3.196 8.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 8.87z">
                  </path>
                  <path
                    d="M10.38 1.103a.75.75 0 00-.76 0l-7.25 4.25a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.76 0l7.25-4.25a.75.75 0 000-1.294l-7.25-4.25z">
                  </path>
                </svg>Template driven
              </dt>
              <dd class="inline">Inspired by Sendgrid, Mailchimp, and Postmark, we allow you to create and apply
                templated content to your media.
              </dd>
            </div>
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                  class="absolute left-1 top-1 h-5 w-5 text-indigo-600">
                  <path fill-rule="evenodd"
                    d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                    clip-rule="evenodd"></path>
                </svg>
                Simple, REST
              </dt>
              <dd class="inline">A simple REST API that allows you to create, generate, and manage your content.</dd>
            </div>
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor" aria-hidden="true" class="absolute left-1 top-1 h-5 w-5 text-indigo-600">
                  <path fill-rule="evenodd"
                    d="M14.5 10a4.5 4.5 0 004.284-5.882c-.105-.324-.51-.391-.752-.15L15.34 6.66a.454.454 0 01-.493.11 3.01 3.01 0 01-1.618-1.616.455.455 0 01.11-.494l2.694-2.692c.24-.241.174-.647-.15-.752a4.5 4.5 0 00-5.873 4.575c.055.873-.128 1.808-.8 2.368l-7.23 6.024a2.724 2.724 0 103.837 3.837l6.024-7.23c.56-.672 1.495-.855 2.368-.8.096.007.193.01.291.01zM5 16a1 1 0 11-2 0 1 1 0 012 0z"
                    clip-rule="evenodd"></path>
                  <path
                    d="M14.5 11.5c.173 0 .345-.007.514-.022l3.754 3.754a2.5 2.5 0 01-3.536 3.536l-4.41-4.41 2.172-2.607c.052-.063.147-.138.342-.196.202-.06.469-.087.777-.067.128.008.257.012.387.012zM6 4.586l2.33 2.33a.452.452 0 01-.08.09L6.8 8.214 4.586 6H3.309a.5.5 0 01-.447-.276l-1.7-3.402a.5.5 0 01.093-.577l.49-.49a.5.5 0 01.577-.094l3.402 1.7A.5.5 0 016 3.31v1.277z">
                  </path>
                </svg>Developer friendly </dt>
              <dd class="inline">Documented and easy to use, we make it easy to integrate with your existing workflow.
              </dd>
            </div>
          </dl>
        </div>
        <div class="mt-10 flex items-center gap-x-6">
          <a href="#"
            class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Start
            for free
          </a>
          <a href="#" class="text-sm font-semibold leading-6 text-gray-700">Schedule a demo
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div><img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxjb21wdXRlcnxlbnwwfDB8fHwxNjkxODE2NjY3fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Product screenshot" class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442">
    </div>
  </div>
</section>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />

<section id="new-features" class="py-8 bg-white sm:py-10 lg:py-16">
  <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div class="text-center">
      <h2 class="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl">
        Boost Your Productivity </h2>
      <p class="mt-4 text-base leading-7 text-gray-600 sm:mt-8">
        Enhance your workflow with advanced features
      </p>
    </div>
    <div
      class="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
      <!-- Feature 1 -->
      <div class="md:p-8 lg:p-14 flex flex-col justify-center items-center">
        <div class="w-14 h-14 rounded-full bg-purple-200 flex justify-center items-center">
          <i class="fa-solid fa-chart-column text-3xl text-gray-900"></i>
        </div>
        <h3 class="mt-12 text-xl font-bold text-gray-900">Advanced Analytics</h3>
        <p class="mt-5 text-base text-gray-600">Track and analyze your data with powerful analytics tools. Gain valuable
          insights for better decision-making.</p>
      </div>

      <!-- Feature 2 -->
      <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
        <div class="w-14 h-14 rounded-full bg-teal-200 flex justify-center items-center">
          <i class="fa-solid fa-truck-fast text-3xl text-gray-900"></i>
        </div>
        <h3 class="mt-12 text-xl font-bold text-gray-900">Fast Integration</h3>
        <p class="mt-5 text-base text-gray-600">Seamlessly integrate with your existing tools and systems for a smooth
          workflow experience.</p>
      </div>

      <!-- Feature 3 -->
      <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
        <div class="w-14 h-14 rounded-full bg-yellow-200 flex justify-center items-center">
          <i class="fa-solid fa-shield text-3xl text-gray-900"></i>
        </div>
        <h3 class="mt-12 text-xl font-bold text-gray-900">Security First</h3>
        <p class="mt-5 text-base text-gray-600">Ensure the safety of your data with top-notch security features. Your
          privacy is our priority.</p>
      </div>

      <!-- Feature 4 -->
      <div class="md:p-8 lg:p-14 md:border-t md:border-gray-200 flex flex-col justify-center items-center">
        <div class="w-14 h-14 rounded-full bg-red-200 flex justify-center items-center">
          <i class="fa-solid fa-cloud text-3xl text-gray-900"></i>
        </div>
        <h3 class="mt-12 text-xl font-bold text-gray-900">Cloud Integration</h3>
        <p class="mt-5 text-base text-gray-600">Access your data from anywhere with seamless cloud integration. Work
          without boundaries.</p>
      </div>

      <!-- Feature 5 -->
      <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
        <div class="w-14 h-14 rounded-full bg-green-200 flex justify-center items-center">
          <i class="fa-solid fa-pen-nib text-3xl text-gray-900"></i>
        </div>
        <h3 class="mt-12 text-xl font-bold text-gray-900">Task Management</h3>
        <p class="mt-5 text-base text-gray-600">Organize your workflow with efficient task management features. Stay on
          top of your projects effortlessly.</p>
      </div>

      <!-- Feature 6 -->
      <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
        <div class="w-14 h-14 rounded-full bg-orange-200 flex justify-center items-center">
          <i class="fa-solid fa-bolt text-3xl text-gray-900"></i>
        </div>
        <h3 class="mt-12 text-xl font-bold text-gray-900">Performance Metrics</h3>
        <p class="mt-5 text-base text-gray-600">Monitor and measure your performance with comprehensive metrics.
          Optimize your processes for maximum efficiency.</p>
      </div>
    </div>
  </div>
</section>

<section class="text-gray-700 body-font">
  <div class="flex justify-center mt-10 text-4xl font-regular">
    Why Us?
  </div>
  <div class="container px-5 py-12 mx-auto">
    <div class="flex flex-wrap text-center justify-center">
      <div class="p-4 md:w-1/4 sm:w-1/2">
        <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div class="flex justify-center">
            <img src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp" class="w-32 mb-3">
          </div>
          <h2 class="title-font font-regular text-2xl text-gray-900">Latest Milling Machinery</h2>
        </div>
      </div>

      <div class="p-4 md:w-1/4 sm:w-1/2">
        <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div class="flex justify-center">
            <img src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp" class="w-32 mb-3">
          </div>
          <h2 class="title-font font-regular text-2xl text-gray-900">Reasonable Rates</h2>
        </div>
      </div>

      <div class="p-4 md:w-1/4 sm:w-1/2">
        <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div class="flex justify-center">
            <img src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp" class="w-32 mb-3">
          </div>
          <h2 class="title-font font-regular text-2xl text-gray-900">Time Efficiency</h2>
        </div>
      </div>

      <div class="p-4 md:w-1/4 sm:w-1/2">
        <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div class="flex justify-center">
            <img src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp" class="w-32 mb-3">
          </div>
          <h2 class="title-font font-regular text-2xl text-gray-900">Expertise in Industry</h2>
        </div>
      </div>

    </div>
  </div>
</section>

<section class="overflow-hidden">
 <div class="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 h-svh flex flex-col justify-center">
  <div class="flex flex-col sm:flex-row mx-auto">
   <!--- Starts component --> <a href="#_"> <img src="https://images.unsplash.com/photo-1530035415911-95194de4ebcc?q=80&amp;w=2670&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom" alt="#_"> </a><a href="#_"> <img src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&amp;w=2672&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D " class="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom" alt="#_"> </a><a href="#_"> <img src="https://images.unsplash.com/photo-1586996292898-71f4036c4e07?q=80&amp;w=2670&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom" alt="#_"> </a><a href="#_"> <img src="https://images.unsplash.com/photo-1522775417749-29284fb89f43?q=80&amp;w=2574&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom" alt="#_"> </a>
   <!--- Ends component -->
  </div> <!-- Starts links to tutorial -->
  <div class="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
   <div class="pointer-events-auto flex w-full max-w-md divide-x divide-neutral-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
    <div class="flex w-0 flex-1 items-center p-4">
     <div class="w-full">
      <p class="text-sm font-medium text-neutral-900">Tutorial</p>
      <p class="mt-1 text-sm text-neutral-500">
       How to create animated image cards with Tailwind CSS and Astrojs
      </p>
      <p class="mt-2 text-xs text-orange-500 underline"> <a href="https://lexingtonthemes.com">
        by © Lexington Themes</a> </p>
     </div>
    </div>
    <div class="flex">
     <div class="flex flex-col divide-y divide-neutral-200">
      <div class="flex h-0 flex-1"> <a target="_blank" href="https://lexingtonthemes.com/tutorials/how-to-create-animated-images-with-tailwind-css-and-astro-js/" type="button" class="flex w-full items-center justify-center rounded-none rounded-tr-lg border border-transparent px-4 py-3 text-sm font-medium text-orange-600 hover:text-orange-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-orange-500">Tutorial</a> </div>
      <div class="flex h-0 flex-1"> <a target="_blank" href="https://github.com/UnwrappedDesign/lexington-tutorials/tree/main/src/pages/simplified-cards" class="flex w-full items-center justify-center rounded-none rounded-br-lg border border-transparent px-4 py-3 text-sm font-medium text-neutral-700 hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500">Get the code</a> </div>
     </div>
    </div>
   </div>
  </div> <!-- Ends links to tutorial -->
 </div>
</section>
                    
  `;
    return div;
}
