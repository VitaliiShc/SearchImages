import css from './SearchBar.module.css';

import { Field, Form, Formik } from 'formik';
import { CiSearch } from 'react-icons/ci';
import toast from 'react-hot-toast';

const SearchBar = ({ onSearch }) => {
  return (
    <>
      <header className={css.header}>
        <Formik
          initialValues={{ query: '' }}
          onSubmit={(values, actions) => {
            if (values.query.trim() === '') {
              toast.error('Please enter a search word!', {});
              return;
            }
            onSearch(values.query);
            actions.resetForm();
          }}
        >
          <Form className={css.form}>
            <button type="submit" className={css.btn}>
              <CiSearch size="20" />
            </button>
            <Field
              type="text"
              name="query"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              className={css.input}
            />
          </Form>
        </Formik>
      </header>
      
    </>
  );
};

export default SearchBar;
