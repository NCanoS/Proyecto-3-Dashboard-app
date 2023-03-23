//const apiHost = 'moviesdatabase.p.rapidapi.com';
//const apiKey ='3d071accc4msh352f4c833b68dc9p15fa3ajsnb4f5ab7855c3';
//const baseUrl = "https://moviesdatabase.p.rapidapi.com/titles/search/title/";

const config = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': apiKey,
		'X-RapidAPI-Host': apiHost
    },
    body:JSON.stringify({
        id:"tt9520876",
        releaseDate: new Date(2018,2,17),
        releaseYear: new Date(2018),
        titleText: 'Alein & Alien',
        titleType: 'Video'
    })
}

async function updateMovie(event){
    const response = await fetch(baseUrl+"tt9520876");
}