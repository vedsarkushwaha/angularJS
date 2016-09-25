(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyShoppingController',ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController',AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyShoppingController(ShoppingListCheckOffService) {

    var toBuyShoppingController = this;

    toBuyShoppingController.items = ShoppingListCheckOffService.getToBuyItems();
    toBuyShoppingController.errorMessage = "Everything is bought!";

    toBuyShoppingController.addItem = function (itemIndex) {
      ShoppingListCheckOffService.addItem(itemIndex);
    };

    toBuyShoppingController.isToBuyListEmpty = function() {
      return toBuyShoppingController.items.length === 0;
    };
  }

  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {

    var alreadyBoughtShoppingController = this;

    alreadyBoughtShoppingController.items = ShoppingListCheckOffService.getBoughtItems();
    alreadyBoughtShoppingController.errorMessage = "Nothing bought yet";
    // alreadyBoughtShoppingController.removeItem = function (itemIndex) {
    //   ShoppingListCheckOffService.removeItem(itemIndex);
    // };

    alreadyBoughtShoppingController.isBoughtListEmpty = function() {
      return alreadyBoughtShoppingController.items.length === 0;
    };

  }

  function ShoppingListCheckOffService() {

    var service = this;

    var toBuy = [];
    var bought = [];

    // initializing toBuy array
    for(var i =0; i<5; i++) {
      var obj = {
        name: "cookies",
        quantity: 10
      };
      toBuy.push(obj);
    }

    service.addItem = function(itemIndex) {
      bought.push(toBuy[itemIndex]);
      toBuy.splice(itemIndex, 1);
    }

    service.removeItem = function(itemIndex) {
      toBuy.push(bought[itemIndex]);
      bought.splice(itemIndex, 1);
    }

    service.getToBuyItems = function() {
      return toBuy;
    }

    service.getBoughtItems = function() {
      return bought;
    }
  }

})();
