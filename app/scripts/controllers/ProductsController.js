'use strict';

    angular.module('aceTrainingApp').controller('ProductsController', function ($scope) {

        $scope.products = [
            {
                title: 'Mentoring schemes',
                image: 'images/product-mentoring-image.jpg',
                summary: 'One on one tuition ensuring you are at your very best all the time.'
            },
            {
                title: 'In-house training',
                image: 'images/product-inhouse-image.jpg',
                summary: 'Schemes designed for groups of employees. Build better teams quickly.'

            },
            {
                title: 'Lectures & Seminars',
                image: 'images/product-lecture-image.jpg',
                summary: 'The very best in professional education. Our facilities are among the best.'
            },
            {
                title: 'Team development',
                image: 'images/product-teamdevelopment-image.jpg',
                summary: 'Develop teams to increase efficiency and productivity in a fun environment.'
            },
            {
                title: 'Leadership',
                image: 'images/product-leadership-image.jpg',
                summary: 'Learn how to inspire those around you and how to take ownership.'

            },
            {
                title: 'Morale boosting',
                image: 'images/product-morale-image.jpg',
                summary: 'Motivate and inspire others to offer outstanding service.'
            }
        ];
});