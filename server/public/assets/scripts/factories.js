myApp.factory('PetService', ['$http', function($http) {
    var data = {};

    var getData = function() {

        $http.get('/pets').then(function(response){
        data.results = response.data;
    });
  };

    var postData = function(data) {
        $http.post('/pets', data).then(function(response) {
        });
    };


    return {
        postData : postData,
        getData : getData,
        data : data
    };
}]);
