/* eslint-disable require-jsdoc */

(function() {
  const lettergrepen = ['ama', 'reg', 'as', 'yt', 'tot', 'dip', 'kul', 'ko', 'uli', 'aze', 'ifu', 'mom', 'vel', 'ema', 'go', 'um', 'se', 'tyl', 'qu', 'fin', 'sij', 'ug', 'muk', 'se', 'fer', 'wil'];

  const klas = [];

  function lettergreep() {
    return lettergrepen[Math.floor(Math.random() * lettergrepen.length)];
  }


  for (let i = 1; i < 23; i++) {
    const student = {
      nummer: 'NR-'+ i,
      voornaam: lettergreep() + lettergreep() + '',
      achternaam: lettergreep() + lettergreep() + lettergreep(),
    };
    klas.push(student);
  }
  console.table(klas);

function maakKlas() {
  
}





})();

