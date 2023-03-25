const baseUrlRating = "https://moviesdatabase.p.rapidapi.com/titles";
const queryParamRating = "?info=base_info&list=most_pop_movies&genre=";
let selectGenre = document.getElementById("selectGenre");
const ctx = document.getElementById("ratingChart");
let ratingChart;

const drawRatingChart = async () => {
    document.querySelector("#ratingChart").innerHTML="";

    if(ratingChart){
        ratingChart.destroy();
    }

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': apiHost
        }
    };
    
    fetch(baseUrlRating+queryParamRating+selectGenre.value, options)
    .then((response) => response.json())
    .then((json) => {
        const colors = [
            '#8e44ad',
            '#2980b9',
            '#1abc9c',
            '#2c3e50',
            '#c0392b',
            '#c0392b',
            '#c0392b',
            '#c0392b',
            '#c0392b',
            '#f48d86'
        ];

        //console.log(json.results.map((movie) => movie.titleText.text));
        //console.log(json.results.map((movie) => movie.ratingsSummary.aggregateRating));
        ratingChart = new Chart(ctx,{
            type: 'bar',
            data:{
                labels: json.results.map((movie) => movie.titleText.text),
                datasets:[{
                    label: "Popular Movies Ratings",
                    data: json.results.map((movie) => movie.ratingsSummary.aggregateRating),
                    borderWidth: 1,
                    backgroundColor: colors.map((color) => color)
                }]
            },
            options: {
                scales: {
                    y:{
                        beginAtZero: true
                    }
                }
            }
        });
    })
}