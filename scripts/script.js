$(function() {
  console.log("ready!");


  $("#enterbtn").click(function () {
  
      
      //get name
      let userName = $("#userName").val();

      //get fact
      const factual = ["smart", "kind", "strange", "funny", "cool", "likeable", "loving", "caring", "nice", "sweet"];
      let num = Math.random() * 10;
      let fact = factual.at(num);

      //number of letters
      let numberLetter = userName.length;

      //display greeting to them
      $("#userGreeting").text("Hey, " + userName +"!") 

      //share cool facts
      $("#coolFacts").text("Your name has " + numberLetter + " letters in it. Because of that, you are typically a " + fact + " person. Now, hit the Spirit Animal Button to find out your spirit animal!")
  
  });

  $("#figureOut").click(function () {

    //get animal
    const items = ["Flamingo", "Cheetah", "Owl", "Sheep", "Lion", "Reindeer", "Swan"];
    let index = Math.random() * 7;
    let animal = items.at(index);
    //share their spririt animal
      $("#spiritAnimal").text("Your spirit animal is a "+ animal + "! Read more about your spirit animal on the graphic above!") 

      
  });

}); 
