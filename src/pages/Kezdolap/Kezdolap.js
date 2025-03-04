import React from 'react';
import './Kezdolap.css';
import profileImage from '../../assets/img/adam_rolam_oldal.jpg'; // Replace with your actual image path

function Kezdolap() {
  return (
    <div className="home">
      <h1>Hello, a nevem Ádám.</h1>
      <div className="content">
        <div className="text">
          <h2>
            „A jövőt azok alakítják, akik képesek elképzelni és megvalósítani.”
            – Alan Turing
          </h2>
          <p>
            Horváth Ádám István vagyok, CAD-CAM technológus és informatikai
            fejlesztő, aki elkötelezett az adatelemzés, a szoftverfejlesztés és
            a digitális megoldások iránt.
          </p>
          <p>
            Tapasztalatom kiterjed a gyártástechnológiára, adatfeldolgozásra és
            az ipari folyamatok optimalizálására. Az informatikában különböző
            technológiákkal és nyelvekkel dolgozom, beleértve a JavaScriptet, a
            Reactet, valamint az adatbázis-kezelést és az automatizált
            rendszerek fejlesztését.
          </p>
          <p>
            A célom, hogy intuitív, jól strukturált és modern technológiákkal
            támogatott rendszereket építsek, amelyek hozzájárulnak a hatékonyabb
            és átláthatóbb munkavégzéshez.
          </p>
        </div>
        <div className="image">
          <img src={profileImage} alt="Horváth Ádám István" />
        </div>
      </div>
    </div>
  );
}

export default Kezdolap;
