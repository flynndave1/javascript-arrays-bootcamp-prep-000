
var chocolateBars = ["snickers" , "hundred grand" , "kitkat" , "skittles"];
var superheroines = ["catwoman", "she-hulk", "mystique"];
var cities = ["New York", "San Francisco"];
var temp = [];
var temp1 = []
 

superheroines =  superheroines.push("wonder woman");
cities = cities.unshift("Philadelphia");
/* ["Houston", ... cities];
cities = [... cities, "Austin"];*/
 
 console.log(cities[2]);
 
 function addElementToBeginningOfArray(array, element) {
      temp1 = array
      array[0]  = element
      temp1[0]  = element
      return temp1
 } 
 temp = addElementToBeginningOfArray(cities , "Chicago")
 
 function destructivelyAddElelementToBeginningOfArray(array, element){
      return array.unshift(element);
    }
cities =    destructivelyAddElelementToBeginningOfArray(cities , "St. Louis")
    
function addElementToEndOfArray(array, element) {
    array =  array.push(element)
    return array
  }
 cities =  addElementToEndOfArray(cities, "New Orleans")
  
function  destructivelyAddElementToEndOfArray(array, element) {
   array =  array
 return array
  }
 cities =  addElementToEndOfArray(cities, "Dallas")
  
  
  function accessElementInArray(array, number)  {
    city = array[number]
    return city
  }
  console.log(accessElementInArray(3))
  
  
  function destructivelyRemoveElementFromBeginningOfArray (array)  {
    array.shift()
    
    return array
  }
  
  
   function removeElementFromBeginningOfArray (array)  {
          array.slice(1)
          return array
  }
    cities = removeElementFromBeginningOfArray(cities)
  
  
    function destructivelyRemoveElementFromEndOfArray  (array)  {
     array.pop();
         return array;
  }
    destructivelyRemoveElementFromEndOfArray(cities())
  
  
  function removeElementFromEndOfArray (array)  {
    temp1 = array
     temp1 = temp1.pop()
    return temp1;
  }
removeElementFromEndOfArray(cities)
 destructivelyRemoveElementFromEndOfArray(chocolateBars) 
  
  
  
  
  
  
  
  