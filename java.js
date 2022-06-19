'use strict';
// ЗАДАНИЕ НОМЕР 1
// const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели", "");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцение его????', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцение его????', '');

//       personalMovieDB.movies[a] = b;
//       personalMovieDB.movies[c] = d;

//       console.log(personalMovieDB);
// ЗАДАНИЕ НОМЕР 2
// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
 


// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцение его????', '');

//     if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log("done");
//     } else {
//         console.log("Error");
//         i--;
//     }

// }
// if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30 ) {
//     console.log("Вы киноман");
// } else {
//     console.log("Произошла ошибка");
// }


//       console.log(personalMovieDB);

// ЗАДАНИЕ НОМЕР 3
let numberOfFilms;

function start() {

    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

 


// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцение его????', '');

//     if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log("done");
//     } else {
//         console.log("Error");
//         i--;
//     }  

// }
function remmemberOfFilms(){
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцение его????', '');
    
        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("done");
        } else {
            console.log("Error");
            i--;
        }  
    
    }

}  
remmemberOfFilms();

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30 ) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}


      console.log(personalMovieDB);

function detectPersonalLevl(){
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30 ) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }

}
detectPersonalLevl();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genres = prompt(`Ваш любимый жантр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genres;
    }
}
writeYourGenres();



