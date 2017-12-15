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
                    to={`/create/${this.state.shelfLetter}${1}`}
                >
                    <div>+Add Inventory to Bin</div>
                </Link>
            );
        });
        return (
            <div className="App">
                <BinsHeader shelfLetter={this.state.shelfLetter} />
                <div className="shelf-container">
                    {bins}
                    {/* {this.state.bins[0] &&
                    this.state.bins[0].bin_number === 1 ? (
                        <Link
                            className="shelf-box"
                            key={0}
                            to={`/detail/${this.state.shelfLetter}${
                                this.state.bins[0].bin_number
                            }`}
                        >
                            <div>Bin {this.state.bins[0].bin_number}</div>
                        </Link>
                    ) : (
                        <Link
                            className="shelf-box"
                            key={0}
                            to={`/create/${this.state.shelfLetter}${1}`}
                        >
                            <div>+Add Inventory to Bin</div>
                        </Link>
                    )}
                    {this.state.bins[1] &&
                    this.state.bins[1].bin_number === 2 ? (
                        <Link
                            className="shelf-box"
                            key={1}
                            to={`/detail/${this.state.shelfLetter}${
                                this.state.bins[1].bin_number
                            }`}
                        >
                            <div>Bin {this.state.bins[1].bin_number}</div>
                        </Link>
                    ) : (
                        <Link
                            className="shelf-box"
                            key={1}
                            to={`/create/${this.state.shelfLetter}${2}`}
                        >
                            <div>+Add Inventory to Bin</div>
                        </Link>
                    )}
                    {this.state.bins[2] &&
                    this.state.bins[2].bin_number === 3 ? (
                        <Link
                            className="shelf-box"
                            key={2}
                            to={`/detail/${this.state.shelfLetter}${
                                this.state.bins[2].bin_number
                            }`}
                        >
                            <div>Bin {this.state.bins[2].bin_number}</div>
                        </Link>
                    ) : (
                        <Link
                            className="shelf-box"
                            key={2}
                            to={`/create/${this.state.shelfLetter}${3}`}
                        >
                            <div>+Add Inventory to Bin</div>
                        </Link>
                    )}
                    {this.state.bins[3] &&
                    this.state.bins[3].bin_number === 4 ? (
                        <Link
                            className="shelf-box"
                            key={3}
                            to={`/detail/${this.state.shelfLetter}${
                                this.state.bins[3].bin_number
                            }`}
                        >
                            <div>Bin {this.state.bins[3].bin_number}</div>
                        </Link>
                    ) : (
                        <Link
                            className="shelf-box"
                            key={3}
                            to={`/create/${this.state.shelfLetter}${4}`}
                        >
                            <div>+Add Inventory to Bin</div>
                        </Link>
                    )}
                    {this.state.bins[4] &&
                    this.state.bins[4].bin_number === 5 ? (
                        <Link
                            className="shelf-box"
                            key={4}
                            to={`/detail/${this.state.shelfLetter}${
                                this.state.bins[4].bin_number
                            }`}
                        >
                            <div>Bin {this.state.bins[4].bin_number}</div>
                        </Link>
                    ) : (
                        <Link
                            className="shelf-box"
                            key={4}
                            to={`/create/${this.state.shelfLetter}${5}`}
                        >
                            <div>+Add Inventory to Bin</div>
                        </Link>
                    )} */}
                </div>
            </div>
        );
    }
}
