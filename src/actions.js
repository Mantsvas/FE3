export const setMovieList = (list) => ({
    type: 'SET_MOVIE_LIST',
    list,
});


export const setGenreList  = (list) => ({
    type: 'SET_GENRE_LIST',
    list,
});

export const addHeart  = (id,list) => ({
    type: 'ADD_TO_HEARTED_LIST',
    list,
    id,
});

export const removeHeart  = (id,list) => ({
    type: 'REMOVE_FROM_HEARTED_LIST',
    list,
    id,
});

export const addLog = (list,log) => ({
    type: 'ADD_LOG',
    list,
    log,
})
