angular.module('website', ['ngAnimate', 'ngTouch'])
    .controller('MainCtrl', function ($scope) {
        $scope.slides = [

        {image: 'img/ziel1.jpg', 
             image2: 'img/ziel2.jpg',
             image3: 'img/ziel3.jpg',
             image4: 'img/ziel4.jpg',
             image5: 'img/ziel5.jpg',
             image6: 'img/ziel6.jpg',
             description: 'Class project where we worked in groups to create any app we wanted. We chose to make a goal tracking app where you could challenge your friends to see who could complete the goal first.',
             title: "Ziel",
             date: "2014",
             tools: "Branding, UX-UI Design"
        },

            {image: 'img/impact1.jpg', 
             image2: 'img/impact2.jpg',
             image3: 'img/impact3.jpg',
             description: 'Class project that included a logo and brand for a company. After revisions of sketches and wireframes the final design was created.',
             title: "Impact",
             date: "2013",
             tools: "Logo, Branding, Web Design"
        },

            {image: 'img/toppers2.jpg', 
             image2: 'img/toppers1.jpg',
             description: 'Brand created as an icecream company. The name and logo were first designed and then the stationary was later created. The icecream cones would be wrapped in paper with the logo.',
             title: "Toppers",
             date: "2014",
             tools: "Logo, Branding"
        },

        {image: 'img/trendy1.jpg', 
             image2: 'img/trendy2.jpg',
             image3: 'img/trendy3.jpg',
             description: 'A winter magazine spread that gives tips and advise for dressing in the winter. This spread was a demonstration of layout.',
             title: "Trendy Press",
             date: "2014",
             tools: "Design, Photography"
        },

        {image: 'img/chefssource1.jpg', 
             image2: 'img/chefssource2.png',
             image3: 'img/chefssource3.png',
             image4: 'img/chefssource4.png',
             image5: 'img/chefssource5.png',
             image6: 'img/chefssource6.png',
             description: 'Created in a UX - UI Class. We were asked to make a recipe app. I created Chefs Source as an easy way to find food by looking through large beautiful imagery. ',
             title: "Chefs Source",
             date: "2013",
             tools: "Logo, Branding, UX - UI Design"
        },

            {image: 'img/craters1.jpg', 
             image2: 'img/craters2.jpg',
             image3: 'img/craters3.jpg',
             description: 'Created a company that included name, logo and branding. Crater came from the idea of a cookie and milk bar. Where your dessert would come out in crates.',
             title: "Crater",
             date: "2014",
             tools: "Logo, Branding"
        },

        {image: 'img/surelock1.jpg', 
             image2: 'img/surelock2.jpg',
             image3: 'img/surelock3.jpg',
             image4: 'img/surelock4.jpg',
             image5: 'img/surelock5.jpg',
             description: 'Class assignment to create a home security app. The design included being able to control temperature, door locks and security cameras.',
             title: "Surelock Homes",
             date: "2013",
             tools: "Logo, Branding, UX-UI Design"
        },

        {image: 'img/lrc1.png', 
             image2: 'img/lrc2.png',
             image3: 'img/lrc3.png',
             image4: 'img/lrc4.png',
             image5: 'img/lrc5.png',
             image6: 'img/lrc6.png',
             image7: 'img/lrc7.png',
             image8: 'img/lrc8.png',
             description: 'Catalog designed for LRC BodyBuilding. The purpose of this was to inform and sell LRCS 3 training plans while introducing new customers to LRC.',
             title: "LRC",
             date: "2014",
             tools: "Logo, Branding"
        },
    ];


        $scope.direction = 'left';
        $scope.currentIndex = 0;

        // $('.indy').on("click", function(e){
        // $scope.currentIndex = 0;
        // });

 

        // $scope.indy = function () {
        //     $scope.direction = 'left';
        //     $scope.currentIndex = 1;
        // };
     
   


        $scope.setCurrentSlideIndex = function (index) {
            $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };

        $scope.prevSlide = function () {
            $scope.direction = 'left';
            $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
        };

        $scope.nextSlide = function () {
            $scope.direction = 'right';
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
        };
    })
    .animation('.slide-animation', function () {
        return {
            beforeAddClass: function (element, className, done) {
                var scope = element.scope();

                if (className === 'ng-hide') {
                    var finishPoint = element.parent().width();
                    if(scope.direction !== 'right') {
                        finishPoint = -finishPoint;
                    }
                    TweenMax.to(element, 0, {left: finishPoint, onComplete: done });
                }
                else {
                    done();
                }
            },
            removeClass: function (element, className, done) {
                var scope = element.scope();

                if (className === 'ng-hide') {
                    element.removeClass('ng-hide');

                    var startPoint = element.parent().width();
                    if(scope.direction === 'right') {
                        startPoint = -startPoint;
                    }

                    TweenMax.fromTo(element, 0, { left: startPoint }, {left: 0, onComplete: done });
                }
                else {
                    done();
                }
            }
        };

});

