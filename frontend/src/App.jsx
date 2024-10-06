import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Signup from "./components/auth/Signup";
import Home from "./components/Home";
import Login from "./components/auth/Login";
import Jobs from './components/Jobs';

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/signup",
		element: <Signup />,
	},
	{
		path: "/jobs",
		element: <Jobs />
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={appRouter} />
		</>
	);
}

export default App;
