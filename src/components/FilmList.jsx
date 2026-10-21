import Film from "./Film.jsx";

export default function FilmList(props) {
    const {films, pending, type, error, onSelect} = props;

    if (pending) return (
        <div className="progress">
            <div className="indeterminate"></div>
        </div>
    )

    if (!films) return (
        <div className={"content-horizontal"}><span style={{fontSize: "24px", color: "white"}}>{error ?? "No films were found"}</span></div>
    );

    const filteredFilms = type === "all" ? [...films] : [...films].filter(film => film.Type === type)

    return (
        <div className="wrapper">
            {filteredFilms.map((item) => (
                <Film key={item.imdbID} film={item} onSelect={onSelect} />
            ))}
        </div>
    )
}
