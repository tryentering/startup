#Everything I did was learning something new as this was the first time I've used github.
Command to ssh into my web server
ssh -i Desktop/CS260/FILENAME ubuntu@18.191.235.242


Startup Deliverable:
[260 Startup Spec.pdf](https://github.com/tryentering/startup/files/10715603/260.Startup.Spec.pdf)

Playing games with family and friends is always a good time. Unfortunately having an enjoyable experience can be tough because of the inconvienence of lugging around the box, lost pieces, set up, and clean up. Sometimes getting all the people you want to play with is plain impossible. Now with the flowerskull website, you can play a fun game without needing to be with the people you are playing with, and without dealing with the inconvience of keeping track of your copy of the game.

Key features

  Secure login over HTTPS
  Total games won displayed
  Ability to create new game rooms or join existing game rooms
  Gameplay displayed in realtime
Simon HTML notes:
  Go live button @bottom right of VS code
  Again, fetch for info, pull to get up to date, commit (-am with message) to save, push to update git hub
  <a href="link.here">Word to have the link</a> for a hyperlink imbedded
  
Startup HTML and CSS Notes:
  To add with Javascript:
    Correctly display opponent's names in the lobby
    onclick for the cards that are in the player's hand.  >
    Inability to make it to the lobby without creating a room or joining a room
    Figure out what to do with number of players (can you only play with four, if less than four does that reflect in the game room).  >
    Disable playing cards/ dropping out of the bid based on the phase of the game.
    Enable/disable clicking on opponents cards based on Phase of the game AND status of the player (i.e. did they win the bid).
    Update win count for logged in players.   
    Correct number and type of cards displayed for user 
    Flower count when in followthrough phase that everyone can see.  >
    Test getting back into a room/game after navigating away from the page
    discarding of card for the rest of the game if you lose a round (maybe) if not, update instructions.
    Another option for that is to have lives, and you are out of the game if you lose all your lives (might be easier then discarding a card).
  

  
  Features to add for quality of life:
    Play around with adding links back to the page in the instructions other than at the end
    Pictures in the instructions
    In followthrough phase, show all players which stack is being choosen for the card, and what it is.
    Or in followthrough phase show all players where the skull came from
    round win count for players
    Show opponent names and cards remaining
    Highlight opponent whose turn it is
    Ability to play the game anonymously (no login, no win count)
    Maybe an animation/video playing on the homepage demonstrating gameplay
    
    
JS classes:
class className {
  this.classObj = val;
  funcName(params) {
  this.memberObject = val;
  }
  constructor(params) {
  this.memberObj = param;l
  }
}
obj = new className(args); //calls the constructor, returns an object of type className

JS Rest and Spread:
  rest in func definition:
  func(arg, ...arg2) { //arg2 will be a list with any remaining parameters
  
  spread in func call:
  func(...[elem, elem]) { //will assign the nth element of the array to the nth arg of func
JS objects:
obj = newObject();
obj.one = "one";
//equivalent to
obj - newObject({one : "one"});
//equivalent to 
obj = {one: "one"};

obj.one === "one"

JS functions:
a = "a"
function func(a){
  console.log(a):
}
const func = function(a) {
   console.log(a);
}
const func = (a) => { // No implied return statement
  console.log(a);
}
const func = (a) => conosle.log(a); //On one line + no curly braces- implied return statement
const func = a => console.log(a);   //same as ^

JS arrays:
arr = [obj, "1", [], func];
//look up methods as you need them

Simon JS Notes:
  Select elements from html with class: document.querySelectorAll(<class>)   returns a node list-can use forEach((el, i) => { /*stuff for each element*/ }
  Select element from html with id: document.querySelector('#score')   returns an element. can use .textContent to change the text content
  
  localStorage.setItem(<string key>, <value>);   store an item
  localStorage.getItem(<string key>);   returns a JSON object. Can use JSON.parse to convert into an array
  
  document.createElement(<class>);
  elem.appendChild(<elem>);
  '<tr><td colSpan = 4> no scores yet </td></tr>'    literal HTML. creates a table row with one data cell spanning four columns with the text no scores yet
  
  sound = new Audio('anything needed for the root path/' + fileName);  
  sound.onended = resolve;   will play the sound
  
  
  
Notes for Midterm:
  
  Website Stuff:
    Web Service Gateways (reverse proxy) are web services that listens on port 443 and maps requests to the correrct port
    Caddy is handling the gateway stuff. (creation and rotation of web certificates)
  div = division element
  DNS = domain name system
  To point to another dns record use a CNAME dns record type. Alias for another record.
  To point to a literal ip address use A record type
  
  DNS subdomain ex = cs260.cs.byu.edu
  The whole website. Subdomain is extra stuff out front.
  
  Promise Example:
![Screen Shot 2023-03-08 at 12 34 49 AM](https://user-images.githubusercontent.com/119990541/223650152-d23e38ff-d06d-43dd-bbb0-47ea135959dd.png)
  
  JSON example (need the quotes:
  ![Screen Shot 2023-03-08 at 12 40 47 AM](https://user-images.githubusercontent.com/119990541/223651262-537e20c1-d82c-4f25-bbf9-4056c6418da0.png)
 
  CSS example selector: div.className {
  
  filter filters the values and only keeps the stuff that returns true. This is a regex. elem.match. Rexex starts and ends with /. i After means case insensitive
![Screen Shot 2023-03-08 at 12 44 53 AM](https://user-images.githubusercontent.com/119990541/223652125-9b4476fc-84a6-4011-91b3-137476e2b64f.png)

  CSS box model order of elements:
  Content
  Padding
  Border
  Margin
  
  CSS selector + text stuff
  ![Screen Shot 2023-03-08 at 12 42 18 AM](https://user-images.githubusercontent.com/119990541/223659759-a7710ad6-92cd-4076-8276-f45d6cf59b92.png)  Array.reduce( (a, v) => [a,v].join(":")); //Will take the elements of Array and return them as elem:elem:elem:
  
  reduces down to one value
  
  document.querySelector("tag") will return the first element in the document that matches the tag
  
  link element is to other html stuff. A is for hyperlinks
  ![Screen Shot 2023-03-08 at 1 00 15 AM](https://user-images.githubusercontent.com/119990541/223655210-0fe477a1-2984-41c1-ada3-76ecc06bd617.png)
  
  Map takes an array and maps it to an array of equal size of elements from the callback function provided to it
![Screen Shot 2023-03-08 at 1 01 21 AM](https://user-images.githubusercontent.com/119990541/223655426-f5231c1c-7b85-428d-912c-c09126e423a3.png)
  
  Async/Await ex.   Await means the promise will resolve before executions continues. Just stick async on the front of any function returning a promise (needed to use await, no harm otherwise). Await in front of a function that doesn't return a priomise means that function will be wrapped in a promise when it is returned Without the await, the code would just wait the 10 second time out and the output would be ABD
![Screen Shot 2023-03-08 at 1 05 44 AM](https://user-images.githubusercontent.com/119990541/223656235-bdb4fc13-eabc-453d-9cdc-24c1c4288735.png)

  
  htmlEl.textContent will throw away any children and set text as the one child of that element
  
  Flex example 
  ![Screen Shot 2023-03-08 at 1 13 22 AM](https://user-images.githubusercontent.com/119990541/223657862-5ed050a3-e1d8-44f7-9528-c9f343bcb47e.png)
  
  ls -L means long list. Will output the items with this stuff <img width="678" alt="Screen Shot 2023-03-08 at 8 45 17 PM" src="https://user-images.githubusercontent.com/119990541/223911473-41d3a0ba-7025-4ba9-a036-d4d63c32b4d6.png">
<img width="793" alt="Screen Shot 2023-03-08 at 8 45 27 PM" src="https://user-images.githubusercontent.com/119990541/223911476-baa5a3c7-3fd7-410b-8861-3f7769f8b280.png">
  
  ls -a	Lists all entries in the directory, including the entries that begin with a . (dot).
  
  sudo allows any user in the sudoers file execute a command as an administrator.
  
  ssh opens a connection to a remote server and then the user can run shell commands on that server
  
  curl will make an http request and show the time response

![Screen Shot 2023-03-08 at 1 18 41 AM](https://user-images.githubusercontent.com/119990541/223659555-7abca710-2da5-4c99-85e7-08ce1974cc85.png)
  
  
  Javascript Startup Notes:
    Stuff to implement still:
      using room codes to allow for others to join different lobbys
      Correctly display opponent's names in the lobby.
      Handle when one person runs out of cards.
      Flower count when in followthrough phase that everyone can see.
      maybe different numbers of players
      quality of life-- screenshotsa and other pictures/animations on instructions
      rounds won counter in game
  
    javascript stuff:
      Array.splice(index, number of elements to erase, element to insert)
      HTMLelement.childElementCount
      if a function has async and it doesn't return a promise, the return will be wrapped in a promise anyway (very nice)
      if taking input from a form, do htmlelem.value to get the text input

Notes From Simon Services:
  At a high level, we are changing from having the front end interact with only its local, temporary storage to now it will be using service endpoints. Those endpoints will be called with http in the front end code. Right now the backebnd is in the new index.js which will use filler values and local storage. So no significant change to the UI, but it is prepping for using the server, databases and persistent storage.
  
  
    
  Set up for the endpoints:
    intall express from npm. Inlcude lines: constr express = require('express');, app = express();, app.use(expresss.json());, app.use(express.static('public'));.
    Those lines will tell the code to use express, that files to be seved up should be from the public directory, and that http request objects should be converted to json objects.
   Also, const port = process.argv.length > ? process.argv[2] : 3000; will give a default port of 3000 to the website and allow for command line arguments to override that.
   
   Structure for the endpoints:
    Start with a router object. var apiRouter = express.Router(); will be useful later and set up a nice framework.
    app.use(`/api`, apiRouter); will direct any request objects that start with /api to the router.
    
    Endpoints:
      apiRouter.get/post/delete('/path'/*without the api in the front*/, (req, res) => {
        res.send(scores);
      });
      
      apiRouter.post('/score', (req, res) => {
        scores = updateScores(req.body, scores);
        res.send(scores);
      });
      //will send any unknown requests back to the index.html page.
      app.use((_req, res) => {
       res.sendFile('index.html', { root: 'public' });
      });
      
   How to Use the endpoints:
      For the post method above:
        try {
           const response = await fetch('/api/score', { //this is the beginning of the http request object
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newScore),
          });

          // Store what the service gave us as the high scores in case of network failure
          const scores = await response.json();
          localStorage.setItem('scores', JSON.stringify(scores));
        } catch {
          // If there was an error then just track scores locally
          this.updateScoresLocal(newScore);
        }
     For a get method:
        try {
          // Get the latest high scores from the service
          const response = await fetch('/api/scores');
          scores = await response.json();

          // Save the scores in case we go offline in the future
          localStorage.setItem('scores', JSON.stringify(scores));
        } catch {
          // If there was an error then just use the last saved scores
          const scoresText = localStorage.getItem('scores');
          if (scoresText) {
            scores = JSON.parse(scoresText);
          }
      See the about.js file for examples of using third-party endpoints

Notes from Simon DB:
   Difference from Simon services is that now the http requests will result in the backend getting/posting info from mongo db. Changes include:
      A new batabase fjs file to be included on the backend to handle the requests. Good form is one service endpoint per request, one function in the database per service, and each function in the database does not interact with anything on the front end.
      To access the mongodb, install the mongodb node package, have the line const {MongoClient} = require('mongodb');  Get the info to use the mongodb server (username, password, hostname) from environment variables. Then make a variable client: const client = new MongoClient(url);  Use the client to access the correct database and collection from the cluster: const scoreCollection = client.db('simon').collection('score');  
      on scoreCollection, functions such as: insertOne and find can be used. For get methods, inputs for query and options are used. See code for examples. The return fron get requests can be put into a js array using .toArray()
   While the information should be taken from the db, it can be placed in local storage for access if there is an issue with the network that prevents accessing the db in the future.

Notes from Simon Login:
  Now we will create a bit of security by wrapping the original router in a router that will create users, login users, and logout users. For kicks it also has the email method. This unsecure router will use the first router, meaning that all calls will pass through the first router. 
  First thing the secure router does is:
  secureApiRouter.use(async (req, res, next) => {
  authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});
This function will continue to call service endpoints if the user is authorized and return an error if not.

TODO: Look more into how cookies are stored (specifically in local storage, in the request/result objects in the service enpoints (is there a section in http for them?

The way the user is authenticated is by way of hashing their password through bcrypt. The database will generate an authtoken through uuid which will be used to authenticate. The token is deleted when the user logs out. 
When the user logs in, their password will be hashed in the same way as it origionally was, and then the two hashed strings will be compared to see if the typed password was the same as the stored.
A lot of the code in login is to see if the user was already logged in. While neat, it is not necissary.

The login and create methods on the frontend will take in the user input, and call the corresponding endpoints. The endpoints will use the database class which will use mongodb. All this will return back, and the front end will be notified whether the user has been logged in. If so, they will be taken to the rest of the website. If not, the body of the error message will be displayed.

For startup- login and create in the same way, and store the room codes as well. Figure out when room codes should be deleted, how cards should be stored in the database, and how the bid should be stored.

Notes from Simon Web Sockets:
   Web sockets add peer to peer communication thorugh the server. This uses the websocket class. We will make a websocketserver in the peerproxy class which will be exported to index.js where there will be a peerproxy object created.
  The peerproxy will have methods to initialize the upgrading the http to the websocket, a connection method to add peers (which will also create a method to send messages to all the open connections), and a method to close connections which will be used by the setinterval function which will check all conections every ten seconds to see if they are still active.
  
  In play.js there is a function configureWebSocket which handles displaying all messages (onopen, onclose, onmessage) by altering play.html. It also has a broadcast event which will send updates to all connections. 
  Broadcast event is used in the save scores method.
  
  TODO: for startup begin with a chat, make sure it works. Then start implementing making rooms, updating the bid, who is allowed to take actions, rounds won, game won, propper icons, and player names.


Notes from simon react:
https://github.com/webprogramming260/.github/blob/main/profile/simon/simon-react/simon-react.md

Steps to convert:
Reorganize code to have directories for react stuff and the web service
Create template React application. Run npx create-react-app template-react. This creates a new directory named template-react that contains the basic configuration and template React application code.
Clean up template code (delete unnecissary stuff and 
Uninstall and NPM packages you won't use (e.g. stats, test)
Delete the unnecessary create-react-app files (e.g. images)
Rename js JSX files have jsx extension
Replace the favicon.ico
Update manifest.json for your project
Clean up the index.html file to have the proper fields
Move the files generated in template-react into the react directory 
Convert to React Bootstrap by installing react-bootstrap and add-- import 'bootstrap/dist/css/bootstrap.min.css'; -- to files using boostrap
Move the header and footer html to the render function of the app. In order for the styling to show up, move the main.css content into a file named app.css and import the CSS file into the app.jsx file. --import `./app.css`--
For every html page make an equivalent react component. They will start off as stubs in you react directory
Create the router to display the different UI components This is done by inserting the react-router-dom package into the project. First, install the package with npm install react-router-dom and then include the router component in the index.jsx and app.jsx files.
Convert the html to React components:
  The basic steps for converting the component include the following.
  Copy the HTML over and put it in the return value of the component.
  The class attribute is renamed to className so that it doesn't conflict with the JavaScript keyword class.
  Delete the header and footer HTML since they are now represented in app.jsx.
  Copy the JavaScript over and turn the functions into inner functions of the React component.
  Create a file for the CSS and use an import statement in the component jsx file.
  Create React state variables for each of the stateful objects in the component.
  Replaced DOM query selectors with React state variables.
  Move state up to parent components as necessary. For example, authentication state, or user name state.
Create child components as necessary. For example, a SimonGame and SimonButton component.
Configure the React debugger HTTP server to listen on port a different port than the Node.js server
To configure the React HTTP debugger to listen on port x when running in our local development environment, we create a file named .env.local in the root of the project, with the text --PORT=x--

Next, we modify the package.json file to include the field "proxy": "http://localhost:y". This tells the React HTTP debugger that if a request is made for a service endpoint, it forwards it to port y, where our Node.js service is listening.
{
  "name": "simon-react",
  // ...
  "proxy": "http://localhost:y"
}

We also need to change the front-end WebSocket initialization found in the gameNotifier.js constructor to explicitly use the service port (x) instead of the React HTTP debugger port (y). To explicitly send webSocket requests to port x we use the dynamically injected process environment variable that is set when webpack creates the application bundle.

let port = window.location.port;
if (process.env.NODE_ENV !== 'production') {
  port = x;
}
Refactor play.jsx into simonGame.jsx, simonButton.jsx, and players.jsx
Refactor components to take advantage of React specific functionality and to create sub-components
Move webSocket code from play.jsx to gameNotifier.js


Notes for Startup Service:
  third party endpoints use fetch just like the locally defined endpoints/
  To debug using service endpoints, you can only access the information on the front end, and web service calls you defined. So no tracking in the database, or on third party endpoints.
  have a router which will take in all http requests (using the express npm package). It will handle login/creation of users, and getting any data from the database.
  The database will use environment variables to access mongo (in this case) and query/modify the contents in the databse.
  Cookies are... confusing. TODO Review these more
  bcrypt can be used to hash a password uniqely so that the user doesn't have their password in the databse or flying around on too many http requests.
  uuid provides unique strings that can be used for authtokens
  make sure to make the databases and collections for the project before accessing them
  query the database with .findOne, .insertOne, .find, etc.
  After the databse is made, use module.exports to make the needed functions callable throughout the project
  Make sure that there are default methods to store database information in local storage in case the network fails or there is some other issue
  Note to future self. Don't have login and create user be the same button, stupid idea
  TODO implement lobbies based on room code, and updates from the game with peers.
  
