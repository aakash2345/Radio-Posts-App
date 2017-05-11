myApp.controller('radioController', function($scope,$http) {
    $scope.list = [];
    $scope.submit = function() {
        $http.get("https://itunes.apple.com/search?term="+$scope.query)
            .then(function(response) {
             $scope.gotData = response.data;
             $scope.resultCount = $scope.gotData.resultCount;
             $scope.results = $scope.gotData.results;
        });
        if ($scope.query) {
            $scope.list.push(this.query);
            $scope.query = '';
        }
    };
});