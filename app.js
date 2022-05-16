const apinOsoite = 'https://api.themoviedb.org/3/movie/550?api_key=64e742f1948eb880020743c9e79e451a';
const kuvienOsoite = "https://image.tmdb.org/t/p/w1280";
const Etsi =
    "https://api.themoviedb.org/3/search/movie?&api_key=64e742f1948eb880020743c9e79e451a&query=";


const form = document.getElementById("form");
const search = document.getElementById("search");

haeElokuvat(apinOsoite);
function haeElokuvat(url){
    fetch(url).then(res => res.json())
    .then(function(data){
    
    data.results.forEach(element => {
        const alapalkki = document.createElement('div');
        const image = document.createElement('img');
        const text = document.createElement('h2');

        text.innerHTML = `${element.title}`;
        image.src = kuvienOsoite + element.poster_path;
        alapalkki.appendChild(image);
        alapalkki.appendChild(text);
        main.appendChild(alapalkki);
    }); 
});
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';
     
    const hakusana = search.value;

    if (hakusana) {
        haeElokuvat(Etsi + hakusana);
        search.value = "";
    }
});
