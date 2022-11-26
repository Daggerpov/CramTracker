import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

export default function EnglishWriting() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Cram Tracker</title>
                <meta
                    name="Cram Tracker - A tool for scheduling and tracking your cramming sessions"
                    content="Providing crammers with tools and adaptive metrics to help them schedule and get through their assignments with ease."
                />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>English Writing</h1>
            </main>
        </div>
    );
}