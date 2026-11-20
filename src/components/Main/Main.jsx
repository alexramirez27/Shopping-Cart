import { useState } from 'react';
import Card from "../Card/Card.jsx";
import styles from "./Main.module.css";

export default function Main() { 
    return (
        <main>
            <div className={styles["info-and-scores"]}>
                <h3>Get points by clicking on an image but don't click any more than once!</h3>
                <div className={styles.scores}>
                    <h3>Score:</h3>
                    <h3>Best Score:</h3>
                </div>
            </div>
            <div className={styles["main-content"]}>
                <div className={styles["card-container"]}>
                    
                </div>
            </div>
        </main>
    );
}