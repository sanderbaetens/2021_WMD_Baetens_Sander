/* eslint-disable require-jsdoc */
(() => {
  document.getElementById('knop')
      .addEventListener('click', (e) => {
        fetchData();
      },
      true);

  function fetchData() {
    fetch('https://matthiasdruwe.github.io/Web-MobileCursus/course/12.-JavaScript-04/examples/example12-01.json')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data[0]);
        });
  }
})();
