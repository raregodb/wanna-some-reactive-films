import React from "react";
import { getFilm } from "../api/api.js";

export default class FilmDialog extends React.Component {

    dialogRef = React.createRef();

    state = {
        film: null,
        isLoading: true,
        error: null
    }

    componentDidMount() {
        this.dialogRef.current.showModal();
        getFilm(this.props.id).then((response) => {
            if (response.Response === "False") {
                this.setState({error: response.Error});
            } else {
                this.setState({film: response});
            }
        }).catch(() => {
            this.setState({error: "Something went wrong. Please try again later."});
        }).finally(() => this.setState({isLoading: false}));
    }

    handleBackdropClick = (e) => {
        if (e.target === this.dialogRef.current) {
            this.dialogRef.current.close();
        }
    }

    renderInfo(label, value) {
        if (!value || value === "N/A") return null;
        return (
            <p className="film-dialog__info"><span className="film-dialog__label">{label}:</span> {value}</p>
        )
    }

    renderContent() {
        const {film, isLoading, error} = this.state;

        if (isLoading) return (
            <div className="progress">
                <div className="indeterminate"></div>
            </div>
        )

        if (error) return (
            <p className="film-dialog__error">{error}</p>
        )

        return (
            <div className="film-dialog__body">
                {film.Poster && film.Poster !== "N/A" ? (
                    <img alt={`${film.Title} poster`} className="film-dialog__poster" src={film.Poster} />
                ) : (
                    <div className="film-dialog__poster film-dialog__poster--placeholder content-vertical">
                        <i className="material-icons large">movie</i>
                        <span>No poster</span>
                    </div>
                )}
                <div className="film-dialog__content">
                    <h5 className="film-dialog__title">{film.Title}</h5>
                    <p className="film-dialog__meta">
                        {[film.Year, film.Rated, film.Runtime].filter(item => item && item !== "N/A").join(" · ")}
                    </p>
                    {film.imdbRating && film.imdbRating !== "N/A" && (
                        <p className="film-dialog__rating"><i className="material-icons">star</i>{film.imdbRating} / 10</p>
                    )}
                    {this.renderInfo("Genre", film.Genre)}
                    {this.renderInfo("Director", film.Director)}
                    {this.renderInfo("Actors", film.Actors)}
                    {film.Plot && film.Plot !== "N/A" && (
                        <p className="film-dialog__plot">{film.Plot}</p>
                    )}
                </div>
            </div>
        )
    }

    render() {
        return (
            <dialog ref={this.dialogRef} className="film-dialog" onClose={this.props.onClose} onClick={this.handleBackdropClick}>
                <div className="film-dialog__inner">
                    {this.renderContent()}
                    <button type="button" onClick={() => this.dialogRef.current.close()} className="waves-effect waves-light btn grey darken-4 film-dialog__back">
                        <i className="material-icons left">arrow_back</i>back to search
                    </button>
                </div>
            </dialog>
        )
    }
}
