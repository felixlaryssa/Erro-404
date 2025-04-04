import "./styles.css";
import logo from '../../assets/menu/logo.svg'; 
import inicioIcon from '../../assets/menu/inicio.svg';
import geraisIcon from '../../assets/menu/gerais.svg';
import direxIcon from '../../assets/menu/direx.svg';
import dibisIcon from '../../assets/menu/dibis.svg';
import dicomIcon from '../../assets/menu/dicom.svg';
import ditopsIcon from '../../assets/menu/ditops.svg';
import diprojIcon from '../../assets/menu/diproj.svg';

export default function NavBar(){
    return (
        <div className="sidebar">
          <div className="containerImage">
            <img src={logo} alt="Orc Esquerda"  />
          </div>
          <div className="menuList">
            <ul><img src={inicioIcon} alt="Início" /> Início</ul>
            <ul><img src={geraisIcon} alt="Gerais" /> Gerais</ul>
            <ul><img src={direxIcon} alt="Direx" /> Direx</ul>
            <ul><img src={dibisIcon} alt="DiBis" /> DiBis</ul>
            <ul><img src={dicomIcon} alt="DiCom" /> DiCom</ul>
            <ul><img src={ditopsIcon} alt="DiTops" /> DiTops</ul>
            <ul><img src={diprojIcon} alt="DiProj" /> DiProj</ul>
          </div>
        </div>
    )
}
