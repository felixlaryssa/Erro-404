import React from 'react';
import './styles.css';

import discordIcon from '../../assets/discord.png';
import githubIcon from '../../assets/github.png';
// import telegramIcon from '../../img/telegram.png';
import darkmodeIcon from '../../assets/darkmode.png';

const PortalButtons = () => {
    const handleButtonClick = (buttonName) => {
        console.log(`${buttonName} clicado`);
        // Adicione aqui a lógica específica para cada botão
    };

    return (
        <div className="portal-buttons-container">
        <button 
            className="portal-button orc-login-button"
            onClick={() => handleButtonClick('Orç\'eron login')}
        >
        <img src={discordIcon} alt="discord" className="button-icon" />
        </button>
        
        <button 
            className="portal-button google-drive-button"
            onClick={() => handleButtonClick('Google Drive')}
        >
        <img src={githubIcon} alt="github" className="button-icon" />
        </button>
        
        <button 
            className="portal-button weather-form-button"
            onClick={() => handleButtonClick('Forma de Clima 1')}
        >
        </button>
        
        <button 
            className="portal-button weather-form-button"
            onClick={() => handleButtonClick('Forma de Clima 2')}
        >
        <img src={darkmodeIcon} alt="darkmode" className="button-icon" />
        </button>
        </div>
    );
};

export default PortalButtons;