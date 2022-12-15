

export async function moviesData(){
    const list = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=e5cb8f8381599df7f9f8d53744ae759b&language=en-US&page=1").then(
        res=> res.json()
    ).then(data=>{return data;}).catch(err=>console.log(err));
    return list;
}

export async function newMoviesData(){
    const list = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=e5cb8f8381599df7f9f8d53744ae759b&language=en-US&page=1").then(
        res=> res.json()
    ).then(data=>{return data;}).catch(err=>console.log(err));
    return list;
}


export async function latestMovies(){
    const list = await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=e5cb8f8381599df7f9f8d53744ae759b").then(
        res=> res.json()
    ).then(data=>{return data;}).catch(err=>console.log(err));
    return list;
}

