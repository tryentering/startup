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
