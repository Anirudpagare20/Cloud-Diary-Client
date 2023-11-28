import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('.footer');
      const scrollThreshold = document.documentElement.scrollHeight - window.innerHeight;

      if (footer) {
        if (window.scrollY > scrollThreshold * 0.9) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className={`footer py-3 ${isVisible ? 'visible' : 'hidden'}`} style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.3s ease-in-out', position: 'fixed', bottom: '0', width: '100%', zIndex: '1000' }}>
      <div className="container">
        <div className="footer-content d-flex justify-content-between align-items-center">
        <div className="footer-social">
            
            <a href="https://www.linkedin.com/in/anirudha-pagare20/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin mx-3"></i>
            </a>
            <a href="https://wa.me/7020484867" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp mx-3"></i>
            </a>
            <a href="mailto:anirudpagare20@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="far fa-envelope mx-3"></i>
            </a>
            <a href="tel:91+7020484867" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-phone mx-3"></i>
            </a>
            <a href="https://github.com/Anirudpagare20" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github mx-3"></i>
            </a>
          </div>
          <div className="footer-made-with-love">
            <span role="img" aria-label="heart emoji">
              Made with ❤️ by Anirudha_Pagare
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
