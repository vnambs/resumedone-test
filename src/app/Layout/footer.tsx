import Link from "next/link";
import layoutCssModule from "./layout.module.css";


export default function Footer() {
  return (
      <div className={layoutCssModule.footer}>
        <Link href="#" passHref legacyBehavior>
          <a className={layoutCssModule.navLink}>Term & Conditions</a>
          </Link>
          
        <Link href="#" passHref legacyBehavior>
          <a className={layoutCssModule.navLink}>Privacy Policy</a>
          </Link>
          
        <Link href="#" passHref legacyBehavior>
              <a className={layoutCssModule.navLink}>FAQ</a>
        </Link>
        
        <Link href="#" passHref legacyBehavior>
          <a className={layoutCssModule.navLink}>Contact US</a>
        </Link>
    </div>
  );
}
