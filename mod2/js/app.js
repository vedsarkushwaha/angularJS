(function() {
  'use strict';

  angular.module('myFirstApp', [])
  .controller('ParentController',ParentController)
  .controller('ChildController',ChildController);

  ParentController.$inject = ['$scope'];
  function ParentController($scope) {
    $scope.parentValue = 1;
    $scope.pc = this;
    $scope.pc.parentValue = 1;
  }

  ChildController.$inject = ['$scope'];
  function ChildController($scope) {
    console.log("$scope.parentValue: ",$scope.parentValue);
    console.log("CHILD $scope: ",$scope);

    $scope.parentValue = 5;
    console.log("*** CHANGED: $scope.parentValue = 5 ***");
    console.log("$scope.parentValue: ",$scope.parentValue);
    console.log($scope);
  }




  // var parent = {
  //   value: "parentValue",
  //   obj: {
  //     objValue: "parentObjValue"
  //   },
  //   walk: function() {
  //     console.log("walking!");
  //   }
  // };


  // var child = Object.create(parent);
  // console.log("CHILD - child.value: ", child.value);
  // console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
  // console.log("PARENT - parent.value: ", parent.value);
  // console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
  // console.log("parent: ", parent);
  // console.log("child: ", child);


  // child.value = "childValue";
  // child.obj.objValue = "childObjValue";
  // console.log(" *** CHANGED: child.value = 'childValue'");
  // console.log(" *** CHANGED: child.obj.objValue = 'child.obj.objValue'");

  // console.log("CHILD - child.value: ", child.value);
  // console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
  // console.log("PARENT - parent.value: ", parent.value);
  // console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
  // console.log("parent: ", parent);
  // console.log("child: ", child);

  // var grandChild = Object.create(child);
  // console.log("GrandChild: ", grandChild);
  // console.log("GRANDCHILD - grandChild.value", grandChild.value);
  // grandChild.walk();

  // function Dog(name) {
  //   this.name = name;
  //   console.log("'this' is: ", this);
  // }

  // var myDog = new Dog("Max");
  // console.log("myDog: ", myDog);

  // Dog("Max2");
  // // var myDog2 = Dog("Max2");
  // // console.log("myDog2: ", myDog2);

})();