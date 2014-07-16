var myApp = angular.module('myApp', [
  'auth0',
  'authInterceptor',
  'shoppinpal.mobile-menu',
  'easypiechart',
  'ngRoute',   
  'ngCookies',
  'appServices',
  'appControllers'
  ]).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/',                        { templateUrl: 'partials/root.html',            controller: 'RootCtrl'        })
      .when('/logout',                  { template: '<p>You are now logged out</p>',    controller: 'LogoutCtrl'      })
      .when('/login',                   { templateUrl: 'partials/login.html',           controller: 'LoginCtrl'       })
      .when('/accounts',                { templateUrl: 'partials/accounts.html',        controller: 'AccListCtrl'     })
      .when('/accounts/:accountId',     { templateUrl: 'partials/account.html',         controller: 'AccCtrl'         })
      .when('/cases',                   { templateUrl: 'partials/cases.html',           controller: 'CaseListCtrl'    })
      .when('/cases/:caseId',           { templateUrl: 'partials/case.html',            controller: 'CaseCtrl'        })
      .when('/campaigns',               { templateUrl: 'partials/campaigns.html',       controller: 'CampaignListCtrl'})
      .when('/campaigns/:campaignId',   { templateUrl: 'partials/campaign.html',        controller: 'CampaignCtrl'    })
      .when('/opps',                    { templateUrl: 'partials/opps.html',            controller: 'OppListCtrl'     })
      .when('/opps/:opp',               { templateUrl: 'partials/opp.html',             controller: 'OppCtrl'         })
      .when('/user',                    { templateUrl: 'partials/user.html',            controller: 'UserCtrl'        })
      .otherwise({ redirectTo: '/login' });
  }]).
  config(['authProvider', function(authProvider) {
    authProvider.init({
      domain:         'conor.auth0.com',
      clientID:       'v4VW5474Ks8sqBFKgSlPCI7gLTvUQJNz',
      callbackURL:    'http://127.0.0.1:9002/index.html?url=http://127.0.0.1:8001',
      callbackOnLocationHash: true
    });
  }]);