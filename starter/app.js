//Architecture MVC

//BEDGET CONTROLLER
var budgetController = (function(){


})();


//UI CONTROLLER
var UIController = (function(){
    
    var DOMstrings = {
        inputType : '.add__type',
        inputDescription : '.add__description',
        inputValue : '.add__value',
        inputBtn : '.add__btn'
    };
    
    return {
      getInput:function(){
          return {
            type : document.querySelector(DOMstrings.inputType).value,//will be either inc or exp
            description : document.querySelector(DOMstrings.inputDescription).value,
            value : document.querySelector(DOMstrings.inputValue).value
          };
      },
    getDOMSstrings : function (){
        return DOMstrings;
    }
    };

})();


//GLOBAL CONTROLLER
var controller = (function(budgetCtrl, UICtrl){

    var setupEventListeners = function(){
        
        var DOM = UICtrl.getDOMSstrings(); 
        
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event){
            if(event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }
        });
    };
    
   
    
    var ctrlAddItem = function(){
    
    //1. get the filed input data
    var input = UICtrl.getInput();
    
    
    //2. add the item to the budget CONTROLLER

    //3. add the item to the UI

    //4. Calculate the budget

    //5. Display the budget on the UI
    };
    return {
        init : function(){
            console.log('Application has started.');
            setupEventListeners();
        }
    };

})(budgetController, UIController);


controller.init();