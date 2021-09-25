import PropTypes from 'prop-types';

import style from 'components/Statistics/Statistics.module.css';

export default function Statistics({title, stats}) {
    const getColor = () =>
    "#" + Math.floor(Math.random() * 16777215).toString(16);

    return (
        <section className={style.statistics}>
  {title && <h2 className={style.title}>{title}</h2>}

  <ul className={style.statList}>
      {stats.map(stat =>(
          <li className={style.stat} key={stat.id} style={{backgroundColor: `${getColor()}`}}>
          <span className={style.label}>{stat.label}</span>
          <span className={style.percentage}>{stat.percentage} %</span>
        </li>
      ))}
    
    
  </ul>
</section>
    );

}

Statistics.propTypes = {
    title: PropTypes.string,
    stat: PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.string.isRequired,
    }),
}