/// <reference path="../_all.ts" />

module Elmo.Controllers {
    "use strict";

    export interface IHomeController {
 
    }

    export class HomeController implements IHomeController {
        public static $inject = ["$scope"];

        constructor(private $scope: any) {
            this.init();
        }

        private init(): void {
            this.$scope.message = "From app";
        }
    }
}