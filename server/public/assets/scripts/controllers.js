myApp.controller('AddController', ['$scope', 'PetService', function($scope, PetService) {
    var petObject = {};
    var petService = PetService;

    $scope.submit = function(data) {
        petService.postData(data);
    };
}]);

myApp.controller('ShowController', ['$scope', 'PetService', function($scope, PetService) {
    var petService = PetService;
    $scope.data = {};

    $scope.data.response = petService.data;

    petService.getData();
    console.log($scope.data);
}]);
