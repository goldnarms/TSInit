var Elmo;
(function (Elmo) {
    var Controllers;
    (function (Controllers) {
        "use strict";
        var HomeController = (function () {
            function HomeController($scope) {
                this.$scope = $scope;
                this.init();
            }
            HomeController.prototype.init = function () {
                this.$scope.message = "From app";
            };
            HomeController.$inject = ["$scope"];
            return HomeController;
        })();
        Controllers.HomeController = HomeController;
    })(Controllers = Elmo.Controllers || (Elmo.Controllers = {}));
})(Elmo || (Elmo = {}));
//# sourceMappingURL=homeController.js.map