import React from "react";

export const AddItem = () => {
    const initialList = [];
    const [list, setList] = React.useState(initialList);
    const [counter, setCounter] = React.useState(0);
    const [name, setName] = React.useState("");

    const addItem = () => {
        console.log(counter);
        setCounter(counter + 1);
        const newList = list.concat({ name });

        setList(newList);
    };

    function handleChange(event) {
        setName(event.target.value);
        console.log(name);
    }

    return (
        <div id="addItem" className="content">
            <button className="btn" onClick={() => addItem()}>
                Add Product
            </button>
            <input type="text" value={name} onChange={handleChange} />
            <div>{counter} products added</div>
            <ul>
                {list.map((item) => (
                    <li key="1">{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default AddItem;