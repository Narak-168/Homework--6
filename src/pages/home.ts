/** @format */

export function renderHome(): HTMLElement {
	const div = document.createElement("div");
	div.innerHTML = `
    <!-- Hero Section -->
    <div class="relative bg-gray-100 overflow-hidden">
        <div class="max-w-7xl mx-auto">
            <div class="relative z-10 pb-8 bg-gray-100 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                <div class="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
                    <div class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div class="sm:text-center lg:text-left">
                            <h2 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                <span class="block">New Collection</span>
                                <span class="block text-[#4f39f6]">Spring 2025</span>
                            </h2>
                            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Discover our latest arrivals for women and girls. Fresh styles for every occasion.
                            </p>
                            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div class="rounded-md shadow">
                                    <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#4f39f6] hover:bg-[#394cf6] md:py-4 md:text-lg md:px-10">
                                        Shop Now
                                    </a>
                                </div>
                                <div class="mt-3 sm:mt-0 sm:ml-3">
                                    <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#4f39f6] bg-gray-200 hover:bg-gray-300 md:py-4 md:text-lg md:px-10">
                                        View Lookbook
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Fashion model">
        </div>
    </div>

    <!-- Categories Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-8">Shop by Category</h2>
        <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
            <a href="#" class="group relative block bg-gray-100 rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Women's clothing" class="w-full h-64 object-cover transition-opacity group-hover:opacity-75">
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div class="absolute bottom-0 left-0 p-4">
                    <h3 class="text-xl font-semibold text-white">Women's Clothing</h3>
                    <p class="mt-1 text-sm text-gray-300">Shop Now</p>
                </div>
            </a>
            <a href="#" class="group relative block bg-gray-100 rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80" alt="Girls' clothing" class="w-full h-64 object-cover transition-opacity group-hover:opacity-75">
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div class="absolute bottom-0 left-0 p-4">
                    <h3 class="text-xl font-semibold text-white">Girls' Clothing</h3>
                    <p class="mt-1 text-sm text-gray-300">Shop Now</p>
                </div>
            </a>
            <a href="#" class="group relative block bg-gray-100 rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80" alt="Women's shoes" class="w-full h-64 object-cover transition-opacity group-hover:opacity-75">
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div class="absolute bottom-0 left-0 p-4">
                    <h3 class="text-xl font-semibold text-white">Women's Shoes</h3>
                    <p class="mt-1 text-sm text-gray-300">Shop Now</p>
                </div>
            </a>
            <a href="#" class="group relative block bg-gray-100 rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Girls' shoes" class="w-full h-64 object-cover transition-opacity group-hover:opacity-75">
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div class="absolute bottom-0 left-0 p-4">
                    <h3 class="text-xl font-semibold text-white">Girls' Shoes</h3>
                    <p class="mt-1 text-sm text-gray-300">Shop Now</p>
                </div>
            </a>
        </div>
    </div>

   

   

    

    

    <div class="bg-gray-200 px-2 py-10">

  <div id="features" class="mx-auto max-w-6xl">
    <p class="text-center text-base font-semibold leading-7 text-primary-500">Features</p>
    <h2 class="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
      Writing has never been so easy
    </h2>
    <ul class="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
      <li class="rounded-xl bg-white px-6 py-8 shadow-sm">

        <img src="https://www.svgrepo.com/show/530438/ddos-protection.svg" alt="" class="mx-auto h-10 w-10">
        <h3 class="my-3 font-display font-medium">Powered by ChatGPT</h3>
        <p class="mt-1.5 text-sm leading-6 text-secondary-500">
          the cutting-edge language model that makes interactions a breeze. With its user-friendly interface,
          effortlessly tap into the world of AI-generated text.
        </p>

      </li>
      <li class="rounded-xl bg-white px-6 py-8 shadow-sm">

        <img src="https://www.svgrepo.com/show/530442/port-detection.svg"
                alt="" class="mx-auto h-10 w-10">
        <h3 class="my-3 font-display font-medium">Easy to use</h3>
        <p class="mt-1.5 text-sm leading-6 text-secondary-500">
          Simply input your subject, click the generate button, and the result will appear in seconds just like
          magick.
        </p>

      </li>
      <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
        <img src="https://www.svgrepo.com/show/530444/availability.svg" alt="" class="mx-auto h-10 w-10">
        <h3 class="my-3 font-display font-medium">Custom settings</h3>
        <p class="mt-1.5 text-sm leading-6 text-secondary-500">
          We offer advanced customization. You can freely combine options like roles, languages, publish, tones,
          lengths,
          and formats.
        </p>

      </li>
      <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
        <a href="/pricing" class="group">
          <img src="https://www.svgrepo.com/show/530440/machine-vision.svg" alt="" class="mx-auto h-10 w-10">
          <h3 class="my-3 font-display font-medium group-hover:text-primary-500">Free trial</h3>
          <p class="mt-1.5 text-sm leading-6 text-secondary-500">We offer a free trial service without login. We
            provide
            many payment options including pay-as-you-go and subscription.</p>
        </a>
      </li>
      <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
        <a href="/templates" class="group">
          <img src="https://www.svgrepo.com/show/530450/page-analysis.svg" alt="" class="mx-auto h-10 w-10">
          <h3 class="my-3 font-display font-medium group-hover:text-primary-500">
            90+ templates
          </h3>
          <p class="mt-1.5 text-sm leading-6 text-secondary-500">We offer many templates covering areas such as
            writing,
            education, lifestyle and creativity to inspire your potential. </p>
        </a>
      </li>
      <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
        <a href="/download" class="group">
          <img src="https://www.svgrepo.com/show/530453/mail-reception.svg" alt="" class="mx-auto h-10 w-10">
          <h3 class="my-3 font-display font-medium group-hover:text-primary-500">Use Anywhere</h3>
          <p class="mt-1.5 text-sm leading-6 text-secondary-500">Our product is compatible with multiple platforms
            including Web, Chrome, Windows and Mac, you can use MagickPen anywhere.</p>
        </a>
      </li>
    </ul>
  </div>

  <div>
  `;
	return div;
}
