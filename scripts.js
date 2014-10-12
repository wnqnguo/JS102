//Use this file to implement Part One of your project

var animal = {};
animal.username = "Mini";
animal["tagline"] = "Meow";
var noises = [];
animal["noises"] = noises;
//Use this file to implement Part One of your project


var count = 0;
for(var key in animal) {
  count++;
  if (key == "username") {
     // return is illegal
     console.log("Hi my name is " + animal.username);
  }
  if(key == "tagline"){
    console.log("I like to say " + '"' + animal.tagline + '"');
  }
}

console.log(count);


