myApp.controller('postsController', function($scope,$http) {
	$scope.list = [];
    $scope.postSubmit = function() {
        $http.get("http://api.giphy.com/v1/gifs/search?q="+$scope.postQuery+"&api_key=dc6zaTOxFJmzC")
            .then(function(response) {
             $scope.gotData = response.data;
        });
        if ($scope.postQuery) {
            $scope.list.push(this.postQuery);
            $scope.postQuery = '';
        }
    };
});