import React, { useState, useRef } from 'react';

const Navbar: React.FC = () => {
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
    <div ref={navRef} onMouseLeave={handleMouseLeave} className="w-screen py-3 px-3 flex gap-5 justify-center relative">
      <div className="absolute bottom-0 h-1 bg-black transition-all" style={highlightStyle} />
      {['Home', 'Projects', 'About', 'Contact'].map((item, index) => (
        <a
          key={index}
          href={`/${item.toLowerCase()}`}
          onMouseEnter={handleMouseEnter}
          className="px-5 py-3 relative overflow-hidden"
        >
          <span className="transition-all duration-300 ease-in-out">
            {item}
          </span>
        </a>
      ))}
    </div>
  );
};

export default Navbar;
