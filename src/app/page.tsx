import { Clock } from "./_components/clock";
import styles from "~/styles/main.module.css";

export default function Home() {
  const mainClass = `${styles.main} flex min-h-screen flex-col items-center justify-center bg-white bg-gradient-to-b text-black`;

  return (
    <main className={mainClass}>
      <div className="container flex flex-col items-center justify-center gap-4 px-4 py-16">
        <Clock />
      </div>
    </main>
  );
}
