import React from "react";
import {Search} from "./Search.jsx";
import { searchAll } from "../api/api.js"
import FilmList from "./FilmList.jsx";
import FilmDialog from "./FilmDialog.jsx";

export  default class Main extends React.Component {

    state = {
        films: [],
        type: "all",
        isLoading: false,
        error: null,
        selectedFilmId: null
    }

    handleSearch = (value) => {
        if (!value.trim()) {
            return;
        }
        this.setState({isLoading: true, error: null});
        searchAll(value.trim(), this.state.type).then((response) => {
            this.setState({films: response.Search, error: response.Response === "False" ? response.Error : null});
        }).catch(() => {
            this.setState({films: undefined, error: "Something went wrong. Please try again later."});
        }).finally(() => this.setState({isLoading: false}));
    }

    handleChangeType = (e) => {
        this.setState({type: e.target.value});
    }

    handleSelectFilm = (id) => {
        this.setState({selectedFilmId: id});
    }

    handleCloseFilm = () => {
        this.setState({selectedFilmId: null});
    }

    render () {
        return (
            <main className="container content grey darken-3">
                <Search type={this.state.type} handleSearch={this.handleSearch} handleChangeType={this.handleChangeType} />
                <FilmList films={this.state.films} pending={this.state.isLoading} type={this.state.type} error={this.state.error} onSelect={this.handleSelectFilm} />
                {this.state.selectedFilmId && (
                    <FilmDialog key={this.state.selectedFilmId} id={this.state.selectedFilmId} onClose={this.handleCloseFilm} />
                )}
            </main>
        )
    }
}
