export const config = {
    TMDB_API_KEY: {
        v3: process.env.TMDB_API_KEY_V3 || process.env.VITE_TMDB_API_KEY_V3,
        v4: process.env.TMDB_API_KEY_V4 || process.env.VITE_TMDB_API_KEY_V4,
    },
    API_BASE_URL: 'https://api.themoviedb.org/3'
};