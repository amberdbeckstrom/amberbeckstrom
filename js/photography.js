angular.module('website', ['ngAnimate', 'ngTouch'])
    .controller('MainCtrl', function ($scope) {
           $scope.slides = [

           {image: 'img/james1.jpg', 
             image2: 'img/james2.jpg',
             description: 'These images were done for a portrait photography class. This shoot was to portray a business look. It was shot with a three light set up.',
             title: "James",
             date: "2012",
             tools: "Photography"
        },

        {image: 'img/lexi1.jpg', 
             image2: 'img/lexi2.jpg',
             description: 'Portriat photography class. For this assignment we were to work with a model that we found on our own and were to do a shoot with them.',
             title: "Lexi",
             date: "2012",
             tools: "Photography"
        },
        
        {image: 'img/indy1.jpg', 
             image2: 'img/indy2.jpg',
             image3: 'img/indy3.jpg',
             description: 'Portrait photography class assignment where we were to have an action shot and show shutter drag. Two light set up.',
             title: "Indy",
             date: "2012",
             tools: "Photography"
        },

        {image: 'img/janell1.jpg', 
             image2: 'img/janell2.png',
             description: 'Assignment in a portriat photography class we were to work with a makeup artist and hairstylist. These shot were taken with the beauty dish.',
             title: "Janell",
             date: "2012",
             tools: "Photography"
        },

        {image: 'img/fish1.jpg', 
             // image2: 'img/janell2.png',
             description: 'Product photography assignment to show shooting with glass. Rizzo the little fish was a great model.',
             title: "Rizzo",
             date: "2013",
             tools: "Photography"
        },

        {image: 'img/tate2.jpg', 
             image2: 'img/tate1.jpg',
             image3: 'img/tate4.jpg',
             image4: 'img/tate3.jpg',
             image5: 'img/tate5.jpg',
             description: 'Graduation photoshoot. It was a great experience shooting with tate. Taking pictures of him riding his long board was a lot of fun.',
             title: "Tate",
             date: "2014",
             tools: "Photography"
        },

        {image: 'img/chicken1.jpg', 
             image2: 'img/chicken2.jpg',
             description: 'Product shoot for class. I was asked to do a food shoot. The look that i had wanted was for the background to be very clean and white but the chicken to still be messy and gross.',
             title: "Chicken",
             date: "2013",
             tools: "Photography"
        },

         {image: 'img/grant3.jpg', 
             image2: 'img/grant2.jpg',
             image3: 'img/grant1.jpg',
             description: 'Final photoshoot that combined product and portriat photography. In class we were required to make an advertisement by having a model and either a cologne or perfume bottle.',
             title: "Cologne Ad",
             date: "2013",
             tools: "Photography"
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

