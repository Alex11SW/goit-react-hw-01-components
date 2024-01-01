import React from 'react';
import PropTypes from 'prop-types';
import styles from "./statistics.module.css";


const Statistics = ({ title, stats }) => {
    const statsWithoutLastItem = stats.slice(0, -1);
    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}

            <ul className={styles.statlist}>
                {statsWithoutLastItem.map(({ id, label, percentage }) => (
                    <li key={id} className={styles.item}>
                        <span className={styles.label}>{label}</span>
                        <span className={styles.percentage}>{percentage}%</span>
                    </li>
                ))}

            </ul>
        </section>
    );
};


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;