export default function Film(props) {
    const {film} = props;

    const types = {
        movie: "Movie",
        series: "Series",
    }

    return (
        <div className="film-card">
            <div className="card-image waves-effect waves-block waves-light film-poster">
                {film.Poster && film.Poster !== "N/A" ? (
                    <img alt={`${film.Title ?? "film"} poster`} className="activator film-poster" src={film.Poster} />
                ) : (
                    <div className="activator film-poster film-poster-placeholder content-vertical">
                        <i className="material-icons large">movie</i>
                        <span>No poster</span>
                    </div>
                )}
            </div>
            <div className="film-card-content">
                <span className="card-title activator white-text">{film.Title ?? "Film"}</span>
                <div className="content-horizontal white-text darken-2">
                    <p>{film.Type ? types[film.Type] : "—"}</p>
                    <p>{film.Year ? film.Year : "—"}</p>
                </div>

            </div>
        </div>

    )
}