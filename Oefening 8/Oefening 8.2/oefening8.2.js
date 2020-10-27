/* eslint-disable require-jsdoc */

(function() {
  const lettergrepen = ['ama', 'reg', 'as', 'yt', 'tot', 'dip', 'kul', 'ko', 'uli', 'aze', 'ifu', 'mom', 'vel', 'ema', 'go', 'um', 'se', 'tyl', 'qu', 'fin', 'sij', 'ug', 'muk', 'se', 'fer', 'wil'];

  function lettergreep() {
    return lettergrepen[Math.floor(Math.random() * lettergrepen.length)];
  }

  function maakKlas(aantal) {
    const klas=[];
    for (let i = 1; i <= aantal; i++) {
      const student = {
        nummer: 'NR-'+ i,
        voornaam: lettergreep() + lettergreep(),
        achternaam: lettergreep() + lettergreep() + lettergreep(),
      };
      klas.push(student);
    }
    return klas;
  }
  const klasDag = maakKlas(20);
  const klasAvond = maakKlas(10);

  console.log(klasAvond);
  console.log(klasDag);
})();

