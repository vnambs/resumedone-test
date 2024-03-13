import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import HeaderCssModule from "./header.module.css";

export type HeaderProps = {  
  color?: "primary" | "secondary" | "white";
};

const Header: React.FC<HeaderProps> = ({ color = "secondary" }) => {
  return (
    <div className={HeaderCssModule["header-main"]}>
      <div 
        className={classNames(
          HeaderCssModule["header-wrapper"],
          HeaderCssModule[color],
        )}
      >
        <div className={HeaderCssModule["image-wrapper"]}>
          <Image src='/career.webp' alt='carreer' width={72} height={72}/>
        </div>
        <div className={HeaderCssModule["content"]}>
          <h4 className={HeaderCssModule.title}>Premium Account</h4>
          <p >
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
