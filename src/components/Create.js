import React, { Component } from "react";
import CreateHeader from "./CreateHeader";
// import { Link } from "react-router-dom";
import axios from "axios";

export default class Create extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            nameInput: "",
            priceInput: "0.00",
            imageurl: "default",
            item: {}
        };

        this.nameChange = this.nameChange.bind(this);
        this.priceChange = this.priceChange.bind(this);
        this.createItem = this.createItem.bind(this);
    }
    // componentDidMount() {
    //     axios.get(`/api/bin/${this.state.id}`).then(result => {
    //         this.setState({
    //             item: result.data
    //         });
    //     });
    // }
    nameChange(event) {
        this.setState({
            nameInput: event.target.value
        });
    }
    priceChange(event) {
        this.setState({
            priceInput: event.target.value
        });
    }
    createItem() {
        axios
            .post(`/api/bin/${this.state.id}`, {
                name: this.state.nameInput,
                price: this.state.priceInput,
                imageurl: this.state.imageurl
            })
            .then(result => {
                this.props.history.push(`/bins/${this.state.id[0]}`);
            })
            .catch(console.log);
    }
    render() {
        return (
            <div className="App">
                <CreateHeader
                    shelfLetter={this.state.id[0]}
                    binNumber={this.state.id[1]}
                />
                <div className="shelf-container">
                    <img src="" alt="" />
                    Name:{" "}
                    <input
                        value={this.state.nameInput}
                        onChange={this.nameChange}
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter Item Name"
                    />
                    Price:{" "}
                    <input
                        value={this.state.priceInput}
                        onChange={this.priceChange}
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter Item Price"
                    />
                    <button onClick={this.createItem}>+ADD TO INVENTORY</button>
                </div>
            </div>
        );
    }
}
