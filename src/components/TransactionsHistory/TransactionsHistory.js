import PropTypes from 'prop-types';
import style from 'components/TransactionsHistory/TransactionsHistory.module.css';

export default function TransactionsHistory({items}) {
    return(
        <table className={style.transactionHistory}>
  <thead className={style.thead}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
      {items.map(({id, type, amount, currency}) =>(
        <tr key={id}>
        <td>{type}</td>
         <td>{amount}</td>
         <td>{currency}</td>
        </tr>
      ))}
      
   
   
  </tbody>
</table>
    );
}

TransactionsHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ).isRequired,
}