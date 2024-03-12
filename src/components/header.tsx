import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="header">
      <div className="header-grid">
        <div className="images-size">
           <Image src='/career.webp' alt='carreer' 
                  width={72} height={72}/>
        </div>
      <div >
        <h4 className="header-title">Premium Account</h4>
        <p className="header-text">
          You have a premium account, granting you access to all the remarkable
          features offered by ResumeDone. With this privilege, you can indulge
          in the freedom of downloading an unlimited number of resumes and
          cover letters in both PDF and Word formats.
        </p>
      </div>
      </div>
      </div>
  );
};

export default Header;
