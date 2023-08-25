import { connect } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({ balance }) {
  return <div className="balance">{formatCurrency(balance)}</div>;
}

// OLD way to connect redux to react by using connect API
// new ways are useSelector and useDispatch that used in other file of this project ( recommended and easy 👍)
function mapStateToProps(state) {
  // This state coming from redux
  return {
    balance: state.account.balance,
  };
}
export default connect(mapStateToProps)(BalanceDisplay);
