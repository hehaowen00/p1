import Dashboard from "./Software/Dashboard";
import Organizations from "./Software/Organizations";
import Profile from "./Software/Profile";
import Sidebar from "../components/Sidebar";

import { createBrowserRouter } from "react-router-dom";
import Page from "./Software/Page";
import TodoList from "./Software/Todo/TodoList";

const router = createBrowserRouter([
	{
		path: '/dashboard',
		element: <Dashboard />,
	},
	{
		path: '/organizations',
		element: <Organizations />
	},
	{
		path: '/profile',
		element: <Profile />,
	}
]);

function Software() {
	return (
		<div
			className="flex flex-row h-full w-full bg-gray-100 px-3 py-3 max-w-full overflow-hidden"
		>
			<div
				className="h-full flex flex-col mr-2"
			>
				<Sidebar />
			</div>
			<div
				className="flex-1 pl-[2px] grid grid-cols-12"
			>
				<div
					className="col-span-12 px-3 h-full max-h-[100%] rounded-xl"
				>
					{/*<Page />*/}
					<TodoList />
				</div>
			</div>
		</div>
	);
}

export default Software;