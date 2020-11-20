/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
(() => {
  let globaldata;
  document.getElementById('knop')
      .addEventListener('click', (e) => {
        fetchData();
      },
      true);

  document.getElementById('nameslist')
      .addEventListener('click', showextraFunction, true);

  function fetchData() {
    fetch('https://matthiasdruwe.github.io/Web-MobileCursus/course/12.-JavaScript-04/examples/example12-01.json')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          globaldata = data;
          let outputnames = '';
          for (let i = 0; i < data.length; i++) {
            outputnames += `<section data-index="${data[i].index}">${data[i].name.first} </section>`;
          }
          nameslist.innerHTML = outputnames;
        });
  };
  function showextraFunction(e) {
    // console.log(globaldata[e.target.getAttribute('data-index')].greeting);
    greetingsmyfriend.innerHTML= globaldata[e.target.getAttribute('data-index')].greeting;
  }
})();
