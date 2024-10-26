import { ThemeProvider } from "styled-components";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Routes } from "./routes";

import GlobalStyle from "./styles/global";
import Theme from "./styles/theme";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ThemeProvider theme={Theme}>
			<GlobalStyle />
			<Routes />
		</ThemeProvider>
	</StrictMode>
);
