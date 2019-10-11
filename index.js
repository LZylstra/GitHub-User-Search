const apiKey = "";
const searchURL = "https://api.github.com/users";


function displayResults(){
    console.log("displayResults ran");
}


function getUserRepos(searchTerm){
    console.log(searchTerm);
    const url = `${searchURL}/${searchTerm}/repos`
    console.log(url);
    fetch(url).then(response =>{
        if(response.ok){
            return response.json();
        } throw new Error(reponse.statusText);
    }) 
    .then (responseJson => displayResults(responseJson))
    .catch(err=>{
        $('#js-error').text(`There was an error. ${err.message}.`);
    })
}


function watchForm(){
    $('form').submit(event =>{
        event.preventDefault();
        const searchTerm = $('#js-search-term').val();
        getUserRepos(searchTerm);
    })
}

$(watchForm)