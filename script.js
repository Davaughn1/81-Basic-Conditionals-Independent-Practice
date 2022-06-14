// 1. English Section:
$(".english-button").click(function(){
    let englishInput = $(".english").val();
          if(englishInput==="Mon"){
    // display this text if the answer is correct
    $(".english-message").text("Correct!");
          } else{
    // display this text if the answer is incorrect
    $(".english-message").text("Wrong! Try again."); 
          }
});


// 2. Social Studies section
$(".ss-button").click(function(){
    let ssInput = $(".social-studies").val();
 if(ssInput==="Albany"){
    // display this text if the answer is correct
    $(".ss-message").text("Correct!");
          } else{
    // display this text if the answer is incorrect
    $(".ss-message").text("Wrong! Try again."); 
          }
    
    
    
     
});


// 3. Math section
$(".math-button").click(function(){
    let mathInput = ($(".math").val());
    if(mathInput==="30"){
     $(".math-message").text("Correct!");
    } else{
$(".math-message").text("Wrong! Try again."); 
    }
 

});


// 4. Science section
$(".science-button").click(function(){
    let scienceInput = $(".science").val();
 if(scienceInput ==="solid"){
    // display this text if the answer is correct
    $(".science-message").text("Correct!");
          } else{
    // display this text if the answer is incorrect
    $(".science-message").text("Wrong! Try again."); 
          }
});

