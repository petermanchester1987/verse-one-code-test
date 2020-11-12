# My Approach

I have only worked on one React based e-commerce project before, so this was a
great challenge to try to do as efficiently and cleanly as possible.

## My objectives were:

-Implementing a RESTful API
-Creating an easily interactable Front end GUI with good UI/UX
-Work on Tests as much as I could (as I have very little experience with testing)

### I decided to build out the front end first.

I created a little javascript file with an array of product data that I could use to at least see my UI/UX in action whilst building it.

I considered writing some SCSS for the project, but as the project was not meant to take too long, I decided to use react-bootstrap instead (that way I could spend more time on the API and the testing).

I also realised that I could spend hours deliberating over so many elements of bootstrap customisation, so I decided to import a bootswatch theme (as I have for a couple of projects before) subsquently reducing my need for customisation on the UI to a much smaller amount. As well as that, a use of the CDN of fontawesomes icon library saved a lot of time I could have wasted sizing icons and making/putting in svgs.

Firstly I built out the components that would be repeated in the App, Navbar Header and Footer.

I decided to use as up to date syntax as possible, using functional components and ES6.

I did think I would build a home screen, but as you didn't want us to get a user to have to sign in, I thought there would be no point.
So the home page became the main products page.

I then started to build out the different components that would render on each item in the array that I was mapping through for the products.

I wrote in a reviews section, but decided that icons were much better so used a snippet I had used in another project to show stars depending on the value pass in as props.

I then brought in react router dom to use the BrowserRouter component and had read about react-bootstrap-router, so brought that in as I thought I could try that out in the nav.

The Homescreen component was simple, just mapping through the different products and displaying the child componenst I would build inside of it.

I made a Product component using bootstrap cards that would render the different values that were passed in as product props from it's parent component, Homescreen.The product component had the Rating component as a child inside of that.

Then I started on the individual Product page when the user clicked on the product itself.

I thought I would use hooks first and put the info into component level state and then afterwards to add redux (to show you that I know how to use it).

I brought in useState and useEffect.

I know you cant use an async function inside a use effect hook, but I wanted to
use async await, rather than .then.then.then.then and have nested callback hell, so I had to define the function inside of useEffect.

The Homescreen useEffect was used to make a simple call using axios for the http fetch request and then to update the state using the setState part of the useState hook.

I did the same for the individual Product page.

### Backend

I then installed Concurrently and Nodemon because I didnt want to keep having to restart the node server and client seperately and wrote a script in the package.json file that would run the two servers using concurrently.

I realised that you probably would want to see how I would do it if it were a real API call, so I brought in dotenv, to use environment variables (to hide any sensitive API information that I might have). Obviously I wont be needing API keys or client secrets etc but this is what I would do in that case. The environment variables would then be stored in that file on the backend and it would be put in .gitignore to avoid it being shared.

I know that now you are able to use the newer ES6 import syntax in Nodejs versions 14.something and higher. However, to show you that I can use common JS (not just the new stuff) I will leave the server as it is with modules et all.

I would normally at this point try to do some database work, and get that connected to the server. I have only ever used postman to do practise different routes, but am keen to learn more.

### Error handling

I realised I should probably simulate some kind of server error handling. So I made some custom middleware to simulate an error handler. Obviously this isn't necessary in this scenario, but would be useful in a real database situation I believe.

### API Routing

I was also aware that my server.js file was getting a little large and unwieldy, so I decided to do what would be good practise to do in a real build situation and
put my api routes into a separate routes folder in the backend.

This in turn broke the server, so I had to rebuild it and decided to put in the notes about what I would do if it was a real async call to a database.

### Redux

So I would expect you can see I use hooks and component level state at this point, so I thought I should implement Redux into the project so that you could see that I could use it and global state (which is essential for larger projects with huge state).

Our products should really be in global state so that many components can access it easily.

I imported redux, react-redux (so that i can easily use redux in react), redux thunk (so that I can make asynchronous calls from the action creators) and redux devtools extension that makes the devtools easier to use.

I then had to make a global redux store and had to bring in a Provider to surround the whole app with the state.
