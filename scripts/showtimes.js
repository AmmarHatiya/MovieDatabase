
window.onload = function () {
    let url = 'http://www.omdbapi.com/?i=tt3896198&apikey=821faf0d';

    fetch(url)
        .then(res => res.json())
        .then((out) => {
            console.log("URL is: ", url);
            console.log('JSON:', out);
            $("#poster").attr("src",out['Poster']);
            $('#title').val(out["Title"])
            $('#year').val(out["Year"])
            $('#genre').val(out["Genre"])
            $('#runtime').val(out["Runtime"])
            $('#director').val(out["Director"])
            $('#writer').val(out["Writer"])
            $('#title').val(out["Title"])
            $('#title').val(out["Title"])
            
        })
        .catch(err => {
            throw err
        });


};