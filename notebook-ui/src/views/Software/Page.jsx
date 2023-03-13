function Page() {
	return (
		<div className="h-full max-h-[100%]">
			<Collection />
		</div>
	);
}

function Collection() {
	return (
		<div className="w-full h-full flex flex-col">
			<div className="bg-white text-sm mb-2 px-2 py-1 rounded cursor-pointer">
				<p>Board 1</p>
			</div>
			<div className="w-full max-h-[100%] flex flex-row flex-1">
				<List>
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
				</List>
				<List>
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
				</List>
				<AddList />
			</div>
		</div>
	);
}

function List({ children }) {
	return (
		<div className="max-h-[100%] h-full max-w-[280px] mr-3 flex flex-col">
			<div className="drop-shadow bg-gray-100 px-2 py-1 w-full flex-col h-full max-h[100%] rounded">
				<div className="ml-2 mr-4 pt-1 pb-1 text-gray-700 text-sm cursor-pointer break-all">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, placeat quidem veniam odio reiciendis quis nam cupiditate eos vel eius, nobis, aperiam accusamus sed itaque quisquam aliquid repellat adipisci eveniet.
				</div>
				<div className="rounded flex-1 px-1 overflow-y-auto font-normal text-sm">
					{children}
				</div>
				<div className="">
					<button className="text-sm w-full text-left px-2 mt-1 text-gray-600">
						Add Item
					</button>
				</div>
			</div>
		</div>
	);
}

function Item() {
	return (
		<div className="bg-white max-w-[100%] rounded mb-1 px-2 py-1 text-sm cursor-pointer drop-shadow">
			<p className="break-all text-sm">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, placeat quidem veniam odio reiciendis quis nam cupiditate eos vel eius, nobis, aperiam accusamus sed itaque quisquam aliquid repellat adipisci eveniet.
			</p>
		</div>
	);
}

function AddList() {
	return (
		<div className="mr-3 max-w-[280px] w-[280px] flex flex-1 flex-col rounded ">
			<div className="bg-gray-100 px-2 py-1 rounded drop-shadow text-sm cursor-pointer">
			Add List
			</div>
		</div>
	);
}

function AddStatus() {
	return (
		<div>
		</div>
	);
}

export default Page;