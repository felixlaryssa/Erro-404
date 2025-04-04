import React from 'react';
import './styles.css';
import orcImage from '../../assets/orc.png'; // Importa a imagem
import patoImage from '../../assets/pato.png'; // Importa a imagem

const WelcomeBanner = () => {
    return (
        <div className="welcome-banner">
            <img src={orcImage} alt="Orc Esquerda" className="banner-image-left" />
            <h1 className="welcome-title">Seja muito Bem-vindo ao Portal Orc !</h1>
            <img src={patoImage} alt="Orc Direita" className="banner-image-right" />
        </div>
    );
};

export default WelcomeBanner;
