import React, { useEffect } from 'react';
import './Qualification.css';

const Qualification = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, { threshold: 0.1 });

        const rows = document.querySelectorAll('.qualification__row');
        rows.forEach(row => observer.observe(row));

        return () => {
            rows.forEach(row => observer.unobserve(row));
        };
    }, []);

    const qualifications = [
        {
            degree: 'Ph.D',
            institution: 'University Name',
            year: '2020',
            score: 'Distinction',
        },
        {
            degree: 'M.Sc. IT',
            institution: 'University Name',
            year: '2015',
            score: '8.5 CGPA',
        },
        {
            degree: 'BCA',
            institution: 'University Name',
            year: '2013',
            score: '8.2 CGPA',
        },
        {
            degree: '12th Science',
            institution: 'School Name',
            year: '2010',
            score: '85%',
        },
        {
            degree: '10th',
            institution: 'School Name',
            year: '2008',
            score: '82%',
        },
    ];

    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Educational Journey</span>

            <div className="qualification__container container">
                <div className="qualification__table">
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
                            {qualifications.map((qual, index) => (
                                <tr 
                                    key={index} 
                                    className="qualification__row"
                                    style={{ animationDelay: `${index * 0.2}s` }}
                                >
                                    <td>{qual.degree}</td>
                                    <td>{qual.institution}</td>
                                    <td>{qual.year}</td>
                                    <td>{qual.score}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Qualification;
