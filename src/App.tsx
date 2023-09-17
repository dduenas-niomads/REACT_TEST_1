import React from 'react'
import { v4 as uuidv4 } from 'uuid'

const initialList = [
	{ id: '1', name: 'daniel' }
];

const App = () => {
	const [list, setList] = React.useState(initialList)
	const [name, setName] = React.useState('')
	
  	function handleAdd() {
		if (name != '') {
			const newList = list.concat({ name, id: uuidv4() })
			setList(newList)
			setName('')
		} else {
			alert('Insert text')
		}
	}

	function handleChange(event: any) {
		if (event?.target.value) setName(event?.target.value)
	}

	function deleteLi(event: any) {
		if (event) {
			const element = document.getElementById(event.target.parentElement.id)
			if (element) {
				element.remove()
			}
		}
	}

	return (
		<div>
			<AddItem
				name={name}
				onChange={handleChange}
				onAdd={handleAdd}
			/>

			<List list={list} deleteLi={deleteLi}/>
		</div>
  	)
}

const AddItem = ({ name, onChange, onAdd }: { name: string, onChange: any, onAdd: any }) => (
	<div>
		<input type="text" value={name} onChange={onChange} />
		<button type="button" onClick={onAdd}>
			New element
		</button>
	</div>
)

const List = ({ list, deleteLi }: { list: any, deleteLi: any}) => (
	<ul>
		{list.map((item:any) => (
			<li id={item.id}
				key={item.id}>
				<button onClick={deleteLi}>
					{item.name}
				</button>
			</li>
		))}
	</ul>
)

export default App