const key = import.meta.env.VITE_OMDB_KEY;

export async function searchAll(str, type, page=1) {
    if (type === "all") type = undefined;
    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${key}&s=${str}${type ? `&type=${type}` : ""}&page=${page}`);
        return await response.json();
    } catch (error) {
        console.log(error);
        throw error;
    }
}