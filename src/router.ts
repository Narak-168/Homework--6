/** @format */

import { createLayout } from "./layout";
import { renderAbout } from "./pages/about";
import { renderContact } from "./pages/contact";
import { renderHome } from "./pages/home";
import { renderNotFound } from "./pages/notfound";
import { renderService } from "./pages/service";
import { ProductDetails } from "./pages/productDetails"; // Make sure this path is correct

export function initRouter(): void {
	window.addEventListener("popstate", renderRoute);

	document.addEventListener("click", (e) => {
		const target = e.target as HTMLElement;
		if (target.tagName === "A" && target.hasAttribute("data-link")) {
			e.preventDefault();
			const href = target.getAttribute("href")!;
			history.pushState(null, "", href);
			renderRoute();
		}
	});

	renderRoute();
}

async function renderRoute(): Promise<void> {
	const pathname = window.location.pathname;

	// ✅ Handle dynamic route /product/:id
	const productMatch = pathname.match(/^\/product\/(\d+)$/);
	if (productMatch) {
		const productId = parseInt(productMatch[1], 10);
		await createLayout(() => ProductDetails(productId)); // Async supported
		return;
	}

	let contentFn: () => HTMLElement;

	switch (pathname) {
		case "/home":
			contentFn = renderHome;
			break;
		case "/about":
			contentFn = renderAbout;
			break;
		case "/contact":
			contentFn = renderContact;
			break;
		case "/service":
			contentFn = renderService;
			break;
		default:
			contentFn = renderNotFound;
			break;
	}

	createLayout(contentFn);
}
