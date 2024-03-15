// import cssForm from './components/SearchBar/SearchBar.module.css';
// import cssMain from './components/App/App.module.css';

const scrollDetector = () => {
  const main = document.querySelector('main');
  console.log('main: ', main);
  // const form = document.getElementsByClassName(cssForm.form);
  const form = document.querySelector('form');

  console.log('form: ', form);
  console.log('window.innerHeight: ', window.innerHeight);
  console.log('document.body.offsetHeight: ', document.body.offsetHeight);

  if (document.body.offsetHeight <= window.innerHeight) {
    console.log('NO SCROLL');
    main.style.marginRight = '17';
    form.style.right = '17';
  } else {
    main.style.marginRight = '0';

    form.style.right = '0';
  }
};

export default scrollDetector;


// https://ru.stackoverflow.com/questions/79543/%d0%9f%d0%be%d1%8f%d0%b2%d0%bb%d0%b5%d0%bd%d0%b8%d0%b5-%d0%bf%d0%be%d0%bb%d0%b7%d1%83%d0%bd%d0%ba%d0%b0-%d0%bd%d0%b5-%d0%b2%d0%bb%d0%b8%d1%8f%d0%b5%d1%82-%d0%bd%d0%b0-%d0%bf%d0%be%d0%bb%d0%be%d0%b6%d0%b5%d0%bd%d0%b8%d0%b5-%d1%81%d1%82%d1%80%d0%b0%d0%bd%d0%b8%d1%86%d1%8b
// https://ru.stackoverflow.com/questions/173583/%D0%9A%D0%B0%D0%BA-%D1%83%D0%B1%D1%80%D0%B0%D1%82%D1%8C-%D1%81%D0%B4%D0%B2%D0%B8%D0%B3-%D1%81%D0%B0%D0%B9%D1%82%D0%B0-%D0%BF%D1%80%D0%B8-%D0%BF%D0%BE%D1%8F%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B8-%D0%BF%D0%BE%D0%BB%D0%BE%D1%81%D1%8B-%D0%BF%D1%80%D0%BE%D0%BA%D1%80%D1%83%D1%82%D0%BA%D0%B8