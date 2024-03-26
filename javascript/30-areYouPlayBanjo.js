/*
Problem :
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:
name + " plays banjo" 
name + " does not play banjo"

Names given are always valid strings.
*/

// First Logic : using if-else condition
// function areYouPlayingBanjo(name) {
//     // Implement me
//     // if (name[0].toLowerCase() === 'r') {
//     if (name[0] === "R" || name[0] === "r") {
//         return `${name} plays banjo`;
//     } else {
//         return `${name} does not play banjo`
//     }
// }

// Second Logic : using if-else ternary condition
// function areYouPlayingBanjo(name) {
//     return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
// }

// Third Logic : using if-else ternary statement variable
// const areYouPlayingBanjo = name => {
// 	const plays = name.toLowerCase().startsWith('r')
// 		? 'plays'
// 		: 'does not play';
// 	return `${name} ${plays} banjo`;
// }

// Fourth Logic : using match() function and RegEx-RegularExpression
// function areYouPlayingBanjo(name) {
//     return name.match(/^r.+/i) ? `${name} plays banjo` : `${name} does not play banjo`;
//     // Also you can use this one using test() function
//     // return name + (/^r/i.test(name) ? " plays " : " does not play ") + "banjo";
// }

// Fifth Logic : using combination many function
function areYouPlayingBanjo(n)
{ 
  // Imaginate a new Person
  var theCandidate = new Person(n);
  
  // Invoke the power of Instrumentology
  var theRitual = new Instrumentology();
  theRitual.beginAudit(theCandidate);
  
  // See if the Person now plays the banjo
  return theCandidate.queryInstrument("banjo");
}


function Person(name) {
  this.name = name;
  this.instrumentsPlayed = [];
}

Person.prototype.getFirstLetterOfName = function() {
  if(this.name.length > 0) {
    var firstLetter = this.name.substr(0,1);
    firstLetter = firstLetter.toLowerCase();
    return firstLetter;
  } else {
    return false;
  }
}

Person.prototype.getName = function() {
  return this.name;
}

Person.prototype.queryInstrument = function(instrument) {
  for(var i = 0; i < this.instrumentsPlayed.length; i++) {
    if(instrument == this.instrumentsPlayed[i].getName()) 
      return this.getName() + " plays " + instrument;
  }
  return this.getName() + " does not play " + instrument;
}

Person.prototype.learnInstrument = function(instrument) {
  if(instrument instanceof Instrument) {
    this.instrumentsPlayed.push(instrument);
  }
}

function Instrumentology() {
  this.theBookOfInstrumentology = [
    { letter: "a", instrument: new Instrument("flute") },
    { letter: "b", instrument: new Instrument("guitar") },
    { letter: "c", instrument: new Instrument("bongos") },
    { letter: "r", instrument: new Instrument("banjo") },
    { letter: "s", instrument: new Instrument("tambourine") },
    { letter: "z", instrument: new Instrument("triangle") }];
}


Instrumentology.prototype.beginAudit = function(person) {
  person.learnInstrument(this.consultTheSacredTexts(person.getFirstLetterOfName()));
}

Instrumentology.prototype.consultTheSacredTexts = function(telemetry) {
  for(var i = 0; i < this.theBookOfInstrumentology.length; i++) {
    if(this.theBookOfInstrumentology[i].letter == telemetry) {
      return this.theBookOfInstrumentology[i].instrument;
    }
  }
}


function Instrument(name) {
  this.name = name;
}

Instrument.prototype.getName = function() {
  return this.name;
}

console.log(areYouPlayingBanjo("Adam"))
console.log(areYouPlayingBanjo("Paul"))
console.log(areYouPlayingBanjo("Ringo"))
console.log(areYouPlayingBanjo("bravo"))
console.log(areYouPlayingBanjo("rolf"))