import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-emerald-900 text-white py-12 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-2xl font-bold">KeenKeeper</h2>
    <p className="mt-2 text-emerald-200 text-sm">Your personal shelf of meaningful connections.</p>
    
    <div className="flex justify-center gap-4 my-6">
      <span className="w-8 h-8 bg-emerald-800 rounded-full"></span>
      <span className="w-8 h-8 bg-emerald-800 rounded-full"></span>
    </div>

    <nav className="flex justify-center gap-6 text-sm text-emerald-200">
      <a href="#" className="hover:underline">Privacy Policy</a>
      <a href="#" className="hover:underline">Terms of Service</a>
      <a href="#" className="hover:underline">Cookies</a>
    </nav>
    
    <p className="mt-8 text-xs text-emerald-400">&copy; 2026 KeenKeeper. All rights reserved.</p>
  </div>
</footer>
        </div>
    );
};

export default Footer;