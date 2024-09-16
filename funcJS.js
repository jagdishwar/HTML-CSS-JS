var weather = function(temperature){
  console.log("The temperature outside is", temperature, "degrees fahrenheit.");
  
  if(temperature <= 65) {
    console.log("It's getting cold outside. Better wear a jacket!");
  } else if (temperature > 65 && temperature <= 80){
    console.log("It's pleasant outside!");  
  } else {
    console.log("It's getting hot outside!");
  }
}

weather(90);
