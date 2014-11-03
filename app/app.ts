/// <reference path="_all.ts" />

module Elmo {
    'use strict';
    var app = angular.module('elmo', [])
        .controller("homeCtrl", Elmo.Controllers.HomeController);
} 