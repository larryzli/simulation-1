import React, { Component } from "react";
import DetailHeader from "./DetailHeader";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nameInput: "",
            priceInput: "",
            canEdit: false,
            id: this.props.match.params.id,
            item: []
        };

        this.deleteItem = this.deleteItem.bind(this);
        this.priceChange = this.priceChange.bind(this);
        this.nameChange = this.nameChange.bind(this);
    }
    deleteItem() {
        axios
            .delete(`/api/bin/${this.state.id}`)
            .then(result => {
                this.props.history.push(`/bins/${this.state.id[0]}`);
            })
            .catch(console.log);
    }
    // updateItem() {
    //     axios.put(`/api/bin/${this.state.id}`, {name: this.state.nameInput, price: this.state.priceInput}).then()
    // }
    priceChange(event) {
        this.setState({
            priceInput: event.target.value
        });
    }
    nameChange(event) {
        this.setState({
            nameInput: event.target.value
        });
    }
    componentDidMount() {
        axios.get(`/api/bin/${this.state.id}`).then(result => {
            this.setState({
                nameInput: result.data[0].name,
                priceInput: result.data[0].price,
                item: result.data
            });
        });
    }
    render() {
        return (
            <div className="App">
                <DetailHeader
                    shelfLetter={this.state.id[0]}
                    binNumber={this.state.id[1]}
                />
                <div className="shelf-container">
                    <img src="" alt="" />
                    Name:{" "}
                    <input
                        onChange={this.nameChange}
                        value={this.state.nameInput}
                        type="text"
                        name=""
                        id=""
                    />
                    Price:{" "}
                    <input
                        onChange={this.priceChange}
                        value={this.state.priceInput}
                        type="text"
                        name=""
                        id=""
                    />
                    <button>EDIT</button>
                    <button onClick={this.deleteItem}>DELETE</button>
                </div>
            </div>
        );
    }
}
