const apiHost = 'moviesdatabase.p.rapidapi.com';
const apiKey ='3d071accc4msh352f4c833b68dc9p15fa3ajsnb4f5ab7855c3';
const baseUrl = "https://moviesdatabase.p.rapidapi.com/titles/search/title/";
const searchMovie = document.getElementById("searchMovie");
const queryParam = "?limit=20&info=base_info";


document.addEventListener('submit', () => {
	getMovie();
	console.log(searchMovie);
});

const getMovie = async () => {
	
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': apiKey,
			'X-RapidAPI-Host': apiHost
		}
	};
	const response = await fetch(baseUrl+searchMovie.value+queryParam, options);
	
	const {results} = await response.json();
	console.log(results);
	let hasYear,hasImg;
	
	for(let i=0;i<results.length;i++){
		const movieCard=document.createElement("div-movie-card");
		if(results[i].releaseYear){
			hasYear=`
			<div class="releaseYear">${results[i].releaseYear.year}</div>
			`
		}else{
			hasYear=`<div></div>`;
		}
			
		if(results[i].primaryImage){
			hasImg=`
			<a href="#"><img src="${results[i].primaryImage.url}" class="movieImg"></a>
			`
		}else{
			hasImg=`<div></div>`;
		}
		movieCard.innerHTML= `
		<div id="movieID">${results[i].id}</div>
		<div class="movieTitle">${results[i].titleText.text}</div>
		${hasYear}
		${hasImg}
		`
		
		document.querySelector(".movies-container").appendChild(movieCard);
	}
	
}


