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