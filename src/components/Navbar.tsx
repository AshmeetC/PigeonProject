// Credits: Eric Chen 
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [highlightStyle, setHighlightStyle] = useState<React.CSSProperties>({});
  const navRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const { offsetLeft, offsetWidth } = event.currentTarget;
    setHighlightStyle({
      left: offsetLeft,
      width: offsetWidth,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setHighlightStyle({});
  };

  return (
  
    <nav ref={navRef} onMouseLeave={handleMouseLeave} className="w-screen py-5 px-8 flex justify-between items-center backdrop-blur-md fixed">
      <a
        href="/#home"
        className="px-5 py-3 relative overflow-hidden justify-start text-2xl hover:font-bold"
      >
        <span className="transition-all duration-300 ease-in-out">Pigeon Project</span>
      </a>
      <div className="flex gap-5 justify-center">
        <div className="absolute bottom-0 h-1 bg-black transition-all" style={highlightStyle} />
        {['Home', 'About', 'Contact'].map((item, index) => (
          <a
            key={index }
            href={`/#${item.toLowerCase()}`}
            onMouseEnter={handleMouseEnter}
            className="px-5 py-3 relative overflow-hidden hover:font-extrabold"
          >
            <span className="transition-all duration-300 ease-in-out">{item}</span>
          </a>
        ))}
      </div>
      <div className="flex gap-5 justify-end">
        <div className="absolute bottom-0 h-1 bg-black transition-all" style={highlightStyle} />
        {['Team', 'Events'].map((item, index) => (
          <Link
            key={index}
            to={`/${item.toLowerCase()}`}
            className="px-5 py-3 relative overflow-hidden hover:font-extrabold"
          >
            <span className="transition-all duration-300 ease-in-out">{item}</span>
          </Link>
        ))}
      </div>
    </nav>

  );
}

export default Navbar;