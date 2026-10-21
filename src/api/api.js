const key = import.meta.env.VITE_OMDB_KEY;

export async function searchAll(str, type, page=1) {
    if (type === "all") type = undefined;
    const params = new URLSearchParams({apikey: key, s: str, page});
    if (type) params.set("type", type);
    const response = await fetch(`https://www.omdbapi.com/?${params}`);
    if (!response.ok) throw new Error(`Request failed: ${response.status}`);
    return await response.json();
}

export async function getFilm(id) {
    const params = new URLSearchParams({apikey: key, i: id, plot: "full"});
    const response = await fetch(`https://www.omdbapi.com/?${params}`);
    if (!response.ok) throw new Error(`Request failed: ${response.status}`);
    return await response.json();
}
