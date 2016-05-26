app.controller("ItemNewCtrl", function($scope, $http, $location, itemStorage){
  $scope.title = "New Item";
  $scope.submitButtonText = "Add New Item"
  $scope.newTask = {
    assignedTo: "",
    dependencies: "",
    dueDate: "",
    isCompleted: false,
    location: "",
    task: "",
    urgency: "",
  };

  $scope.items = [];
  
    $scope.addNewItem = function(){
      $http.post(
        "https://todo-angular-js.firebaseio.com/items.json",
        JSON.stringify({
          assignedTo: $scope.newTask.assignedTo,
          dependencies: $scope.newTask.dependencies,
          dueDate: $scope.newTask.dueDate,
          isCompleted: $scope.newTask.isCompleted,
          location: $scope.newTask.location,
          task: $scope.newTask.task,
          urgency: $scope.newTask.urgency
        })
      )
      .success(function(response){
        console.log(response);
        $location.url("user/list")
      })

    };
});