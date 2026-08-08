import Film from "./Film.jsx";

export default function FilmList(props) {
    console.log(props);
    const {films, pending, type} = props;

    if (!films) return (
        <div className={"content-horizontal"}><span style={{fontSize: "24px", color: "white"}}>No films were found</span></div>
    );

    if (pending) return (
        <div className="progress">
            <div className="indeterminate"></div>
        </div>
    )

    const filteredFilms = type === "all" ? [...films] : [...films].filter(film => film.Type === type)

    return (
        <div className="wrapper">
            {filteredFilms.map((item) => (
                <Film key={item.imdbID} film={item} />
            ))}
        </div>
    )
}