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
