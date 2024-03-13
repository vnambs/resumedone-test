import Link from "next/link";
import FeedBackCssModule from "./feedback.module.css";

export default function FeedBack() {
  return (
    <div className={FeedBackCssModule.gaps}>
      <p>
        <Link href={"#"} className={"link"}>
          Get in touch with our support team
        </Link>{" "}
        if you have any question or want to leave some feedback.
      </p>
      <p>We’ll be happy to hear from you.</p>
    </div>
  );
}
