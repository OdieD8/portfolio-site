angular.module("app", ["ui.router"]).config(function($urlRouterProvider, $stateProvider) {
    
    $stateProvider
        .state("home", {
            url: "/home",
            templateUrl: "features/home/home.template.html",
            controller: "homeController"
        })
		
		.state("portfolio", {
			url: "/portfolio",
			templateUrl: "features/portfolio/portfolio.template.html",
			controller: "portfolioController"	
		})
	
    $urlRouterProvider.otherwise("/home");
});