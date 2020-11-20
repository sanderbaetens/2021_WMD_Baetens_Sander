/* eslint-disable max-len */
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
          let outputnames = '';
          for (let i = 0; i < data.length; i++) {
            outputnames += `<section data-index="${data[i].index}">${data[i].name.first}</section>`;
          }
          nameslist.innerHTML = outputnames;
          console.log(outputnames);
        });
  };
})();
