const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjY3MzVkN2IwNGY1NmVkZmY0ZmYxNjhhYjVhZTg1YSIsInN1YiI6IjY1OTUyZmUyZDdhNzBhMTIyZTY5MzcyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7VQTyH_ANq4ILJF9OwsBSBYEz_N7EY5hlKpkesNbJu4",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then((response) => {
    const movieListDiv = document.getElementById("movieList");
    response.results.forEach((movie) => {
      const movieDive = document.createElement("div");
      movieDive.innerHTML = `
        <div class="col">
            <div class="card h-100">
                <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">${movie.title}</h5>
                    <p class="card-text">평점 ${movie.vote_average}</p> 
                    <p class="card-text">${movie.overview}</p>    
                </div>         
            </div>  
        </div>`;
      movieListDiv.appendChild(movieDive);
    });
    console.log(response);
  })
  .catch((err) => console.error(err));
