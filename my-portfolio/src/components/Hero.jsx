import React from 'react';
import { ChevronDown, Mail, Download } from 'lucide-react'; // Add Download icon
import profile from '../assets/profile.jpg'; // Adjust the path as necessary

const Hero = () => {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
            </div>

            <div className="container mx-auto section-padding text-center relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Profile Image */}
                    <div className="mb-8 flex justify-center">
                        <div className="relative">
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                                <img
                                    src={profile}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                    onError={e => {
                                        e.target.src = ``;
                                    }}
                                />
                            </div>
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                        </div>
                    </div>

                    {/* Name and Title */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text">
                        Vivek Mani Tripathy
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto font-light">
                        Full-Stack Developer & Software Engineer
                    </p>
                    
                    <p className="text-lg text-slate-500 mb-12 max-w-3xl mx-auto leading-relaxed">
                        I craft beautiful, functional web experiences that bring ideas to life. 
                        Passionate about clean code, intuitive design, and solving complex problems 
                        with elegant solutions.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                        <button
                            onClick={scrollToContact}
                            className="btn-primary flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                        >
                            <Mail className="w-5 h-5" />
                            Hire Me
                        </button>
                        <a
                            href="/Resume Template DevVMT.pdf"
                            download
                            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white border border-blue-600 text-blue-700 font-semibold shadow hover:bg-blue-50 transition"
                        >
                            <Download className="w-5 h-5" />
                            Download My Resume
                        </a>
                    </div>
                    <div className="flex justify-center mb-16">
                        <a
                            href="#projects"
                            className="text-slate-600 hover:text-blue-600 transition-colors duration-300 flex items-center gap-2 font-medium text-lg"
                        >
                            View My Work
                            <ChevronDown className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <ChevronDown className="w-6 h-6 text-slate-400" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;