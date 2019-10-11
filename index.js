const apiKey = "";
const searchURL = "https://api.github.com/users";




function getUserRepos(searchTerm){
    console.log(searchTerm);
}

function watchForm(){
    $('form').submit(event =>{
        event.preventDefault();
        const searchTerm = $('#js-search-term').val();
        getUserRepos(searchTerm);
    })
}

$(watchForm)