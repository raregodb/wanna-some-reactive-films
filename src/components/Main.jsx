import React from "react";
import {Search} from "./Search.jsx";
import { searchAll } from "/src/api/api.js"
import FilmList from "./FilmList.jsx";

export  default class Main extends React.Component {

    state = {
        films: [],
        type: "all",
        isLoading: false
    }

    handleSearch = (value) => {
        if (!value) {
            return;
        }
        this.setState({isLoading: true});
        searchAll(value, this.state.type).then((response) => {
            this.setState({films: response.Search}, () => {console.log("Hey", this.state.films, response)});
        }).finally(() => this.setState({isLoading: false}));
    }

    handleChangeType = (e) => {
        this.setState({type: e.target.value});
    }

    render () {
        return (
            <main className="container content grey darken-3">
                <Search type={this.state.type} handleSearch={this.handleSearch} handleChangeType={this.handleChangeType} />
                <FilmList films={this.state.films} pending={this.state.isLoading} type={this.state.type} />
            </main>
        )
    }
}