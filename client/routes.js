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
	
		.state("bowleague", {
			url: "/bowleague",
			templateUrl: "features/portfolio/bowleague.template.html",
			controller: "portfolioController"
		})
	
		.state("clout", {
			url: "/clout",
			templateUrl: "features/portfolio/clout.template.html",
			controller: "portfolioController"
		})
	
		.state("storelist", {
			url: "/storelist",
			templateUrl: "features/portfolio/storelist.template.html",
			controller: "portfolioController"
		})
	
    $urlRouterProvider.otherwise("/home");
});