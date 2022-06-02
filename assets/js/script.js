let outputs = document.getElementById('outputs')

var red = document.getElementById('red2')
var green = document.getElementById('green2')
var blue = document.getElementById('blue2')

var redrange = document.getElementById('red')
var greenrange = document.getElementById('green')
var bluerange = document.getElementById('blue')

var c = {
  red: 0,
  green: 0,
  blue: 0
}

function colors(E) {
  c[E.target.name] = E.target.value
  outputs.style.backgroundColor =
    'rgb(' + c.red + ',' + c.green + ',' + c.blue + ')'
  document.getElementById('output').innerHTML =
    'rgb(' + c.red + ',' + c.green + ',' + c.blue + ')'

  document.getElementById(E.target.name + '2').value = E.target.value
}

red.addEventListener('change', colors)
green.addEventListener('change', colors)
blue.addEventListener('change', colors)
redrange.addEventListener('change', colors)
greenrange.addEventListener('change', colors)
bluerange.addEventListener('change', colors)
