app.controller("NavCtrl", function($scope){
  $scope.navItems = [
  {
    name: "Logout",
    url: "#/logout"}, 
  {
    name: "All Items",
    url: "#/user/list"},
  {
    name: "New Item",
    url: "#/item/new"
  }
  ];
});