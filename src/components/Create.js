import React, { Component } from "react";
import CreateHeader from "./CreateHeader";
// import { Link } from "react-router-dom";
import axios from "axios";

export default class Create extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            item: {}
        };
    }
    componentDidMount() {
        axios.get(`/api/bin/${this.state.id}`).then(result => {
            this.setState({
                item: result.data
            });
        });
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
                    Name: <input type="text" name="" id="" />
                    Price: <input type="text" name="" id="" />
                    <button>+ADD TO INVENTORY</button>
                </div>
            </div>
        );
    }
}
