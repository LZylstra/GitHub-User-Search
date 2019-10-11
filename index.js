const apiKey = "";
const searchURL = "https://api.github.com/users";


function displayResults(responseJson){
    $('#results-list').empty();
    for (let i = 0; i < responseJson.length; i++){
        console.log("in the loop");
        $('#results-list').append(
            `<li><h3>${responseJson[i].name}</h3>
            <a href = "${responseJson[i].html_url}" target ="_blank">Link to repo</a>
            </li>`
        );
    }

    $("#results").removeClass('hidden');

}


function getUserRepos(searchTerm){
    console.log(searchTerm);
    const myUrl = `${searchURL}/${searchTerm}/repos`
    console.log(myUrl);
    fetch(myUrl).then(response =>{
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