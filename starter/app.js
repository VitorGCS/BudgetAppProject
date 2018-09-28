//Architecture MVC

//BEDGET CONTROLLER
var budgetController = (function(){


})();


//UI CONTROLLER
var UIController = (function(){
    //Some Code

})();


//GLOBAL CONTROLLER
var controller = (function(budgetCtrl, UICtrl){

var ctrlAddItem = function(){
  //1. get the filed input data

  //2. add the item to the budget CONTROLLER

  //3. add the item to the UI

  //4. Calculate the budget

  //5. Display the budget on the UI
   console.log('It works');
}


  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function(event){
    if(event.keyCode === 13 || event.which === 13){
      ctrlAddItem();
    }
  });


})(budgetController, UIController);
