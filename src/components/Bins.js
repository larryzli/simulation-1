import React, { Component } from "react";
import BinsHeader from "./BinsHeader";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Bins extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shelfLetter: this.props.match.params.id,
            bins: []
        };
    }

    componentDidMount() {
        axios
            .get(`/api/shelf/${this.state.shelfLetter}`)
            .then(result => {
                let newBins = [null, null, null, null, null];
                for (let i = 0; i < result.data.length; i++) {
                    newBins[result.data[i].bin_number - 1] = result.data[i];
                }
                this.setState({
                    bins: newBins
                });
            })
            .catch(console.log);
    }
    render() {
        const bins = this.state.bins.map((item, index) => {
            return item ? (
                <Link
                    className="shelf-box"
                    key={index}
                    to={`/detail/${this.state.shelfLetter}${item.bin_number}`}
                >
                    <div>Bin {item.bin_number}</div>
                </Link>
            ) : (
                <Link
                    className="shelf-box"
                    key={index}
                    to={`/create/${this.state.shelfLetter}${index + 1}`}
                >
                    <div>+Add Inventory to Bin</div>
                </Link>
            );
        });
        return (
            <div className="App">
                <BinsHeader shelfLetter={this.state.shelfLetter} />
                <div className="shelf-container">{bins}</div>
            </div>
        );
    }
}
