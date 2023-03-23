const apiHost = 'moviesdatabase.p.rapidapi.com';
const apiKey ='3d071accc4msh352f4c833b68dc9p15fa3ajsnb4f5ab7855c3';
const baseUrl = "https://moviesdatabase.p.rapidapi.com/titles/search/title/";
searchMovie = document.getElementById("searchMovie");


/*document.addEventListener('submit', () => {
	getMovie();
	console.log(searchMovie);
});*/


const getMovie = async () => {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': apiKey,
			'X-RapidAPI-Host': apiHost
		}
	};
	
	fetch(baseUrl+searchMovie.value, options)
		.then(response => response.json())
		.then(response => console.log(response))
		.catch(err => console.error(err));
}
