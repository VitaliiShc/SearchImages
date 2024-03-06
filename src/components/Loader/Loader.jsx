// import css from './Loader.module.css';
import { ProgressBar } from 'react-loader-spinner';
const Loader = () => {
  return (
    <ProgressBar
      visible={true}
      height="80"
      width="80"
      barColor="red"
      borderColor="darkblue"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
  // <p>Loading articles...</p>;
};

export default Loader;
