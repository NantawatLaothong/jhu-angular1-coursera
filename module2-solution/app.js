(function(){
    'use strict';


    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService );


    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){

    var tobuyList = this;

    tobuyList.items = [
        {
            name: "cookies", quantity: 10
        },
        {
            name: "ice cream", quantity: 5
        },
        {
            name: "eggs", quantity: 3
        },
        {
            name: "milk", quantity: 2
        },
        {
            name: "pasta", quantity: 1
        },
    ];

    tobuyList.checkItem = function(name, quantity){
        ShoppingListCheckOffService.checkOffItem(name, quantity)
        // find the index of the item to delete
        var itemIndex =  tobuyList.items.findIndex(item=>item.name == name);
        if(itemIndex !== -1 ){
            var removedItem = tobuyList.items.splice(itemIndex, 1)[0];
            console.log("removed: " + removedItem.name);
        }
        console.log( tobuyList.items.length);
    }


    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){

    var boughtList = this;

    boughtList.list = ShoppingListCheckOffService.getItems();

    }

    function ShoppingListCheckOffService(){

        var service = this;

        
        var checkedItems = [];

        service.checkOffItem = function(itemName, itemQuantity){
            var item = {
                name: itemName,
                quantity: itemQuantity
            }
            checkedItems.push(item);
        }

        service.getItems = function(){
            return checkedItems
        }
    }


})()