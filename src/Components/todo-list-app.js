// Todo-List App Component...!

import React, { Component } from "react";

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoValue: "",
            todoArr: [],
            isEditing: false
        }
    }

    // Function to handle form...!
    formHandler = (event) => {
        this.setState({
            todoValue: event.target.value
        });
    }

    // Function to add item...!
    addItem = () => {
        let todoArrClone = this.state.todoArr;
        let inputValue = this.state.todoValue;

        if (inputValue != 0) {
            todoArrClone.push(this.state.todoValue);
            this.setState({
                todoArr: todoArrClone,
                todoValue: ""
            });
        }

        else {
            alert("You need to fill the required field!");
            this.setState({
                todoValue: ""
            });
        }
    }

    // Function to delete item...!
    deleteItem = (keyIndex) => {
        let todoArrClone = this.state.todoArr;
        todoArrClone.splice(keyIndex, 1);
        this.setState({
            todoArr: todoArrClone
        });
    }

    // Declaring glbal variable for updating data...!
    key;

    // Function to edit item...!
    editItem = (keyIndex) => {
        let todoArrClone = this.state.todoArr;
        let previousValue = todoArrClone[keyIndex];
        this.setState({
            isEditing: true,
            todoValue: previousValue
        });
        this.key = keyIndex;
    }

    // Function to update item...!
    updateItem = () => {
        let todoArrClone = this.state.todoArr;
        let updateValue = this.state.todoValue;

        if (updateValue != 0) {
            todoArrClone.splice(this.key, 1, updateValue);
            this.setState({
                todoArr: todoArrClone,
                todoValue: "",
                isEditing: false
            });
        }

        else {
            alert("Please fill the required field first!");
            this.setState({
                todoValue: ""
            });
        }
    }

    // Function to cancel updating data...!
    cancel = () => {
        this.setState({
            isEditing: false,
            todoValue: ""
        });
    }

    // Function to delete all items...!
    deleteAllItems = () => {
        let todoArrClone = this.state.todoArr;
        alert("All items deleted successfully!");
        todoArrClone.splice(0, todoArrClone.length);
        this.setState({
            todoArr: todoArrClone
        });
    }

    render() {
        return (
            <div>
                <h1> Todo List App in React JS </h1>
                {
                    (this.state.isEditing)
                        ?
                        (
                            <div>
                                <input
                                    type="text"
                                    autoFocus
                                    value={this.state.todoValue}
                                    onChange={this.formHandler}
                                />
                                <button onClick={this.updateItem}> Update Item </button>
                                <button onClick={this.cancel}> Cancel </button>
                            </div>
                        )
                        :
                        (
                            <div>
                                <input
                                    type="text"
                                    autoFocus
                                    value={this.state.todoValue}
                                    onChange={this.formHandler}
                                />
                                <button onClick={this.addItem}> Add Item </button>
                                <button onClick={this.deleteAllItems}> Delete All Items </button>
                            </div>
                        )
                }

                <hr />

                <ul>
                    {
                        this.state.todoArr.map((item, index) => {
                            return (
                                <li key={index}>
                                    {item}
                                    <button onClick={this.deleteItem.bind(this, index)}> Delete Item </button>
                                    <button onClick={this.editItem.bind(this, index)}> Edit Item </button>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default TodoList;

// App completed successfully...!