const UI = {
    const addMovieToUi = function (newFilm) {

        const movieList = document.querySelector('.movie-cards');
        movieList.innerHTML += `
            <div class="movie-card">
                <div class="movie-image">
                    <img src="${newFilm.url}" alt="">
                </div>
                <div class="movie-description">
                    <div class="movie-name">
                        <p>${newFilm.name}</p>
                    </div>
                    <div class="movie-director">
                        <p>${newFilm.director}</p>
                    </div>
                    <div class="action-area">
                        <button class="btn btn-delete">Sil</button>
                    </div>
                </div>
            </div>
        `;
    }
    
    const clearInputs = function(name, director, url) {
        name.value = "";
        director.value = "";
        url.value = "";
    }
    
    const displayMessage = function (message, type) {
        const formSection = document.querySelector('.form-section');
    
        const div = document.createElement('div');
        div.className = `${type}`;
    
        div.textContent = message;
    
        formSection.appendChild(div);
    
        setTimeout(() => {
            div.remove();
        }, 2000)
    }
    
    const loadAllMoviesToUi = function (movies){
        const movieCards = document.querySelector('.movie-cards');
    
        movies.forEach((movie) => {
            movieCards.innerHTML += `
            <div class="movie-card">
                <div class="movie-image">
                    <img src="${movie.url}" alt="">
                </div>
                <div class="movie-description">
                    <div class="movie-name">
                        <p>${movie.name}</p>
                    </div>
                    <div class="movie-director">
                        <p>${movie.director}</p>
                    </div>
                    <div class="action-area">
                        <button class="btn btn-delete">Sil</button>
                    </div>
                </div>
            </div>
            `
        })
    }
    
    const deleteMovieFromUi = function (buttonDelete){
        buttonDelete.parentElement.parentElement.parentElement.remove();
    }
    
    const clearAllMoviesFromUi = function(){
        let movieCards = document.querySelector('.movie-cards');
        
        while(movieCards.firstElementChild !== null){
            movieCards.firstElementChild.remove();
        }
    }
}

export { UI };
