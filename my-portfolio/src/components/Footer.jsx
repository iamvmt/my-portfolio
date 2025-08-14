import React from 'react';
import { Github, Linkedin, Twitter, Heart, Instagram } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-white section-padding">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold gradient-text mb-4">Vivek Mani Tripathy</h3>
                        <p className="text-slate-300 leading-relaxed">
                            Full-Stack Developer passionate about creating beautiful, 
                            functional web experiences that make a difference.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <nav className="space-y-2">
                            <a href="#home" className="block text-slate-300 hover:text-white transition-colors duration-200">
                                Home
                            </a>
                            <a href="#projects" className="block text-slate-300 hover:text-white transition-colors duration-200">
                                Projects
                            </a>
                            <a href="#contact" className="block text-slate-300 hover:text-white transition-colors duration-200">
                                Contact
                            </a>
                        </nav>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Connect</h4>
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com/iamvmt"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-all duration-200"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="https://linkedin.com/in/iamvmt"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-all duration-200"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="https://instagram.com/iamvmt"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-all duration-200"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-slate-400 flex items-center gap-1">
                        © {currentYear} Made with <Heart className="w-4 h-4 text-red-500" /> by VMT
                    </p>
                    <p className="text-slate-400 mt-2 md:mt-0">
                        All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;