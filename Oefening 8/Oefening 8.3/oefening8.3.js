/* eslint-disable require-jsdoc */

(function() {
  const lettergrepen = ['ama', 'reg', 'as', 'yt', 'tot', 'dip', 'kul', 'ko', 'uli', 'aze', 'ifu', 'mom', 'vel', 'ema', 'go', 'um', 'se', 'tyl', 'qu', 'fin', 'sij', 'ug', 'muk', 'se', 'fer', 'wil'];

  function lettergreep() {
    return lettergrepen[Math.floor(Math.random() * lettergrepen.length)];
  }

  function maakKlas(aantal, moment) {
    const klas = [];
    for (let i = 1; i <= aantal; i++) {
      const student = {
        nummer: 'NR-' + i,
        voornaam: lettergreep() + lettergreep(),
        achternaam: lettergreep() + lettergreep() + lettergreep(),
        klas: moment,
      };
      klas.push(student);
    }
    return klas;
  }
  const klasDag = maakKlas(20, 'dag');
  const klasAvond = maakKlas(10, 'avond');

  console.log(klasAvond);
  console.log(klasDag);

  function toonStudent(nummer, klas) {
    console.log(klas[nummer]);
  };


  function kiesStudent(klas) {
    return Math.floor(Math.random() * klas.length);
  }


  function toonWillekeurigeStudent(klas) {
    toonStudent(kiesStudent(klas), klas);
  }

  for (i = 0; i < 10; i++) {
    toonWillekeurigeStudent(klasDag);
  }

  for (i = 0; i < 10; i++) {
    toonWillekeurigeStudent(klasAvond);
  }
})();
