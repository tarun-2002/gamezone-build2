import React from 'react';
import '../FloatingIcons/FloatingIcons.css';

const FloatingIcons = () => {
  return (
    <div className="floating-icons">
      <div className="links">
            <a href="https://youtu.be/x4KxbuZB5Sk">
              <span className="link youtube">
                <img className="social-icons" src="https://ik.imagekit.io/mtmwll7w3/images/youtube.svg?updatedAt=1698121420619" alt="youtube" />
               </span>
            </a>

            <a href="https://www.facebook.com/100068424754008/posts/pfbid06X41cnPmU19mkABrRWZmvqMGwHvdHFVUcgv4Xd3sJgFRZw1P14YqphSthpASYngYl/?mibextid=cr9u03">
              <span className="link facebook">
                <img className="social-icons1" src="https://ik.imagekit.io/mtmwll7w3/images/facebook.svg?updatedAt=1698121420619" alt="facebook" />
               </span>
             </a>

            <a href="https://instagram.com/_gamers_burnout_?igshid=MzRlODBiNWFlZA==">
               <span className="link instagram">
                 <img className="social-icons1" src="https://ik.imagekit.io/mtmwll7w3/images/instagram.svg?updatedAt=1698121420619" alt="instagram" />
              </span>
            </a>

             <a href="https://instagram.com/_gamers_burnout_?igshid=MzRlODBiNWFlZA==">
                <span className="link twitter">
                  <img className="social-icons1" src="https://ik.imagekit.io/mtmwll7w3/images/twitter.svg?updatedAt=1698121420619" alt="twitter" />
                </span>
             </a>
      </div>
    </div>
  );
};

export default FloatingIcons;
