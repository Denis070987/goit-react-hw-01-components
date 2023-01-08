import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function randColor() {
    var r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256));
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

export const Statistics = ({ title, stats }) => {return (
    <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}

        <ul className={css.stat__list}>
            {stats.map(({ id, label, percentage }) => {
                return (
        <li className={css.item}
            key={id}
            style={{backgroundColor: randColor()}}>
                        <span className={css.label}>{label}</span>
                        <span className={css.percentage}>{ percentage}</span>
    </li>
                )
            })}
    
    </ul>
</section>
)
}

Statistics.propTypes = {
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
}