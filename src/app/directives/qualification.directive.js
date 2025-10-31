angular.module('drNiravPortfolio')
  .directive('qualification', function() {
    return {
      restrict: 'E',
      template: `
        <section class="qualification section" id="qualification">
            <h2 class="section__title">Qualification</h2>
            <span class="section__subtitle">My Educational Journey</span>

            <div class="qualification__container container">
                <div class="qualification__table">
                    <table>
                        <thead>
                            <tr>
                                <th>Degree</th>
                                <th>Institution</th>
                                <th>Year</th>
                                <th>Percentage/CGPA</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr ng-repeat="qual in qualifications" class="qualification__row" ng-style="{'animation-delay': $index * 0.2 + 's'}">
                                <td>{{qual.degree}}</td>
                                <td>{{qual.institution}}</td>
                                <td>{{qual.year}}</td>
                                <td>{{qual.score}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
      `,
      controller: function($scope) {
        $scope.qualifications = [
            {
                degree: 'Ph.D',
                institution: 'University Name',
                year: '2020',
                score: 'Distinction'
            },
            {
                degree: 'M.Sc. IT',
                institution: 'University Name',
                year: '2015',
                score: '8.5 CGPA'
            },
            {
                degree: 'BCA',
                institution: 'University Name',
                year: '2013',
                score: '8.2 CGPA'
            },
            {
                degree: '12th Science',
                institution: 'School Name',
                year: '2010',
                score: '85%'
            },
            {
                degree: '10th',
                institution: 'School Name',
                year: '2008',
                score: '82%'
            }
        ];

        // Animation logic
        angular.element(document).ready(function() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in');
                    }
                });
            }, { threshold: 0.1 });

            const rows = document.querySelectorAll('.qualification__row');
            rows.forEach(row => observer.observe(row));
        });
      }
    };
  });