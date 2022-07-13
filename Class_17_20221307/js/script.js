//objekta definēšan ar literāļa palīdzību 
const car = {type:"Fiat", model:"500", color:"white"};
car.price = 1000
document.getElementById("demo").innerHTML = "The car type is " + car.type;

//objekta īpašību (property) izgūšana
/*
console.log(car.type);
console.log(car["type"]);
*/
//objekts ar metodi

/*const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
  */

  let user = { name: "" };
  let admin = { name: "" };
  
  function sayHi() {
    alert( this.name );
  }
 document.getElementById("dem_objekts").innerHTML = "Labdien" + this.user;

