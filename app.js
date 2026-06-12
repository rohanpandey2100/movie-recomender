const movies = [
    { title: "Inception", genre: "sci-fi", mood: "exciting", duration: 148, desc: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea." },
    { title: "The Dark Knight", genre: "action", mood: "intense", duration: 152, desc: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological tests." },
    { title: "Interstellar", genre: "sci-fi", mood: "emotional", duration: 169, desc: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival." },
    { title: "Parasite", genre: "thriller", mood: "mysterious", duration: 132, desc: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan." },
    { title: "Spirited Away", genre: "fantasy", mood: "chill", duration: 125, desc: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits." },
    { title: "Pulp Fiction", genre: "drama", mood: "exciting", duration: 154, desc: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption." },
    { title: "Whiplash", genre: "drama", mood: "intense", duration: 106, desc: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing." },
    { title: "The Matrix", genre: "sci-fi", mood: "exciting", duration: 136, desc: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception." },
    { title: "Se7en", genre: "mystery", mood: "intense", duration: 127, desc: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives." },
    { title: "The Silence of the Lambs", genre: "horror", mood: "mysterious", duration: 118, desc: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer." },
    { title: "Gladiator", genre: "action", mood: "emotional", duration: 155, desc: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery." },
    { title: "The Departed", genre: "thriller", mood: "intense", duration: 151, desc: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston." },
    { title: "The Prestige", genre: "mystery", mood: "mysterious", duration: 130, desc: "After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything." },
    { title: "Get Out", genre: "horror", mood: "mysterious", duration: 104, desc: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception reaches a boiling point." },
    { title: "Mad Max: Fury Road", genre: "action", mood: "exciting", duration: 120, desc: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners." },
    { title: "Eternal Sunshine of the Spotless Mind", genre: "romance", mood: "emotional", duration: 108, desc: "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories." },
    { title: "La La Land", genre: "romance", mood: "chill", duration: 128, desc: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations." },
    { title: "Superbad", genre: "comedy", mood: "chill", duration: 113, desc: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a wine-soaked party goes awry." },
    { title: "The Grand Budapest Hotel", genre: "comedy", mood: "chill", duration: 99, desc: "A writer relates his adventures at a renowned European resort hotel between the first and second World Wars." },
    { title: "Knives Out", genre: "mystery", mood: "exciting", duration: 130, desc: "A detective investigates the death of the patriarch of an eccentric, combative family." },
    { title: "Shutter Island", genre: "mystery", mood: "mysterious", duration: 138, desc: "Teddy Daniels and his new partner travel to a hospital for the criminally insane to investigate the disappearance of a patient." },
    { title: "A Quiet Place", genre: "horror", mood: "intense", duration: 90, desc: "A family struggles for survival in a world where most humans have been killed by blind but noise-sensitive creatures." },
    { title: "Arrival", genre: "sci-fi", mood: "mysterious", duration: 116, desc: "A linguist works with the military to communicate with alien spacecraft that have landed across the globe." },
    { title: "Baby Driver", genre: "action", mood: "exciting", duration: 112, desc: "After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail." },
    { title: "About Time", genre: "romance", mood: "emotional", duration: 123, desc: "At the age of 21, Tim discovers he can travel in time and change what happens and has happened in his own life." },
    { title: "The Hangover", genre: "comedy", mood: "chill", duration: 100, desc: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing." },
    { title: "Prisoners", genre: "thriller", mood: "intense", duration: 153, desc: "When Keller Dover's daughter and her friend go missing, he takes matters into his own hands as the police pursue multiple leads." },
    { title: "Her", genre: "romance", mood: "emotional", duration: 126, desc: "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need." },
    { title: "Nightcrawler", genre: "thriller", mood: "intense", duration: 117, desc: "When Louis Bloom, a con man desperate for work, muscles into the world of L.A. crime journalism, he blurs the line between observer and participant." },
    { title: "Zombieland", genre: "comedy", mood: "exciting", duration: 88, desc: "A shy student trying to reach his family in Ohio, a gun-toting bruiser in search of the last Twinkie, and a pair of sisters join forces." },
    { title: "Sicario", genre: "action", mood: "intense", duration: 121, desc: "An idealistic FBI agent is enlisted by a government task force to aid in the escalating war against drugs at the border area." },
    { title: "Ex Machina", genre: "sci-fi", mood: "mysterious", duration: 108, desc: "A programmer at a huge Internet company is chosen to participate in a groundbreaking experiment in synthetic intelligence." },
    { title: "Drive", genre: "action", mood: "chill", duration: 100, desc: "A mysterious Hollywood stuntman and garage mechanic moonlights as a getaway driver and finds himself in trouble when he helps his neighbor." },
    { title: "The Conjuring", genre: "horror", mood: "intense", duration: 112, desc: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse." },
    { title: "Amélie", genre: "romance", mood: "chill", duration: 122, desc: "Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love." },
    { title: "The Truman Show", genre: "drama", mood: "emotional", duration: 103, desc: "An insurance salesman discovers his whole life is actually a reality TV show." },
    { title: "Ford v Ferrari", genre: "action", mood: "exciting", duration: 152, desc: "American car designer Carroll Shelby and driver Ken Miles battle corporate interference and the laws of physics to build a revolutionary race car." },
    { title: "Logan", genre: "action", mood: "emotional", duration: 137, desc: "In a future where mutants are nearly extinct, an elderly and weary Logan leads a quiet life until a young mutant arrives seeking refuge." },
    { title: "1917", genre: "drama", mood: "intense", duration: 119, desc: "April 6, 1917. As a regiment assembles to plunge deep into enemy territory, two soldiers are assigned to race against time and deliver a message." },
    { title: "Spider-Man: Into the Spider-Verse", genre: "sci-fi", mood: "exciting", duration: 117, desc: "Teen Miles Morales becomes the Spider-Man of his universe and must join with five spider-powered individuals from other dimensions to stop a threat." },
    { title: "Gone Girl", genre: "mystery", mood: "intense", duration: 149, desc: "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him." },
    { title: "The Irishman", genre: "drama", mood: "chill", duration: 209, desc: "An illustration of organized crime in post-war America, told through the eyes of World War II veteran Frank Sheeran, a hustler and hitman." },
    { title: "Django Unchained", genre: "action", mood: "exciting", duration: 165, desc: "With the assistance of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation owner in Mississippi." },
    { title: "Joker", genre: "drama", mood: "intense", duration: 122, desc: "A mentally troubled comedian is mistreated and disregarded by society, embarking on a downward spiral of revolution and bloody crime." },
    { title: "Shaun of the Dead", genre: "horror", mood: "chill", duration: 99, desc: "The uneventful lives of a London electronics salesman and his clueless roommate are disrupted by the zombie apocalypse." },
    { title: "Before Sunrise", genre: "romance", mood: "chill", duration: 105, desc: "A young man and woman meet on a train in Europe, and wind up spending one evening together in Vienna." },
    { title: "The Wolf of Wall Street", genre: "comedy", mood: "exciting", duration: 180, desc: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime and corruption." },
    { title: "No Country for Old Men", genre: "thriller", mood: "intense", duration: 122, desc: "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande." },
    { title: "The Martian", genre: "sci-fi", mood: "chill", duration: 144, desc: "An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth." },
    { title: "Donnie Darko", genre: "sci-fi", mood: "mysterious", duration: 113, desc: "After narrowly escaping a bizarre accident, a troubled teenager is plagued by visions of a man in a large rabbit suit who manipulates him to commit crimes." },
    { title: "The Thing", genre: "horror", mood: "mysterious", duration: 109, desc: "A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims." },
    { title: "The Notebook", genre: "romance", mood: "emotional", duration: 123, desc: "An elderly man reads to a fellow nursing home resident the story of two young lovers whose romance is threatened by their different social classes." },
    { title: "Midsommar", genre: "horror", mood: "intense", duration: 148, desc: "A couple travels to Scandinavia to visit a rural hometown's fabled Swedish midsummer festival, which quickly morphs into an sinister pagan competition." },
    { title: "The Big Short", genre: "comedy", mood: "exciting", duration: 130, desc: "In 2006-2007 a group of investors bet against the US mortgage market, in their research they discover how flawed and corrupt the market is." },
    { title: "Uncut Gems", genre: "thriller", mood: "intense", duration: 135, desc: "A charismatic New York City jeweler always on the lookout for the next upscale high-stakes bet risks everything in pursuit of the windfall of a lifetime." },
    { title: "The Sixth Sense", genre: "mystery", mood: "mysterious", duration: 107, desc: "A frightened, withdrawn Philadelphia boy who communicates with spirits seeks the help of a disheartened child psychologist." },
    { title: "Little Women", genre: "drama", mood: "chill", duration: 135, desc: "Jo March reflects back and forth on her life, telling the beloved story of the March sisters - four young women each determined to live life on their own terms." },
    { title: "Casino Royale", genre: "action", mood: "exciting", duration: 144, desc: "After earning 00 status and a licence to kill, Secret Agent James Bond sets out on his first mission as 007 to defeat a private banker funding terrorists." },
    { title: "Hereditary", genre: "horror", mood: "intense", duration: 127, desc: "A grieving family is haunted by tragic and disturbing occurrences after the death of their secretive grandmother." },
    { title: "500 Days of Summer", genre: "romance", mood: "emotional", duration: 95, desc: "An offbeat romantic comedy about a woman who doesn't believe true love exists, and the young man who falls for her." }
];

const genreSelect = document.getElementById("genreSelect");
const moodSelect = document.getElementById("moodSelect");
const timeSelect = document.getElementById("timeSelect");
const filterBtn = document.getElementById("filterBtn");
const movieGrid = document.getElementById("movieGrid");
const resultsCount = document.getElementById("resultsCount");

function displayMovies(moviesToRender) {
    movieGrid.innerHTML = "";
    
    if (moviesToRender.length === 0) {
        resultsCount.textContent = "No matching movies found. Try loosening your choices!";
        return;
    }
    
    resultsCount.textContent = `Found ${moviesToRender.length} match${moviesToRender.length === 1 ? '' : 'es'} for your choice`;

    moviesToRender.forEach(movie => {
        const hours = Math.floor(movie.duration / 60);
        const minutes = movie.duration % 60;
        const timeString = `${hours}h ${minutes}m`;

        const card = document.createElement("div");
        card.className = "movie-card";
        
        card.innerHTML = `
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <div class="movie-meta">
                    <span class="tag match-spec">${movie.genre.toUpperCase()}</span>
                    <span class="tag match-spec">${movie.mood.toUpperCase()}</span>
                    <span class="tag">${timeString}</span>
                </div>
                <p class="movie-desc">${movie.desc}</p>
            </div>
        `;
        movieGrid.appendChild(card);
    });
}

function filterMovies() {
    const selectedGenre = genreSelect.value;
    const selectedMood = moodSelect.value;
    const selectedTime = timeSelect.value;

    const filtered = movies.filter(movie => {
        const matchesGenre = selectedGenre === "all" || movie.genre === selectedGenre;
        const matchesMood = selectedMood === "all" || movie.mood === selectedMood;
        
        let matchesTime = true;
        if (selectedTime === "90") {
            matchesTime = movie.duration <= 100;
        } else if (selectedTime === "120") {
            matchesTime = movie.duration > 100 && movie.duration <= 135;
        } else if (selectedTime === "180") {
            matchesTime = movie.duration > 135;
        }

        return matchesGenre && matchesMood && matchesTime;
    });

    displayMovies(filtered);
}

filterBtn.addEventListener("click", filterMovies);

displayMovies(movies);
