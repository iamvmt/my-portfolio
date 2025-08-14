import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Abhyudaya",
            description: "A modern cultural fest website of Madan Mohan Malaviya University of Technology built with React, Node.js, Express and MongoDB integration. Features include user authentication, event registration, and secure payment processing.",
            image: "/src/assets/project1.png",
            demoUrl: "https://www.abhyudaya.live",
            githubUrl: "https://github.com/abhyudaya-begin/Abhyudaya-25",
            technologies: ["React", "Node.js", "MongoDB", "Express"]
        },
        {
            id: 2,
            title: "Weather App",
            description: "A real-time weather application that provides accurate weather forecasts, interactive maps, and detailed analytics for multiple locations. Built with React.js, WeatherAPI, Tailwind, JavaScript.",
            image: "/src/assets/project2.png",
            demoUrl: "https://vmtweather.netlify.app/",
            githubUrl: "https://github.com/iamvmt/weather-app",
            technologies: ["React", "Tailwind", "JavaScript", "HTML"]
        },
        // {
        //     id: 3,
        //     title: "Weather Dashboard",
        //     description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics for multiple cities.",
        //     image: "/src/assets/project3.jpg",
        //     demoUrl: "https://example.com",
        //     technologies: ["React", "TypeScript", "Weather API", "Tailwind"]
        // },
        // {
        //     id: 4,
        //     title: "Social Media Analytics",
        //     description: "A comprehensive analytics dashboard for social media management with real-time data visualization and automated reporting features.",
        //     image: "/src/assets/project4.jpg",
        //     githubUrl: "https://github.com",
        //     technologies: ["Angular", "Python", "D3.js", "Django"]
        // }
    ];

    return (
        <section id="projects" className="section-padding bg-white">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
                        My Work
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Here are some of my recent projects that showcase my skills and passion for creating amazing digital experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-slate-100"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 md:h-56 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                    onError={(e) => {
                                        const target = e.target;
                                        const fallbackImages = [
                                            'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
                                            'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
                                            'https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
                                            'https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
                                        ];
                                        target.src = fallbackImages[project.id - 1] || fallbackImages[0];
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-slate-800 mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-slate-600 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3">
                                    {project.demoUrl && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 text-sm font-medium"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            Live Demo
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-800 px-4 py-2 rounded-lg transition-colors duration-300 text-sm font-medium"
                                        >
                                            <Github className="w-4 h-4" />
                                            Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;