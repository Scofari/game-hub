import { createBrowserRouter } from "react-router-dom";
import { GameDetail, HomePage, Layout } from "./pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "games/:id", element: <GameDetail /> },
		],
	},
]);

export default router;