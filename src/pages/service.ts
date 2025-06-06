/** @format */

export function renderService(): HTMLElement {
	const div = document.createElement("div");

	type Products = {
		id: number;
		title: string;
		description: string;
		price: number;
		images: string[];
	};

	async function fetchProducts(): Promise<Products[]> {
		try {
			const response = await fetch(" https://api.escuelajs.co/api/v1/products");
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			const data = await response.json();
			console.log("Fetched service data:", data);
			return data as Products[];
		} catch (error) {
			console.error("Fetch error:", error);
			return [];
		}
	}
	// Set initial loading state
	div.innerHTML = `

<div role="status" class="max-w-sm p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700">
    <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
        <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
        </svg>
    </div>
    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
    <div class="flex items-center mt-4">
       <svg class="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
        </svg>
        <div>
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
            <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
    </div>
    <span class="sr-only">Loading...</span>
</div>

  `;

	function renderCards(products: Products[]) {
		console.log("Rendering products:", products);

		// Clear previous content and create a grid container
		div.innerHTML = "";
		const grid = document.createElement("div");
		grid.className =
			"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[90%] m-auto py-5";

		products.forEach((product) => {
			console.log(product.description);
			const card = document.createElement("div");
			card.innerHTML = `
<div class="w-full max-w-sm   border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 dark:bg-gray-500 dark:border-gray-700 overflow-hidden">
    <a href="#" class="block overflow-hidden">
        <img class="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-300" src="${
					product.images[0]
				}" alt="${product.title}" />
    </a>
    <div class="px-6 py-4">
        <h5 class="text-lg font-bold text-gray-900 dark:text-white truncate mb-2">${
					product.title
				}</h5>
        <p class="text-sm text-gray-600 dark:text-gray-300 h-12 overflow-hidden line-clamp-1">${product.description.slice(
					0,
					80
				)}</p>
        <div class="flex items-center mt-4 mb-3">
            <div class="flex space-x-1">
                ${`★`
									.repeat(4)
									.split("")
									.map(
										() => `
                    <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.563-.955L10 0l2.949 5.955 6.563.955-4.756 4.635 1.122 6.545z"/></svg>
                `
									)
									.join("")}
                <svg class="w-4 h-4 text-gray-300 dark:text-gray-600" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.563-.955L10 0l2.949 5.955 6.563.955-4.756 4.635 1.122 6.545z"/></svg>
            </div>
            <span class="ml-2 text-sm bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full dark:bg-blue-200 dark:text-blue-900">4.0</span>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-xl font-bold text-gray-900 dark:text-white">$${
							product.price
						}</span>
            <button class="relative inline-flex items-center justify-center p-2 px-4 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 focus:outline-none">
                <span class="relative z-10">+ Add to cart</span>
                <span class="absolute inset-0 bg-black opacity-10 group-hover:opacity-20 transition-opacity"></span>
            </button>
        </div>
    </div>
</div>
`;

			grid.appendChild(card);
		});

		div.appendChild(grid);
	}

	// Main execution
	(async () => {
		try {
			const products = await fetchProducts();
			renderCards(products);
		} catch (error) {
			console.error("Error:", error);
		}
	})();

	return div;
}
