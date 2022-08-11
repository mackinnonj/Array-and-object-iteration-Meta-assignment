<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Object oriented program lab</title>
</head>
<body>
<script>

//Task 1 Iterate Over an Array

// use the for....of loop to iterate over the provided array[dairy] and to iterate over an object's own properties.

var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy() {

    for (var dairyProducts of dairy) {
        console.log(dairyProducts)
    }
}
logDairy();

// Task 2 (using the for...of loop.
// console log both the key and the value of each of the bird object's properties.)

// Create a function called `birdCan`, within it, loop over the bird object's properties and console log each one, using the for...of loop.
// Remember, you need to console log both the key and the value of each of the bird object's properties.


const animal = {

    canJump: true
    
    };
    
    const bird = Object.create(animal);
    
    bird.canFly = true;
    
    bird.hasFeathers = true;

    //The above code was given for the exercise

    function birdCan() {
        for( key of Object.keys(bird) ) {
            console.log(key, ": ", bird[key])
        }
    }
    birdCan()

// Task 3 (using for in loop)
//create a function called `animalCan` and within it, loop over all the properties in both the bird object and its prototype - the animal object - using the for...in loop. 


    function animalCan() {
        for(prop in bird) {
            console.log(prop, ": ", bird[prop]);
        }
    };
    animalCan()
</script>
</body>
</html>
