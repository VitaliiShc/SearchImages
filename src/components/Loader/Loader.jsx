import css from './Loader.module.css';
import { ProgressBar } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ProgressBar
      barColor="red"
      borderColor="darkblue"
      wrapperClass={css.loader}
    />
  );
};

export default Loader;
