
import Link from "next/link";
import DeleteCssModule from "./delete.module.css";
import classNames from "classnames";

export default function DeleteAccount() {
  return (
    <div style={{ margin: "20px 0px" }}>
      <div 
        className={classNames(
          DeleteCssModule["delete-wrapper"],
          DeleteCssModule["white"],
        )}
      ><div className={DeleteCssModule.content}>
          <div className={DeleteCssModule.title}>Delete account</div>
          <p className='text-medium'>
            If you delete your account you’ll be permanently removing it from
            our systems - you can’t undo it.
          </p>
          <Link href={"#"} className='text-gray text-bold'>
            Yes, Delete my account
          </Link>
        </div>
      </div>
      </div>
  );
}
