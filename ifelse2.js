//if else

var name
var voca



if (name == '' && voca == ''){
  console.log('Submit Name and Vocation.');
} else if (typeof name == 'string' && voca == ''){
  console.log('Welcome ' + name + ', please select a Vocation');
} else if (typeof name == 'string' && voca == 'a'){
  console.log('Welcome ' + name + ',\nYou\'ve been given the power to destroy.');
} else if (typeof name == 'string' && voca == 'b'){
  console.log('Welcome ' + name + ',\nYou\'ve been given the power to preserve.');
} else if (typeof name == 'string' && voca == 'c'){
  console.log('Welcome ' + name + ',\nYou\'ve been given the power to create.');
} else {
  console.log('The Bhuwana is in the state of chaos,\nPlease initiate Nataraja.');
}
