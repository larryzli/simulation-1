import React, { Component } from "react";
import DetailHeader from "./DetailHeader";
// import { Link } from "react-router-dom";
import axios from "axios";

export default class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nameInput: "",
            priceInput: 0,
            id: this.props.match.params.id,
            item: []
        };
    }
    deleteItem() {
        axios
            .delete(`/api/bin/${this.state.id}`)
            .then(result => {
                this.setState({
                    item: result.data
                });
            })
            .catch(console.log);
    }
    componentDidMount() {
        axios.get(`/api/bin/${this.state.id}`).then(result => {
            this.setState({
                nameInput: result.data.name,
                priceInput: result.data.price,
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
                        // value={this.state.nameInput}
                        type="text"
                        name=""
                        id=""
                    />
                    Price: <input type="text" name="" id="" />
                    <button>EDIT</button>
                    <button onClick={this.deleteItem}>DELETE</button>
                </div>
            </div>
        );
    }
}
