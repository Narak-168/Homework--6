/** @format */

// This function assumes you already have components for navbar and footer
import { renderHeader } from "./components/header";
import { renderFooter } from "./components/footer";

export async function createLayout(
	contentFn: () => HTMLElement | Promise<HTMLElement>
): Promise<void> {
	const app = document.getElementById("app")!;
	app.innerHTML = "";

	// Create layout containers
	const layout = document.createElement("div");

	// Render navbar
	const navbar = renderHeader();
	layout.appendChild(navbar);

	// Render page content
	const content = await contentFn();
	layout.appendChild(content);

	// Render footer
	const footer = renderFooter();
	layout.appendChild(footer);

	// Append layout to the app
	app.appendChild(layout);
}
