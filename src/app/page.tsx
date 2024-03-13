import Header from "@/components/header/header";
import styles from "./page.module.css";
import FeedBack from "@/components/profil/FeedBack";
import DeleteAccount from "@/components/profil/DeleteAccount";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.full}>
        <Header />
        
        <h4 className='h4'>Personal Information</h4>
        <FeedBack />
        <DeleteAccount/>

        </div>

    </main>
  );
}
