import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import profMinato from "./assets/ProfMinato.jpeg";

// Set favicon to ProfMinato image at runtime so the bundler provides the correct asset URL
const setFavicon = (href: string) => {
	let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
	if (!link) {
		link = document.createElement("link");
		link.rel = "icon";
		document.head.appendChild(link);
	}
	link.href = href;
};

setFavicon(profMinato);

createRoot(document.getElementById("root")!).render(<App />);
