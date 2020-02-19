var app = angular.module('seminaire', ['ui.bootstrap', 'pascalprecht.translate']);

app.config(function ($translateProvider) {
    $translateProvider
    .useStaticFilesLoader({
        prefix: '/locales/locale-',
        suffix: '.json'
    })
    .useSanitizeValueStrategy('sanitizeParameters')
    .preferredLanguage('fr');
});

app.controller('ctrl', function($scope, $window, $translate) {

  $scope.model = {
    lang: "fr"
  }
  $scope.changeLang = function(l) {
    $scope.model.lang = l;
    $translate.use(l);
  }
})
