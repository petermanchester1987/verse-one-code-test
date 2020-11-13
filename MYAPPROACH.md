# My Approach

I have only worked on one React based e-commerce project before, in a project that a coding tutor Basir had done on Youtube so this was a great challenge to try to do as efficiently and cleanly as possible.

I have worked with React and Redux on other projects, but have only had one from scratch online shop build to use as a guide post, so I really enjoyed the test and I'm absolutely loving learning more and more everyday.

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

The listproduct action replaces the useEffect Hook. Then I had to reformat the homescreen to use the redux state.
I used the useDispatch and useReducer hooks to replace the useState component level state.

I then had to do the same on the individual product screen. I made the individual product reducer and action and then brought them into the product screen with useDispatch and useSelector from react-redux.

I had previosly had to use mapStateToProps (and hated it... so much boilerplate...) but had read an article about not having to use it anymore with the new hooks that are available, so tried to implement them. (I am sure I'll find out if it's buggy or not!)

I had also watched a redux tutorial recently that suggested I should seperate my reducers to make it easier to debug later on. So I implemented that into the workflow.

### Cart

I thought I would have to use local storage to keep the data on the page refresh, so I started building the cart out with that in mind.

I realised I had to add a quantity selector for the amount the user would be inputing into their cart.

I could find the value from the keys of the product.countInStock, but it took a little figuring out to find the best way to put that into a drop down option.

I then had to make an add to basket handler function that would change the state as the user entered info.

I was struggling to remember how to redirect a user to the next part of the shopping basket process, but had used 'history' to do it in a previous build, so tried that out.
I got that successfully redirecting and couldnt work out how to be able to go to the shoppng basket without having to have something in it, until I realised I just needed to add a ? to then end of my
Route query string in App.js

I then have to add to cart and make an action and a reducer to do that.

I wasted a good 15 minutes trying to figure out why on earth my basket reducer wasnt working. Turns out I had put the state inside of an object in the reducer.

I was also a little unsure about using Local storage. I had used it on occasion before to store simple info like a users colour scheme preference etc, but had to do some serious research to figure out how that would work with something like global state.
Turns out getState is the best way to do that.

### 6 Hours in

I realised that I had gotten to the 6 hour mark and still hadn't finished the full functionality of the basket, never mind learned about Testing!

I used getState and had to json.stringify the basket to get it into local storage (as I think it can only store strings?!)

So that took a while to sort out properly! But I started successfully storing the data in local storage and getting it into state before page reload useing useEffect.

Then I started working on the layout of the shopping basket and the functionality to increase item amount and the functionality to remove from the cart.

I realised that the brief had said to use an anonymous customer, so I didnt implement a login or anything, but upon clicking go to checkout there would have to be an address screen, to update the customers address, to persist it to the DB and to update the state accordingly.
However, there was no way I would have finished all of this functionality, as I had gotten to 8 hours deep! So I quickly rushed up a placeholder for the shipping information page.

### 8 Hours in!

I had completely overlooked the search aspect of the build. So I thought I should do that at least if I wasnt going to be able to get any tests done in the time allotted.

I then started to build out the searchbox that was going to live inside of the header.
For some reason, I couldnt figure out how to get it working. As it kept saying cannot read property of history undefined. I realised that I had to do something I'd done on a MERN app i'd built and bring in route from react router dom. Then I had to pass in render as a prop to the child component of search box for it to be able to use the history to redirect the user.

I then started to go through the different components to allow for a search term to get to the back end.

I tried to figure out a quick and dirty way of searching for a particular searchterm, whether it was just part of a name of an item, so used stack overflow to figure out perhaps using a regular expression was the best way.

# Extras

I would have loved to have implemented some Tests. I have used Mocha and Chai (after learning about them in Codecademy Pro but am still learning TDD and BDD) but never used Jest, so learning more about TDD would have been extremely useful.

Once again, I was restrained by time, I would have added a loading spinner for use whilst fetching the data, rather than just displaying 'Loading...' text,
but time was against me (to try to keep to around 6 hours).
