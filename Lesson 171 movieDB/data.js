var movies = [
    {
        title: "Lord of The Rings",
        Rating: 4.5,
        hasSeen: true
    },
    {
        title: "Cats",
        Rating: 2.0,
        hasSeen: false
    },
    {
        title: "Saving Private Ryan",
        Rating: 2.0,
        hasSeen: true
    }
]

movies.forEach(function(movie){
    console.log(buildString(movie));
});

function buildString(movie){
    var result = "You have ";
    if(movie.hasSeen){
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" -";
    results += movie.Rating + " stars";
    return result;
}