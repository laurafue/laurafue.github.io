var GLOBALS = {
 images: "http://localhost:8000/images/",
 files: "http://localhost:8080/files/",
 sidenav: {
   title: ""
 }};
'use strict';
angular.module('angular-seed.core.footer.controller', []).controller('footerCtrl', ['$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScroll) {
    $scope.vm = {};
    var self = this;
    $scope.openImpressumDialog = function() {
        angular.element('#impressum').openModal();
    }
    $scope.gotoAnchor = function(x) {
        var newHash = x;
        if ($location.hash() !== newHash) {
            // set the $location.hash to `newHash` and
            // $anchorScroll will automatically scroll to it
            $location.hash(x);
        } else {
            // call $anchorScroll() explicitly,
            // since $location.hash hasn't changed
            $anchorScroll();
        }
    };

}]);

'use strict';
angular.module('angular-seed.core.navbar.controller', []).controller('navbarCtrl', ['$scope', '$location', '$anchorScroll', '$stateParams', function($scope, $location, $anchorScroll, $stateParams) {
    $scope.vm = {};
    var self = this;
    setTimeout(function() {
        angular.element('.button-collapse').sideNav({
            closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
        });
    }, 0);
    $scope.gotoAnchor = function(x) {
        var newHash = x;
        if ($location.hash() !== newHash) {
            // set the $location.hash to `newHash` and
            // $anchorScroll will automatically scroll to it
            $location.hash(x);
        } else {
            // call $anchorScroll() explicitly,
            // since $location.hash hasn't changed
            $anchorScroll();
        }
    };
}]);

'use strict';
angular.module('angular-seed.core.sidenav.controller', [])
    .controller('sidenavCtrl', ['$scope', function($scope) {
        $scope.vm = {};
        var self = this;
    }]);

'use strict';
angular.module('angular-seed.core.footer.directive', []).directive('pageFooter', function () {
    return {
        templateUrl: 'modules/core/views/footer.html',
        restrict: 'E'
    };
});
'use strict';
angular.module('angular-seed.core.navbar.directive', []).directive('navigationBar', function () {
    return {
        templateUrl: 'modules/core/views/navbar.html',
        restrict: 'E'
    };
});
'use strict';
angular.module('angular-seed.core.sidenav.directive', []).directive('sideNav', function () {
    return {
        templateUrl: 'modules/core/views/sidenav.html',
        restrict: 'E'
    };
});
'use strict';
angular.module('angular-seed.impressum.controller', [])
    .controller('impressumCtrl', ["$scope", "$rootScope", function($scope, $root) {
        $scope.vm = {};
        var self = this;

    }]);

'use strict';
angular.module('angular-seed.landingpage.controller', [])
    .controller('LandingPageCtrl', ["$scope", "$rootScope", function($scope, $root) {
        $scope.vm = {};
        var self = this;
        setTimeout(function() {
            angular.element('.button-collapse').sideNav();
        }, 0);
        $('.parallax').parallax();
        $scope.openProjectDialog = function(x) {
            angular.element('#project' + x).openModal();
        }
    }]);

'use strict';
angular.module('angular-seed.project.controller', [])
    .controller('projectCtrl', ["$scope", "$rootScope", function($scope, $root) {
        $scope.vm = {};
        var self = this;

    }]);

'use strict';
angular.module('angular-seed.project.project1.directive', []).directive('project1', function () {
    return {
        templateUrl: 'modules/project/views/project1.html',
        restrict: 'E'
    };
});
'use strict';
angular.module('angular-seed.project.project2.directive', []).directive('project2', function () {
    return {
        templateUrl: 'modules/project/views/project2.html',
        restrict: 'E'
    };
});
'use strict';
angular.module('angular-seed.project.project3.directive', []).directive('project3', function () {
    return {
        templateUrl: 'modules/project/views/project3.html',
        restrict: 'E'
    };
});
'use strict';
angular.module('angular-seed.project.project4.directive', []).directive('project4', function () {
    return {
        templateUrl: 'modules/project/views/project4.html',
        restrict: 'E'
    };
});
'use strict';
angular.module('angular-seed.project.project5.directive', []).directive('project5', function () {
    return {
        templateUrl: 'modules/project/views/project5.html',
        restrict: 'E'
    };
});
'use strict';
angular.module('angular-seed.project.project6.directive', []).directive('project6', function () {
    return {
        templateUrl: 'modules/project/views/project6.html',
        restrict: 'E'
    };
});
'use strict';
// Declare app level module which depends on views, and components
angular.module('angular-seed', [
    'ui.router',
    //Controllers    
    'angular-seed.landingpage.controller',
    'angular-seed.project.controller',
    'angular-seed.impressum.controller',
    'angular-seed.core.navbar.controller',
    'angular-seed.core.sidenav.controller',
    'angular-seed.core.footer.controller',
    //Directives
    'angular-seed.core.navbar.directive',
    'angular-seed.core.sidenav.directive',
    'angular-seed.core.footer.directive',
    'angular-seed.project.project1.directive',
    'angular-seed.project.project2.directive',
    'angular-seed.project.project3.directive',
    'angular-seed.project.project4.directive',
    'angular-seed.project.project5.directive',
    'angular-seed.project.project6.directive'
]).config(function($stateProvider, $urlRouterProvider) {
    //Check for authentication
    console.log("loaded")
        // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");

    // Now set up the states
    $stateProvider
        .state('landingpage', {
            url: "/",
            templateUrl: "modules/landingpage/views/landingpage.html",
            controller: "LandingPageCtrl"
        })
        .state('project1', {
            url: "/project1",
            templateUrl: "modules/project/views/project1.html",
            controller: "projectCtrl"
        })
        .state('project2', {
            url: "/project2",
            templateUrl: "modules/project/views/project2.html",
            controller: "projectCtrl"
        })
        .state('project3', {
            url: "/project3",
            templateUrl: "modules/project/views/project3.html",
            controller: "projectCtrl"
        })
        .state('project4', {
            url: "/project4",
            templateUrl: "modules/project/views/project4.html",
            controller: "projectCtrl"
        })
        .state('project5', {
            url: "/project5",
            templateUrl: "modules/project/views/project5.html",
            controller: "projectCtrl"
        })
        .state('project6', {
            url: "/project6",
            templateUrl: "modules/project/views/project6.html",
            controller: "projectCtrl"
        })
        .state('impressum', {
            url: "/impressum",
            templateUrl: "modules/impressum/views/impressum.html",
            controller: "impressumCtrl"
        });
}).config(["$locationProvider", function($locationProvider) {
    //$locationProvider.html5Mode(true);
}]).run(function($rootScope, $state, $location, $window) {
    $rootScope.globals = {
        images: GLOBALS.images,
        API: GLOBALS.API,
        loading: false,
        limit: 15,
        CONFIG: {
            headers: {
                'Authorization': "",
            },
        }
    };
    $rootScope
        .$on('$stateChangeSuccess',
            function(event) {
                if (!$window.ga) {
                    return;
                }
                $window.ga('send', 'pageview', { page: $location.url() });
            });
});

//# sourceMappingURL=app.js.map