import React from "react";

/**
 * 
 */
export const AddItem = () => {
    const initialList = [];
    const [counter, setCounter] = React.useState(0);
    const [name, setName] = React.useState("");

    const addItem = () => {
        console.log('before..', counter);
        setCounter(counter + 1);
        const newList = [name, initialList];
        console.log('after..', counter);
        console.log('------------------------');
    };

    return (
        <div id="addItem" className="content">
            <button className="btn">
                Add Product
            </button>
            <input type="text" value={name} />
            <div> # products added</div>
            <ul>
                list
            </ul>
        </div>
    );
};

export default AddItem;