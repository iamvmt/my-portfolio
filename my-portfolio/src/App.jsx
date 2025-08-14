import React from 'react';
import { Toaster } from 'react-hot-toast';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return React.createElement(
    'div',
    { className: 'min-h-screen' },
    React.createElement(Hero, null),
    React.createElement(Projects, null),
    React.createElement(Contact, null),
    React.createElement(Footer, null),
    React.createElement(Toaster, {
      position: 'top-center',
      toastOptions: {
        style: {
          background: '#1f2937',
          color: '#f9fafb',
          padding: '16px 24px',
          borderRadius: '12px',
          fontSize: '14px',
        },
      },
    })
  );
}

export default App;