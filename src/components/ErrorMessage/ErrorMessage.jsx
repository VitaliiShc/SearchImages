import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return <p className={css.errorMsg}>Error! Reload the page!</p>;
};

export default ErrorMessage;
