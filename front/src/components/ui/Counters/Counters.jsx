import React from "react";
import styles from "../../ui/Counters/Counters.module.scss";

const counters = {
    minute: 9,
    workouts: 3,
    kgs: 4,
};

const Counters = () => {
    //minutes, workouts, kgs

    return (
        <div className={styles.wrapper}>
            {Object.entries(counters).map((item) => (
                <div className={styles.count}>
                    <div className={styles.heading}>{item[0]}</div>
                    <div className={styles.number}>{item[1]}</div>
                </div>
            ))}
        </div>
    );
};

export default Counters;
