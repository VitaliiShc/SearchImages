const scrollDetector = () => {
  const main = document.querySelector("main");
  console.log("main: ", main);
  const form = document.querySelector("form");

  console.log("form: ", form);
  console.log("window.innerHeight: ", window.innerHeight);
  console.log("document.body.offsetHeight: ", document.body.offsetHeight);

  if (document.body.offsetHeight <= window.innerHeight) {
    console.log("NO SCROLL");
    main.style.marginRight = "17";
    form.style.right = "17";
  } else {
    main.style.marginRight = "0";

    form.style.right = "0";
  }
};

export default scrollDetector;
