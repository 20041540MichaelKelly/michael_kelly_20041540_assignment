# Assignment - ReactJS app.

Name: Michael Kelly your name 20041540

## Overview.

...... State the app concept and objectives. If it's the Movies Fan app extension, only state the additional objectives .........

The additional objectives for the Movies App I eloberated on. Is to implement the tv show section
that will have a watch list feature, The movie list has the favourites feature. The the user will be able to filter tv shows etc. Also I have implemented a login system, that uses FireBase authenthication and Database. Also a popular people section where the user can see there images and then click into view there biography. Also it displays their birthdays and all the movies that they have appeared in. I am going for full storybook support also, so overall i am attempting to tick the box's required.


...... A bullet-point list of user features. If it's the Movies Fan app extension, only list new/modified features...... 
 
 + Tv Show list
 + Tv Show Watchlist
 + Tv Show Reviews
 + Tv Show Details
 + Login
 + Sign Up
 + Sign Out
 + FireBase
 + More StoryBook Support
 + Original component and page designs



## Setup requirements.

...... A brief explanation (to a third party) of any non-standard setup steps necessary to run your app/client locally (after cloning the repo) ........
The setup require ments for third party Database and authentication React FireBase, 
follow these steps:
1. Create an account in Firebase
2. Then you can create project.
3. From their you will be giving credientials.
4. create a file called test-credientials.js
5. enter the credientials you copied form FireBase.
6. The firebase should be then imported in the component your using it in.

## API Data Model.

..... [For non-Movies Fan app] Insert a diagram of the API's data model (see example below) AND/OR a sample(s) of the JSON documents returned by its endpoints ........

![][model]

......[For the Movies Fan app] Specify the additional TMDB endpoints used and show sample responses, in JSON .........
Kids Movies:
https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&certification_country=US&certification=PG&sort_by=popularity.desc

{
    "page": 1,
    "results": [
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                18
            ],
            "id": 569420,
            "original_language": "en",
            "original_title": "A Christian Carol",
            "overview": "A modern \"Christmas Carol\" from a Christian perspective, with a Dickensian twist.",
            "popularity": 0.6,
            "poster_path": "/fHApq7q4og21Iu0yBlwPm9shWj9.jpg",
            "release_date": "2015-11-01",
            "title": "A Christian Carol",
            "video": false,
            "vote_average": 0,
            "vote_count": 0
        },
        {
            "adult": false,
            "backdrop_path": "/1Shfc1ceGtqQnnZzUoL8QZlZ13r.jpg",
            "genre_ids": [
                28,
                35,
                10751,
                878
            ],
            "id": 11504,
            "original_language": "en",
            "original_title": "Suburban Commando",
            "overview": "Shep Ramsey is an interstellar hero, righting wrongs, etc. His ship is damaged after a fight with an interstellar nasty and he must hide out on Earth until it can recharge. He leaves his power suit at home, but still finds himself unable to allow wrongs to go unrighted and so mixes it up with bad drivers, offensive paperboys, muggers and the like.",
            "popularity": 6.148,
            "poster_path": "/hXAIGWdfxCQ1d5XFGcwudNdgagN.jpg",
            "release_date": "1991-10-04",
            "title": "Suburban Commando",
            "video": false,
            "vote_average": 4.8,
            "vote_count": 118
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                35
            ],
            "id": 11505,
            "original_language": "en",
            "original_title": "Family Plan",
            "overview": "A bumbling guy takes a group of orphans to summer camp.",
            "popularity": 1.936,
            "poster_path": "/8LqxB63wHTO45A9fr1ULtDSuwX1.jpg",
            "release_date": "1997-01-01",
            "title": "Family Plan",
            "video": false,
            "vote_average": 5.4,
            "vote_count": 17
        },
        {
            "adult": false,
            "backdrop_path": "/hz95xUI0MhXTpRGjfnT0HkDijtV.jpg",
            "genre_ids": [
                10751,
                35,
                14,
                53,
                10770
            ],
            "id": 11508,
            "original_language": "en",
            "original_title": "Addams Family Reunion",
            "overview": "The Addams Family goes on a search for their relatives. Gomez and Morticia are horrified to discover that Grandpa and Grandma Addams have a disease that is slowly turning them \"normal\". The only chance they have of a cure is to find a family member hoping that they know a home remedy.",
            "popularity": 17.581,
            "poster_path": "/XtfNBKnLDpg1waJhDF5FAd5OEX.jpg",
            "release_date": "1998-09-22",
            "title": "Addams Family Reunion",
            "video": false,
            "vote_average": 4.6,
            "vote_count": 198
        },
        {
            "adult": false,
            "backdrop_path": "/nrgSMYWAYnEg7fKx9diYS75UGkA.jpg",
            "genre_ids": [
                14,
                35,
                10751
            ],
            "id": 11511,
            "original_language": "en",
            "original_title": "Kazaam",
            "overview": "When Max fools a gang of local toughs, he finds himself in big trouble. Fleeing from the thugs, Max runs into an old warehouse and bumps into a boom box. By doing that, he manages to release Kazaam, a genie who has been held captive for thousands of years.",
            "popularity": 7.743,
            "poster_path": "/k6kXq27UVxf7zGCWSvygYYIp9eP.jpg",
            "release_date": "1996-07-17",
            "title": "Kazaam",
            "video": false,
            "vote_average": 4.3,
            "vote_count": 192
        },
        {
            "adult": false,
            "backdrop_path": "/txBOj9EcbRuc39V44sWGg8c3WRh.jpg",
            "genre_ids": [
                18,
                10749
            ],
            "id": 11518,
            "original_language": "hi",
            "original_title": "मोहब्बतें",
            "overview": "At a prestigious all-male university, three friends seek love outside of the school grounds; at the same time, a newly-hired music teacher seeks to befriend and loosen up the militantly strict headmaster.",
            "popularity": 8.298,
            "poster_path": "/zB7zJQgk4pPoxsPzZP0CqUgHuXN.jpg",
            "release_date": "2000-10-27",
            "title": "Mohabbatein",
            "video": false,
            "vote_average": 7,
            "vote_count": 152
        },
        {
            "adult": false,
            "backdrop_path": "/9Fo9s7BtjczN3hpA8wNaMI98PMo.jpg",
            "genre_ids": [
                28,
                35,
                10752
            ],
            "id": 11519,
            "original_language": "en",
            "original_title": "1941",
            "overview": "In the days after the attack on Pearl Harbor, panic grips California, where a military officer leads a mob chasing a Japanese sub.",
            "popularity": 8.826,
            "poster_path": "/npjGnJFPVNnGv2eH52jwMx4g86O.jpg",
            "release_date": "1979-12-14",
            "title": "1941",
            "video": false,
            "vote_average": 5.9,
            "vote_count": 408
        },
        {
            "adult": false,
            "backdrop_path": "/aVznky4yJGmsSwImYH7MjCXtOcm.jpg",
            "genre_ids": [
                18,
                10751
            ],
            "id": 11521,
            "original_language": "en",
            "original_title": "Little Man Tate",
            "overview": "Dede is a sole parent trying to bring up her son Fred. When it is discovered that Fred is a genius, she is determined to ensure that Fred has all the opportunities that he needs, and that he is not taken advantage of by people who forget that his extremely powerful intellect is harboured in the body and emotions of a child.",
            "popularity": 6.412,
            "poster_path": "/bVj97TGirraAQFsefm7Ss5cVuXW.jpg",
            "release_date": "1991-09-06",
            "title": "Little Man Tate",
            "video": false,
            "vote_average": 6.4,
            "vote_count": 174
        },
        {
            "adult": false,
            "backdrop_path": "/m0p2zjOjCZxMzyuKnWEyYvQqvb5.jpg",
            "genre_ids": [
                10751,
                35
            ],
            "id": 11528,
            "original_language": "en",
            "original_title": "The Sandlot",
            "overview": "During a summer of friendship and adventure, one boy becomes a part of the gang, nine boys become a team and their leader becomes a legend by confronting the terrifying mystery beyond the right field wall.",
            "popularity": 17.766,
            "poster_path": "/7PYqz0viEuW8qTvuGinUMjDWMnj.jpg",
            "release_date": "1993-04-07",
            "title": "The Sandlot",
            "video": false,
            "vote_average": 7.5,
            "vote_count": 790
        },
        {
            "adult": false,
            "backdrop_path": "/l4AQWbf41kb13gaXRx1pYHMVjTl.jpg",
            "genre_ids": [
                28,
                35
            ],
            "id": 11537,
            "original_language": "cn",
            "original_title": "蛇形刁手",
            "overview": "Everyone abuses and humiliates a downtrodden orphan (Chan) until he befriends an old man, who turns out to be the last master of the \"snake fist\" fighting style. Jackie becomes the old man's student and finds himself in battle with the master of the \"eagle's claw\" style, who has vowed to destroy the snake fist clan.",
            "popularity": 12.459,
            "poster_path": "/7NhjRt8IgQVKw2FgBP1MzzSu5Qv.jpg",
            "release_date": "1978-03-01",
            "title": "Snake in the Eagle's Shadow",
            "video": false,
            "vote_average": 7.3,
            "vote_count": 215
        },
        {
            "adult": false,
            "backdrop_path": "/hNAmYyBi33qAQkgOoxphdxyWQgU.jpg",
            "genre_ids": [
                10752,
                18,
                10749
            ],
            "id": 11541,
            "original_language": "en",
            "original_title": "The Year of Living Dangerously",
            "overview": "Australian journalist Guy Hamilton travels to Indonesia to cover civil strife in 1965. There—on the eve of an attempted coup—he befriends a Chinese Australian photographer with a deep connection to and vast knowledge of the Indonesian people, and also falls in love with a British national.",
            "popularity": 6.358,
            "poster_path": "/9Nxy4ZGOq43rXqyMXIft1ruemN3.jpg",
            "release_date": "1982-12-17",
            "title": "The Year of Living Dangerously",
            "video": false,
            "vote_average": 6.8,
            "vote_count": 206
        },
        {
            "adult": false,
            "backdrop_path": "/AcxbOWUbwtIEDisfuhNGHQNfnMK.jpg",
            "genre_ids": [
                16,
                10751
            ],
            "id": 11544,
            "original_language": "en",
            "original_title": "Lilo & Stitch",
            "overview": "As Stitch, a runaway genetic experiment from a faraway planet, wreaks havoc on the Hawaiian Islands, he becomes the mischievous adopted alien \"puppy\" of an independent little girl named Lilo and learns about loyalty, friendship, and 'ohana, the Hawaiian tradition of family.",
            "popularity": 73.31,
            "poster_path": "/d73UqZWyw3MUMpeaFcENgLZ2kWS.jpg",
            "release_date": "2002-06-21",
            "title": "Lilo & Stitch",
            "video": false,
            "vote_average": 7.5,
            "vote_count": 4622
        },
        {
            "adult": false,
            "backdrop_path": "/Y8b33EkncHL9mLRVvSPSB2SQol.jpg",
            "genre_ids": [
                35,
                80
            ],
            "id": 11546,
            "original_language": "en",
            "original_title": "Police Academy: Mission to Moscow",
            "overview": "The Russians seek help in dealing with the Mafia from the veterans of the Police Academy. They head off to Moscow, in order to find evidence against Konstantin Konali, who marketed a computer game that everyone in the world is playing.",
            "popularity": 10.875,
            "poster_path": "/3517XQ9LpoEykyYq2TuDNS45MPP.jpg",
            "release_date": "1994-06-09",
            "title": "Police Academy: Mission to Moscow",
            "video": false,
            "vote_average": 4.5,
            "vote_count": 581
        },
        {
            "adult": false,
            "backdrop_path": "/b7HsWYjyrVkDPkAFFAGZ76iainK.jpg",
            "genre_ids": [
                878,
                35,
                10751,
                14
            ],
            "id": 11548,
            "original_language": "en",
            "original_title": "*batteries not included",
            "overview": "In a soon to be demolished block of apartments, the residents resist the criminal methods used to force them to leave so a greedy tycoon can build his new skyscraper. When tiny mechanical aliens land for a recharge, they decide to stay and help out.",
            "popularity": 11.271,
            "poster_path": "/9d7SG5NIFWHQ08TaPAneTbSWAV4.jpg",
            "release_date": "1987-12-18",
            "title": "*batteries not included",
            "video": false,
            "vote_average": 6.7,
            "vote_count": 500
        },
        {
            "adult": false,
            "backdrop_path": "/yLEvFfGVXsStEkNQwi9OxAcCDaa.jpg",
            "genre_ids": [
                35,
                80,
                10749,
                53
            ],
            "id": 11558,
            "original_language": "en",
            "original_title": "Silver Streak",
            "overview": "A somewhat daffy book editor on a rail trip from Los Angeles to Chicago thinks that he sees a murdered man thrown from the train. When he can find no one who will believe him, he starts doing some investigating of his own. But all that accomplishes is to get the killer after him.",
            "popularity": 7.59,
            "poster_path": "/fNOh3ljmTonQ9kuICJhp02bXGDg.jpg",
            "release_date": "1976-12-03",
            "title": "Silver Streak",
            "video": false,
            "vote_average": 6.7,
            "vote_count": 209
        },
        {
            "adult": false,
            "backdrop_path": "/r7cB6j3eawzU4OiKOj8Ap54BSnD.jpg",
            "genre_ids": [
                35,
                10749,
                878
            ],
            "id": 11561,
            "original_language": "en",
            "original_title": "Sleeper",
            "overview": "Miles Monroe, a clarinet-playing health food store proprietor, is revived out of cryostasis 200 years into a future world in order to help rebels fight an oppressive government regime.",
            "popularity": 7.671,
            "poster_path": "/YTYSziZZP5aXt5CDvdEMwKDzme.jpg",
            "release_date": "1973-12-17",
            "title": "Sleeper",
            "video": false,
            "vote_average": 7,
            "vote_count": 562
        },
        {
            "adult": false,
            "backdrop_path": "/hxQch7RR2nheUqIGjgUvB1onYN6.jpg",
            "genre_ids": [
                53,
                12,
                18,
                80
            ],
            "id": 11583,
            "original_language": "en",
            "original_title": "The First Great Train Robbery",
            "overview": "In Victorian England, a master criminal makes elaborate plans to steal a shipment of gold from a moving train.",
            "popularity": 9.101,
            "poster_path": "/56vLMA3Ab4TdclYnFrLTfrbg2ne.jpg",
            "release_date": "1978-12-14",
            "title": "The First Great Train Robbery",
            "video": false,
            "vote_average": 6.7,
            "vote_count": 235
        },
        {
            "adult": false,
            "backdrop_path": "/7Kl87i5C2KUBJH9fUyWOFJu0uFE.jpg",
            "genre_ids": [
                35,
                10749
            ],
            "id": 11584,
            "original_language": "en",
            "original_title": "Roxanne",
            "overview": "Based on the play 'Cyrano de Bergerac', large-nosed C.D. Bales falls for the beautiful Roxanne—while she falls for his personality but another man's looks.",
            "popularity": 8.498,
            "poster_path": "/c2XSGkpAIIof6Oi8Sr6wBvwt1Lk.jpg",
            "release_date": "1987-06-19",
            "title": "Roxanne",
            "video": false,
            "vote_average": 6.4,
            "vote_count": 442
        },
        {
            "adult": false,
            "backdrop_path": "/js7WdYkmPDx8zHX0pgzhNuOTk77.jpg",
            "genre_ids": [
                12,
                35,
                10752
            ],
            "id": 11589,
            "original_language": "en",
            "original_title": "Kelly's Heroes",
            "overview": "A misfit group of World War II American soldiers goes AWOL to rob a bank behind German lines.",
            "popularity": 13.836,
            "poster_path": "/uN77OdpoRpScNYHhIooHEPNoIP3.jpg",
            "release_date": "1970-06-22",
            "title": "Kelly's Heroes",
            "video": false,
            "vote_average": 7.4,
            "vote_count": 483
        },
        {
            "adult": false,
            "backdrop_path": "/r05P0mSFNKIZE7JMMDSxiHPcwAG.jpg",
            "genre_ids": [
                18,
                36
            ],
            "id": 11594,
            "original_language": "fr",
            "original_title": "Notre-Dame de Paris",
            "overview": "Paris, 1482. Today is the festival of the fools, taking place like each year in the square outside Cathedral Notre Dame. Among jugglers and other entertainers, Esmeralda, a sensuous gypsy, performs a bewitching dance in front of delighted spectators. From up in a tower of the cathedral, Frollo, an alchemist, gazes at her lustfully. Later in the night, Frollo orders Quasimodo, the deformed bell ringer and his faithful servant, to kidnap Esmeralda. But when the ugly freak comes close to her is touched by the young woman's beauty...",
            "popularity": 9.443,
            "poster_path": "/bjH6kuTELmGV4S7Ddh3PzlmjShz.jpg",
            "release_date": "1956-12-19",
            "title": "The Hunchback of Notre Dame",
            "video": false,
            "vote_average": 6.5,
            "vote_count": 65
        }
    ],
    "total_pages": 290,
    "total_results": 5786
}

getTvShows:
https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}
{
    "backdrop_path": "/tmTqDRHs3oXdAQApF8G2D3q5GFx.jpg",
    "created_by": [
        {
            "id": 57447,
            "credit_id": "52577083760ee36aaa47992c",
            "name": "Christopher Crowe",
            "gender": 2,
            "profile_path": null
        }
    ],
    "episode_run_time": [
        45,
        60
    ],
    "first_air_date": "1998-10-07",
    "genres": [
        {
            "id": 10765,
            "name": "Sci-Fi & Fantasy"
        },
        {
            "id": 18,
            "name": "Drama"
        }
    ],
    "homepage": "",
    "id": 4562,
    "in_production": false,
    "languages": [
        "en"
    ],
    "last_air_date": "2001-05-29",
    "last_episode_to_air": {
        "air_date": "2001-05-29",
        "episode_number": 22,
        "id": 326838,
        "name": "Live: From Death Row",
        "overview": "Parker causes the delay of an important Backstep mission to go to New Orleans to prove the innocence of an old friend scheduled for execution for a murder he didn't commit.",
        "production_code": "",
        "season_number": 3,
        "still_path": null,
        "vote_average": 0.0,
        "vote_count": 0
    },
    "name": "Seven Days",
    "next_episode_to_air": null,
    "networks": [
        {
            "name": "UPN",
            "id": 40,
            "logo_path": "/333LtWX9Z7H9uRrNcCl1JcTvdpR.png",
            "origin_country": "US"
        }
    ],
    "number_of_episodes": 66,
    "number_of_seasons": 3,
    "origin_country": [
        "US",
        "CA"
    ],
    "original_language": "en",
    "original_name": "Seven Days",
    "overview": "\"Ever wish you could live your last week all over again? Well, my name's Frank B. Parker, and I do it all the time. I work for a secret government project experimenting in time travel. When things really get screwed up, I'm the guinea pig they send back to take care of it. The catch is, I can only go back 7 days.\"",
    "popularity": 17.566,
    "poster_path": "/tDE6WMNv7CujLs5o6UALrPC58HR.jpg",
    "production_companies": [],
    "production_countries": [],
    "seasons": [
        {
            "air_date": "1998-10-07",
            "episode_count": 21,
            "id": 13798,
            "name": "Season 1",
            "overview": "",
            "poster_path": null,
            "season_number": 1
        },
        {
            "air_date": "1999-09-29",
            "episode_count": 23,
            "id": 13799,
            "name": "Season 2",
            "overview": "",
            "poster_path": null,
            "season_number": 2
        },
        {
            "air_date": "2000-10-11",
            "episode_count": 22,
            "id": 13800,
            "name": "Season 3",
            "overview": "",
            "poster_path": null,
            "season_number": 3
        }
    ],
    "spoken_languages": [
        {
            "english_name": "English",
            "iso_639_1": "en",
            "name": "English"
        }
    ],
    "status": "Ended",
    "tagline": "",
    "type": "Scripted",
    "vote_average": 7.2,
    "vote_count": 37
}

## App Design.

### Component catalogue.

....... Insert a screenshot from the Storybook UI showing your component catalogue. [For the Movies app, hi-light stories relating to new/modified components - see the example screenshot below] .......

![][stories]

### UI Design.

...... Insert screenshots of the app's views, with appropriate captions (see example below). (For the Movies Fan App, only show the new/modified views) ........

![][view]
>Shows detailed information on a movie. Clicking the 'Reviews' floating action button will display extracts from critic reviews.

### Routing.

...... Insert a list of the routes supported by your app and state the associated view. If relevant, specify which of the routes require authentication, i.e. protected/private. [For the Movies Fan app, only new routes should be listed.] ......... 

+ GET /blogs - displays all published blogs.
+ POST /blogs (protected) - add a new blog.
+ GET /blogs/:id - displays a particular blog.
+ GET /blogs/:id/comments (protected) - detail view of a particular blog and its comments.
+ etc.
+ etc.

## Independent learning (If relevant).

....... Briefly state any technologies/techniques used in your project codebase that was not covered in the lectures/labs. Provide source code filename (source code excerpts are not required in most cases) references to support your assertions and include references (articles/blogs) ......... 


[model]: ./data.jpg
[view]: ./view.png
[stories]: ./storybook.png