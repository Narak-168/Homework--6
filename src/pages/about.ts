/** @format */

export function renderAbout(): HTMLElement {
	const div = document.createElement("div");
	div.innerHTML = `
   <div class="bg-gray-100 py-8 sm:py-16 lg:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col gap-12 md:gap-16 lg:gap-24">
        <!-- Header section -->
        <div class="space-y-4 text-center">
          <h2 class="text-base-content text-3xl font-bold md:text-3xl lg:text-4xl text-[#4f39f6]">About Us</h2>
          <p class="text-base-content/80 text-xl">
            Our achievement story stands as a powerful testament to teamwork and perseverance. United, we have faced
            challenges, celebrated victories, and woven a narrative of growth and success.
          </p>
          <a href="#" class="btn btn-primary btn-lg btn-gradient">
            Read More
            <span class="icon-[tabler--arrow-right] size-5 rtl:rotate-180"></span>
          </a>
        </div>

        <!-- Video player and stats -->
        <div class="relative mb-8 h-full w-full rounded-xl max-lg:space-y-6 sm:mb-16 lg:mb-24 lg:h-161">
          <img
            src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/about/about-9.png"
            class="h-full w-full rounded-xl object-cover"
          />
          <!-- Stats card overlapping the video section -->
          <div
            class="bg-base-100 border-base-content/20 rounded-box grid gap-10 border px-10 py-8 sm:max-lg:grid-cols-2 lg:absolute lg:-bottom-25 lg:left-1/2 lg:w-3/4 lg:-translate-x-1/2 lg:grid-cols-4 xl:w-max"
          >
            <!-- Stats items - Years of Experience -->
            <div class="flex flex-col items-center justify-center gap-4">
              <!-- Document icon SVG -->
              <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.3013 1.6001H20.6159C22.7164 1.60007 24.4097 1.60004 25.7414 1.77213C27.1239 1.95079 28.2879 2.33299 29.2126 3.22162C30.137 4.11026 30.5346 5.22912 30.7206 6.55798C30.8996 7.8379 30.8996 9.4653 30.8996 11.4843V20.5043C30.8996 22.5233 30.8996 24.1507 30.7206 25.4307C30.5346 26.7595 30.137 27.8783 29.2126 28.767C28.2879 29.6556 27.1239 30.0378 25.7414 30.2164C24.4097 30.3886 22.7164 30.3886 20.6159 30.3886H6.01758V11.4843C6.01755 9.4653 6.01753 7.8379 6.19656 6.55798C6.38244 5.22912 6.78011 4.11026 7.70465 3.22162C8.62919 2.33299 9.79329 1.95079 11.1758 1.77213C12.5075 1.60004 14.2007 1.60007 16.3013 1.6001Z"
                  fill="var(--color-primary)"
                  fill-opacity="0.2"
                />
                <path
                  d="M4.48162 6.80371C5.02138 6.67016 5.67024 6.66745 6.16962 6.69236C6.04966 7.95368 6.04968 9.54289 6.0497 11.5003V30.3849C5.95382 30.3779 5.86482 30.3676 5.77944 30.3531C3.8803 30.026 2.38587 28.0716 2.13584 25.5878C2.09949 25.2268 2.09955 24.8159 2.09962 24.2127L2.09963 10.9668C2.09963 9.20932 2.88685 7.19828 4.48162 6.80371Z"
                  fill="var(--color-primary)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.2452 8.01881C12.2602 8.01881 12.2751 8.01883 12.29 8.01883H15.3019C15.3168 8.01883 15.3317 8.01881 15.3467 8.01881C15.6139 8.01871 15.9028 8.0186 16.1466 8.05011C16.4323 8.08702 16.7972 8.18196 17.1042 8.47715C17.4114 8.77231 17.5101 9.12306 17.5485 9.39762C17.5813 9.63199 17.5812 9.90964 17.5812 10.1664C17.5812 10.1809 17.5812 10.1952 17.5812 10.2095V11.9308C17.5812 11.9451 17.5812 11.9595 17.5812 11.9739C17.5812 12.2307 17.5813 12.5083 17.5485 12.7427C17.5101 13.0173 17.4114 13.368 17.1042 13.6632C16.7972 13.9584 16.4323 14.0533 16.1466 14.0902C15.9028 14.1217 15.6139 14.1216 15.3467 14.1215C15.3317 14.1215 15.3168 14.1215 15.3019 14.1215H12.29C12.2751 14.1215 12.2602 14.1215 12.2452 14.1215C11.978 14.1216 11.6891 14.1217 11.4453 14.0902C11.1596 14.0533 10.7947 13.9584 10.4876 13.6632C10.1805 13.368 10.0817 13.0173 10.0433 12.7427C10.0105 12.5083 10.0107 12.2307 10.0108 11.9739C10.0108 11.9595 10.0108 11.9451 10.0108 11.9308V10.2095C10.0108 10.1952 10.0108 10.1808 10.0108 10.1664C10.0107 9.90964 10.0105 9.63199 10.0433 9.39762C10.0817 9.12306 10.1805 8.77231 10.4876 8.47715C10.7947 8.18196 11.1596 8.08702 11.4453 8.05011C11.6891 8.0186 11.978 8.01871 12.2452 8.01881Z"
                  fill="var(--color-primary)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.5312 9.06403C21.5312 8.45253 22.0469 7.95679 22.6833 7.95679H25.7553C26.3914 7.95679 26.9073 8.45253 26.9073 9.06403C26.9073 9.67555 26.3914 10.1713 25.7553 10.1713H22.6833C22.0469 10.1713 21.5312 9.67555 21.5312 9.06403Z"
                  fill="var(--color-primary)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.5312 13.0418C21.5312 12.4303 22.0469 11.9346 22.6833 11.9346H25.7553C26.3914 11.9346 26.9073 12.4303 26.9073 13.0418C26.9073 13.6533 26.3914 14.1491 25.7553 14.1491H22.6833C22.0469 14.1491 21.5312 13.6533 21.5312 13.0418Z"
                  fill="var(--color-primary)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.0107 18.947C10.0107 18.3355 10.5265 17.8398 11.1627 17.8398H25.7548C26.391 17.8398 26.9068 18.3355 26.9068 18.947C26.9068 19.5586 26.391 20.0542 25.7548 20.0542H11.1627C10.5265 20.0542 10.0107 19.5586 10.0107 18.947Z"
                  fill="var(--color-primary)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.0107 23.376C10.0107 22.7645 10.5265 22.2688 11.1627 22.2688H25.7548C26.391 22.2688 26.9068 22.7645 26.9068 23.376C26.9068 23.9875 26.391 24.4834 25.7548 24.4834H11.1627C10.5265 24.4834 10.0107 23.9875 10.0107 23.376Z"
                  fill="var(--color-primary)"
                />
              </svg>
              <div class="space-y-2 text-center">
                <span class="text-primary text-[#4f39f6] text-3xl font-semibold">20+</span>
                <p class="text-base-content/80">Years of Experience</p>
              </div>
            </div>

            <!-- Stats items - Successful Projects -->
            <div class="flex flex-col items-center justify-center gap-4">
              <!-- Projects icon SVG -->
              <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_10399_304346)">
                  <path
                    d="M12.8113 1.15372e-06H20.1892C20.5026 -1.66422e-05 20.7906 -3.29867e-05 21.0324 0.0167549C21.2924 0.0347947 21.5781 0.0758928 21.8684 0.19827C22.4957 0.462627 22.9941 0.969686 23.254 1.6079C23.3413 1.8225 23.3864 2.03462 23.4114 2.23597C24.1495 2.24587 24.7229 2.28333 25.2343 2.42272C27.1272 2.93882 28.606 4.44328 29.1132 6.36936C29.3008 7.08179 29.3005 7.91253 29.3002 9.12995V22.0352C29.3002 24.0706 29.3002 25.7114 29.1296 27.0016C28.9527 28.3414 28.574 29.4694 27.6935 30.3653C26.8128 31.2611 25.7042 31.6464 24.3876 31.8266C23.1192 32 21.5068 32 19.5061 32H13.4942C11.4937 32 9.88113 32 8.61289 31.8266C7.29617 31.6464 6.18751 31.2611 5.30698 30.3653C4.42647 29.4694 4.04775 28.3414 3.87073 27.0016C3.70021 25.7114 3.70025 24.0706 3.70026 22.0352L3.70023 9.12997C3.69985 7.91253 3.69957 7.08179 3.88719 6.36938C4.39444 4.44328 5.87309 2.93882 7.76615 2.42272C8.27749 2.28331 8.85085 2.24587 9.58897 2.23595C9.61397 2.03461 9.65919 1.8225 9.74655 1.6079C10.0064 0.969686 10.5047 0.462627 11.132 0.19827C11.4224 0.0758928 11.7081 0.0347947 11.968 0.0167549C12.2098 -3.29867e-05 12.4978 -1.66424e-05 12.8113 1.15372e-06Z"
                    fill="var(--color-primary)"
                    fill-opacity="0.2"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.7752 2.45764C11.8122 2.37007 11.8808 2.30026 11.9669 2.26265C11.9776 2.25986 12.0192 2.25079 12.1169 2.24401C12.2749 2.23303 12.4868 2.23242 12.8426 2.23242H20.1569C20.5128 2.23242 20.7246 2.23303 20.8827 2.24401C20.9804 2.25079 21.0219 2.25986 21.0326 2.26265C21.1187 2.30026 21.1873 2.37007 21.2243 2.45764C21.227 2.46858 21.236 2.51085 21.2427 2.61033C21.2534 2.77108 21.2541 2.98669 21.2541 3.34871C21.2541 3.71073 21.2534 3.92634 21.2427 4.08709C21.236 4.18655 21.227 4.22882 21.2243 4.23978C21.1873 4.32735 21.1187 4.39714 21.0326 4.43477C21.0219 4.43754 20.9804 4.44663 20.8827 4.45341C20.7246 4.46439 20.5128 4.46498 20.1569 4.46498H12.8426C12.4868 4.46498 12.2749 4.46439 12.1169 4.45341C12.0192 4.44663 11.9776 4.43754 11.9669 4.43477C11.8808 4.39714 11.8122 4.32735 11.7752 4.23978C11.7725 4.22884 11.7636 4.18657 11.7569 4.08709C11.7461 3.92634 11.7455 3.71073 11.7455 3.34871C11.7455 2.98669 11.7461 2.77108 11.7569 2.61033C11.7636 2.51085 11.7725 2.46858 11.7752 2.45764ZM10.2256 14.5218C10.2256 13.85 10.7604 13.3021 11.4242 13.3021H21.5753C22.2392 13.3021 22.774 13.85 22.774 14.5218C22.774 15.1937 22.2392 15.7416 21.5753 15.7416H11.4242C10.7604 15.7416 10.2256 15.1937 10.2256 14.5218ZM10.2256 20.4339C10.2256 19.7621 10.7604 19.2142 11.4242 19.2142H21.5753C22.2392 19.2142 22.774 19.7621 22.774 20.4339C22.774 21.1058 22.2392 21.6538 21.5753 21.6538H11.4242C10.7604 21.6538 10.2256 21.1058 10.2256 20.4339Z"
                    fill="var(--color-primary)"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_10399_304346">
                    <rect width="32" height="32" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
              <div class="space-y-2 text-center">
                <span class="text-primary text-[#4f39f6] text-3xl font-semibold">70+</span>
                <p class="text-base-content/80">Successful Projects</p>
              </div>
            </div>

            <!-- Stats items - Customer Reviews -->
            <div class="flex flex-col items-center justify-center gap-4">
              <!-- Star icon SVG -->
              <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.777 1.67693C16.2533 1.57449 16.7458 1.57449 17.2222 1.67693C18.2817 1.90485 18.9665 2.74077 19.5034 3.62363C20.0466 4.51691 20.6182 5.77322 21.3204 7.31653L21.354 7.39047C21.8278 8.43194 21.9406 8.62269 22.0806 8.74709C22.1351 8.79555 22.1942 8.83872 22.2567 8.87599C22.4175 8.97165 22.6326 9.02063 23.7626 9.15256L24.0393 9.18485C25.6289 9.37042 26.9233 9.5215 27.8889 9.74909C28.8418 9.97368 29.8001 10.339 30.3535 11.2077C30.6743 11.7112 30.8609 12.2895 30.8953 12.8867C30.9546 13.9171 30.3927 14.7797 29.7529 15.5254C29.1046 16.2811 28.1455 17.1694 26.9678 18.2604L26.9114 18.3126C26.0318 19.1275 25.8786 19.3041 25.8046 19.4838C25.7674 19.5735 25.7418 19.6676 25.7281 19.7638C25.7006 19.9563 25.7425 20.187 26.0849 21.3403L26.1554 21.5779C26.7015 23.4177 27.1446 24.9095 27.3318 26.0607C27.5162 27.1945 27.5286 28.4012 26.7162 29.3081C26.511 29.5374 26.2762 29.7382 26.0183 29.9052C24.9982 30.5655 23.8175 30.3583 22.7361 29.9918C21.6383 29.6195 20.2478 28.938 18.5329 28.0979L18.0074 27.8404C16.9332 27.314 16.7183 27.2383 16.5186 27.2367L16.4918 27.2369C16.2921 27.2399 16.0778 27.3175 15.0077 27.8524L14.5348 28.0889C12.8028 28.955 11.399 29.6567 10.2908 30.0417C9.20024 30.4206 8.00708 30.6382 6.97612 29.9683C6.73189 29.8095 6.5085 29.6206 6.31124 29.4055C5.4785 28.4982 5.48604 27.2772 5.669 26.1303C5.85492 24.9649 6.29999 23.4518 6.84917 21.5847L6.9213 21.3395C7.26031 20.1868 7.30159 19.9564 7.2737 19.7641C7.25984 19.6686 7.23421 19.5751 7.19741 19.486C7.1233 19.3067 6.97037 19.1302 6.0918 18.3164L6.03546 18.2641C4.85594 17.1715 3.89552 16.2819 3.24637 15.5251C2.60575 14.7783 2.04337 13.9142 2.10412 12.8823C2.13908 12.2881 2.32471 11.7128 2.64325 11.2114C3.1965 10.3407 4.15586 9.97445 5.1101 9.74941C6.07703 9.52136 7.37335 9.37005 8.96543 9.18421L9.23652 9.15256C10.3666 9.02063 10.5816 8.97165 10.7424 8.87599C10.805 8.83872 10.864 8.79555 10.9186 8.74709C11.0586 8.62269 11.1713 8.43194 11.6451 7.39047L11.6787 7.31666C12.3809 5.77328 12.9525 4.51693 13.4957 3.62363C14.0327 2.74077 14.7174 1.90485 15.777 1.67693Z"
                  fill="var(--color-primary)"
                  fill-opacity="0.2"
                />
              </svg>
              <div class="space-y-2 text-center">
                <span class="text-primary text-[#4f39f6] text-3xl font-semibold">500+</span>
                <p class="text-base-content/80">Customer Reviews</p>
              </div>
            </div>

            <!-- Stats items - Achieve Awards -->
            <div class="flex flex-col items-center justify-center gap-4">
              <!-- Award icon SVG -->
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M27.281 19.6648C27.281 25.5919 22.4545 30.3968 16.5004 30.3968C10.5464 30.3968 5.71973 25.5919 5.71973 19.6648C5.71973 13.7377 10.5464 8.93286 16.5004 8.93286C22.4545 8.93286 27.281 13.7377 27.281 19.6648Z"
                  fill="var(--color-primary)"
                  fill-opacity="0.2"
                />
                <path
                  d="M18.4258 7.43527C21.1365 7.85461 23.5578 9.14535 25.3915 11.0108C25.4296 10.9537 25.4687 10.895 25.509 10.8344L29.9243 4.20274C30.6866 3.05788 31.0677 2.48546 30.8298 2.04424C30.5919 1.60303 29.9019 1.60303 28.5223 1.60303H25.8261C24.0082 1.60303 23.0992 1.60303 22.3397 2.02085C21.5802 2.43868 21.0965 3.20482 20.1291 4.73709L18.4258 7.43527Z"
                  fill="var(--color-primary)"
                />
                <path
                  d="M7.62681 10.992C9.46465 9.13024 11.8892 7.84429 14.6024 7.43093L11.9124 3.17007C11.2968 2.19487 10.2209 1.60303 9.0639 1.60303H2.94211C2.27136 1.60303 1.87047 2.34632 2.24102 2.90288L7.5218 10.8344C7.55772 10.8884 7.5927 10.9409 7.62681 10.992Z"
                  fill="var(--color-primary)"
                />
                <path
                  d="M16.5004 15.0288C16.2816 15.0288 16.1489 15.323 15.8836 15.9115L15.7868 16.126C15.4037 16.9757 15.2121 17.4005 14.8529 17.6631C14.4937 17.9257 14.0291 17.9804 13.1 18.0898L12.8713 18.1169C12.248 18.1901 11.9364 18.2269 11.869 18.4306C11.8016 18.6345 12.0304 18.8482 12.4879 19.2759L12.5667 19.3495C13.3016 20.0364 13.6691 20.3799 13.7949 20.8375C13.9208 21.2951 13.7803 21.777 13.4993 22.7409L13.3798 23.1509C13.1939 23.7885 13.101 24.1073 13.2717 24.2482C13.4425 24.389 13.7399 24.2389 14.3347 23.9389L14.9876 23.6095C15.7299 23.2351 16.101 23.0479 16.5012 23.0463C16.9013 23.0447 17.2741 23.2289 18.0194 23.5973L18.6711 23.9196C19.2644 24.2129 19.561 24.3596 19.7305 24.2181C19.8999 24.0769 19.8068 23.7604 19.6207 23.1276L19.5081 22.7449C19.2239 21.7793 19.0818 21.2964 19.2074 20.8375C19.333 20.3786 19.7015 20.0343 20.4383 19.3455L20.5129 19.2759C20.9705 18.8482 21.1991 18.6345 21.1317 18.4306C21.0644 18.2269 20.7527 18.1901 20.1295 18.1169L19.9009 18.0898C18.9717 17.9804 18.5071 17.9257 18.1479 17.6631C17.7887 17.4005 17.5972 16.9757 17.214 16.126L17.1172 15.9115C16.8519 15.323 16.7193 15.0288 16.5004 15.0288Z"
                  fill="var(--color-primary)"
                />
              </svg>
              <div class="space-y-2 text-center">
                <span class="text-primary text-[#4f39f6] text-3xl font-semibold">25</span>
                <p class="text-base-content/80">Achieve Awards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <section class="text-[#4f39f6] body-font">
  <div class="flex justify-center mt-10 text-3xl font-bold"> 
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

<!-- source https://github.com/spacemadev/elevate-free-tailwind-business-template/ -->
<section id="our-team" class="bg-gray-100 py-32">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl text-[#4f39f6] font-bold text-center mb-8 text-primary">Meet Our Team</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- Team Member 1 -->
            <div class="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                <img src="https://spacema-dev.com/elevate/assets/images/team/1.jpg" alt="Team Member 1" class="w-full rounded-full mb-4">
                <h3 class="text-xl font-semibold mb-2">John Doe</h3>
                <p class="text-gray-700">Role: Software Engineer</p>
            </div>

            <!-- Team Member 2 -->
            <div class="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                <img src="https://spacema-dev.com/elevate/assets/images/team/4.jpg" alt="Team Member 2" class="w-full rounded-full mb-4">
                <h3 class="text-xl font-semibold mb-2">Jane Smith</h3>
                <p class="text-gray-700">Role: Graphic Designer</p>
            </div>

            <!-- Team Member 3 -->
            <div class="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                <img src="https://spacema-dev.com/elevate/assets/images/team/3.jpg" alt="Team Member 3" class="w-full rounded-full mb-4">
                <h3 class="text-xl font-semibold mb-2">Alex Johnson</h3>
                <p class="text-gray-700">Role: Marketing Manager</p>
            </div>

            <!-- Team Member 4 -->
            <div class="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                <img src="https://spacema-dev.com/elevate/assets/images/team/2.jpg" alt="Team Member 4" class="w-full rounded-full mb-4">
                <h3 class="text-xl font-semibold mb-2">Peter Johnson</h3>
                <p class="text-gray-700">Role: Seo specialist</p>
            </div>

            <!-- Team Member 5 -->
            <div class="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                <img src="https://spacema-dev.com/elevate/assets/images/team/5.jpg" alt="Team Member 5" class="w-full rounded-full mb-4">
                <h3 class="text-xl font-semibold mb-2">Emily Brown</h3>
                <p class="text-gray-700">Role: UX Designer</p>
            </div>

            <!-- Team Member 6 -->
            <div class="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                <img src="https://spacema-dev.com/elevate/assets/images/team/6.jpg" alt="Team Member 6" class="w-full rounded-full mb-4">
                <h3 class="text-xl font-semibold mb-2">Michael Davis</h3>
                <p class="text-gray-700">Role: Frontend Developer</p>
            </div>

            <!-- Team Member 7 -->
            <div class="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                <img src="https://spacema-dev.com/elevate/assets/images/team/7.jpg" alt="Team Member 7" class="w-full rounded-full mb-4">
                <h3 class="text-xl font-semibold mb-2">Sarah Johnson</h3>
                <p class="text-gray-700">Role: Content Writer</p>
            </div>

            <!-- Team Member 8 -->
            <div class="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                <img src="https://spacema-dev.com/elevate/assets/images/team/8.jpg" alt="Team Member 8" class="w-full rounded-full mb-4">
                <h3 class="text-xl font-semibold mb-2">David Wilson</h3>
                <p class="text-gray-700">Role: Project Manager</p>
            </div>
        </div>
    </div>
</section>
                    
  `;
	return div;
}
