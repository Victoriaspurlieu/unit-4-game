var attack;
var defend;
var attackcharacter;
var attackerHP;
var attackerAP;
var attackerCAP;
var defendcharacter;
var defenderHP;
var defenderAP;
var defenderCAP;
var name;
var YourCharacter;
var YourDefender;
var myChar = "";
var myDef = "";

function reset() {	

$("#picRow").show();
$(".restart").hide();
$(".attackButton").show();


var myChar = "";
var myDef = "";
// var YourCharacter;
// var YourDefender;


// reset health points
characters.YodaSan.healthPoints = 120;
characters.Rey.healthPoints = 100;
characters.DarSid.healthPoints = 150;
characters.DarMaul.healthPoints = 180;

// reset attack power
characters.YodaSan.attackPower = 8;
characters.Rey.attackPower = 10;
characters.DarSid.attackPower = 10;
characters.DarMaul.attackPower = 12;

// delete all in-game text
$(".youAttacked").empty();
$(".attackedBack").empty();
$(".youDefeated").empty();
$(".youWon").empty();
$(".youLose").empty();
$(".noEnemy").empty();

//writing each characters full name to the html 
$(".nameo").html(characters.YodaSan.fullName);
$(".namel").html(characters.Rey.fullName);
$(".nameds").html(characters.DarSid.fullName);
$(".namedm").html(characters.DarMaul.fullName);

//adding the picture for each character 
$("#darthS").appendTo("#picRow");
$("#darthM").appendTo("#picRow");
$("#luke").appendTo("#picRow");
$("#yoda").appendTo("#picRow");

//writing each characters healthpoints to the html 
$(".master").html(characters.YodaSan.healthPoints);
$(".reyhp").html(characters.Rey.healthPoints);
$(".darthshp").html(characters.DarSid.healthPoints);
$(".darthmhp").html(characters.DarMaul.healthPoints);

};

// array to hold each characters stats
var characters = { 

YodaSan: {
    name: "YodaSan",
    visual: 'images/yoda.png',
    healthPoints: 120,
    attackPower: 8,
    fullName: "Yoda",
    counterAttackPower: 24
    },

Rey:{
    name: "Rey",
    visual: 'images/starwars_girl.png',
    healthPoints: 100,
    attackPower: 10,
    fullName: "Rey",
    counterAttackPower: 5
    },

DarSid:{ 
    name: "DarSid",
    visual: 'images/starwars_character1.png',
    healthPoints: 150,
    attackPower: 10,
    fullName: "Darth Sideous",
    counterAttackPower: 20
    },

DarMaul:{ 
    name: "DarMaul",
    visual: 'images/starwars_character1.png',
    healthPoints: 180,
    attackPower: 12,
    fullName: "Darth Maul",
    counterAttackPower: 25
    }
};


$(document).ready(function(){
reset();

// When the player clicks on any of the characters, the game determines which one was clicked, moves the one clicked into
// "Your Character" and moves the other three into "Enemies available to attach"
$(".firstRow").click(function(){
        
   if (myChar == "") {
   // appends the chosen character to "Your Character"
   console.log(this);	       
   $(this).appendTo("#yourChar");
   myChar = $(this);
   YourCharacter = $(myChar).attr("value");
      }
   // if else statements that determine who is currently "Your Character" and assign
   // that person to the character array's properties. 
   if (YourCharacter == characters.YodaSan.name) {
           attackerHP = characters.YodaSan.healthPoints;
           attackerAP = characters.YodaSan.attackPower;
           attackerCAP = characters.YodaSan.counterAttackPower;
           attackerFN = characters.YodaSan.fullName;
           attack = characters.YodaSan;
   }
   else if (YourCharacter == characters.Rey.name){
           attackerHP = characters.Rey.healthPoints;
           attackerAP = characters.Rey.attackPower;
           attackerCAP = characters.Rey.counterAttackPower;
           attackerFN = characters.Rey.fullName;
           attack = characters.Rey;
   }
   else if (YourCharacter == characters.DarSid.name){
           attackerHP = characters.DarSid.healthPoints;
           attackerAP = characters.DarSid.attackPower;
           attackerCAP = characters.DarSid.counterAttackPower;
           attackerFN = characters.DarSid.fullName;
           attack = characters.DarSid;
   }
   else if (YourCharacter == characters.DarMaul.name){
           attackerHP = characters.DarMaul.healthPoints;
           attackerAP = characters.DarMaul.attackPower;
           attackerCAP = characters.DarMaul.counterAttackPower;
           attackerFN = characters.DarMaul.fullName;
           attack = characters.DarMaul;
   }
          
   for (var i = 0; i < 4; i++) {
       $("._" + [i]).not(myChar).appendTo("#enemies" + [i]);

       // changing color
       $("._" + [i]).not(myChar).css({"background-color": "red", "outline-color": "black", 
           "border-width": "1px", "outline-style": "solid", "border-color": "black", "outline-width": "1px"});


   }
           
   // Clears the characters from the top
   $("#picRow").hide();
  
});

// When the player clicks on any of the characters in the "enemies available to attack" section, the game 
// determines which one was clicked and moves the one clicked into the "Defender" position. The other two 
// characters remain in "enemies available to attack" section    
$(".move").click(function(){

     $(this).appendTo("#defender");
     myDef = $(this);
     YourDefender = $(myDef).children().attr("value");
     $(".youDefeated").empty();


     // if else statements that determine who is currently "Defender" and assign
   // that person to the character array's properties
   if (YourDefender == characters.YodaSan.name) {
           defenderHP = characters.YodaSan.healthPoints;
           defenderAP = characters.YodaSan.attackPower;
           defenderCAP = characters.YodaSan.counterAttackPower;
           defenderFN = characters.YodaSan.fullName;
           defend = characters.YodaSan;
       
       }
       else if (YourDefender == characters.Rey.name){
           defenderHP = characters.Rey.healthPoints;
           defenderAP = characters.Rey.attackPower;
           defenderCAP = characters.Rey.counterAttackPower;
           defenderFN = characters.Rey.fullName;
           defend = characters.Rey;
           
   }
   else if (YourDefender == characters.DarSid.name){
           defenderHP = characters.DarSid.healthPoints;
           defenderAP = characters.DarSid.attackPower;
           defenderCAP = characters.DarSid.counterAttackPower;
           defenderFN = characters.DarSid.fullName;
           defend = characters.DarSid;
           
   }
   else if (YourDefender == characters.DarMaul.name){
           defenderHP = characters.DarMaul.healthPoints;
           defenderAP = characters.DarMaul.attackPower;
           defenderCAP = characters.DarMaul.counterAttackPower;
           defenderFN = characters.DarMaul.fullName;
           defend = characters.DarMaul;
           
   }


});


// when the user clicks attack, the player/Your Character's Health Points go down based on the counter attack 
// property of the "Defender"
$(".attackButton").click(function(){

     if (!(attackerHP < 1) || !(defenderHP < 1)) {

     attackerHP = (attackerHP - defenderCAP);
     
     $("." + YourCharacter).html(attackerHP);

     $(".youAttacked").html("You attacked " + defenderFN + " for " + attackerAP + " damage.");

     defenderHP = (defenderHP - attackerAP);

     $(".attackedBack").html(defenderFN + " attacked you back for " + defenderCAP + " damage.");
    
    $("." + YourDefender).html(defenderHP);

 } 
     // if your character defeats the defender
     if (defenderHP <= 0) {

         // clear text from the bottom and add defeated text
         $(".youAttacked").empty();
         $(".attackedBack").empty();
         $(".youDefeated").html("You have defeated " + defenderFN + ", you can choose to fight another enemy.");

         // remove defender from the page
         $("#defender").empty();

         // Your Character's attack power goes up by 10
         console.log(attackerAP);
         attackerAP = (attackerAP + 10);

         // redefining "YourCharacter"'s attack power to equal the new value
         attack.attackPower = attackerAP;
         console.log(attackerAP);

     }
     
     // if all enemies have been defeated and the attacker still has health, then the player wins
     if ($(".move").children().length == 0){
      
      // clear out the other paragraphs and let user know they won.
      $(".youAttacked").empty();
      $(".attackedBack").empty();
      $(".youDefeated").empty();
      $(".noEnemy").empty();
      $(".youWon").html("You Won!!!! GAME OVER!!!"); 

      // show the restart button
      $(".restart").show();
      $(".restart").click(function(){
          location.reload(true);
      })
                       
     }

     // if your characters hp = 0 then you lose.
     if (attackerHP <= 0) {

         // show the restart button
         $(".restart").show();

         // hide the attack button
         $(".attackButton").hide();

         // You lose
         $(".youAttacked").empty();
          $(".attackedBack").empty();
         $(".youDefeated").empty();
         $(".youLose").html("You've been defeated...GAME OVER!!!")

          // When you click "Restart" the game begins again
          $(".restart").click(function(){
              location.reload(true);
          });

     }      
     
});

});