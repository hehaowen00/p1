import { useState } from "react";
import FloatingInput from "../../../components/FloatingInput";
import TextInput from "../../../components/TextInput";

function TodoList() {
  return (
  	<div className="h-full min-h-full w-full">
  	<div className="bg-white rounded px-2 py-1 h-full min-h-full">
  		<div className="mb-1 text-sm">
  			<a href="#" className="text-blue-500">Organization</a> <span className="text-gray-400">{">"}</span> <a href="#" className="text-blue-500">Notebook</a>
  		</div>
  		<div className="mb-2">
            <div class="col-span-12">
              <input
              	type="text"
              	placeholder="Title"
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-black shadow-sm"
              />
            </div>
  		</div>
  		<div className="mb-2">
  			<FloatingInput placeholder="Description" />
  			<button className="w-full mt-1 bg-blue-600 text-white rounded px-2 py-1 transform active:scale-90 transition-transform duration-500">
  				Add Item
  			</button>
  		</div>
  		<div className="flex flex-col mt-4 overflow-y-scroll px-1 pb-1 mb-2">
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
  		</div>
  	</div>
  	</div>
  );
}

function Item() {
	const [checked, setChecked] = useState(false);
	return (
		<div className="border mb-1 border-gray-300 bg-white rounded flex flex-row px-2 py-1">
			<div className="text-sm">
        <input
          type="checkbox"
          onChange={() => setChecked(!checked)}
          className="h-5 w-5 mr-4 rounded-md border-gray-400 bg-white shadow-sm"
        />
			</div>
			<div className={`text-sm flex-1 break-all ${checked && 'line-through text-gray-500'}`}>
				Item 1
			</div>
			<StatusLabel type='todo' />
			<StatusLabel type='done' />
			<StatusLabel type='in progress' />
		</div>
	);
}

const status = {
	'todo': { color: 'blue', text: 'Todo' },
	'done': { color: 'green', text: 'Done' },
	'in progress': { color: 'yellow', text: 'In Progress' },
}

function StatusLabel({type}) {
	const { color, text } = status[type];
	return (
			<div className={`text-sm mr-1 px-2 bg-${color}-600 select-none text-white`}>
				{text}
			</div>
	);
}

export default TodoList;