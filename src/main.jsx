import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Router from "./Routes/Route";
import "./index.css";

import {
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={Router} />
		</QueryClientProvider>
	</React.StrictMode>
);
