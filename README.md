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
