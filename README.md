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
  To add with Java script:
    Correctly display opponent's names in the lobby
    onclick for the cards that are in the player's hand
    Inability to make it to the lobby without creating a room or joining a room
    Figure out what to do with number of players (can you only play with four, if less than four does that reflect in the game room)
    Disable playing cards/ dropping out of the bid based on the phase of the game.
    Enable/disable clicking on opponents cards based on Phase of the game AND status of the player (i.e. did they win the bid).
    Update win count for logged in players.
    Correct number and type of cards displayed for user
    Flower count when in followthrough phase that everyone can see
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
const func = (a) => {
  console.log(a);
}
const func = (a) => conosle.log(a);
const func = a => console.log(a);

JS arrays:
arr = [obj, "1", [], func];
//look up methods as you need them
