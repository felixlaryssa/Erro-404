import React from "react";
import "./styles.css";

import discordIcon from "../../assets/discord.png";
import githubIcon from "../../assets/github.png";
import telegramIcon from "../../assets/telegram.svg";
import darkmodeIcon from "../../assets/darkmode.png";

const PortalButtons = () => {
  const handleButtonClick = (buttonName) => {
    console.log(`${buttonName} clicado`);
  };

  return (
    <div className="portal-buttons-container">
      <button
        className="portal-button orc-login-button"
        onClick={() =>
          window.open(
            "https://discord.com/channels/634970646576758795/704777352856731688discord.com",
            "_blank"
          )
        }
      >
        <img src={discordIcon} alt="discord" className="button-icon" />
      </button>

      <button
        className="portal-button google-drive-button"
        onClick={() =>
          window.open("https://github.com/OrcestraGamificacao", "_blank")
        }
      >
        <img src={githubIcon} alt="github" className="button-icon" />
      </button>

      <button
        className="portal-button weather-form-button"
        onClick={() => window.open("https://t.me/+8o19P3H858k4Yzk5", "_blank")}
      >
        <img src={telegramIcon} alt="discord" className="button-icon" />
      </button>

      <button
        className="portal-button weather-form-button"
        onClick={() => handleButtonClick("Forma de Clima 2")}
      >
        <img src={darkmodeIcon} alt="darkmode" className="button-icon" />
      </button>
    </div>
  );
};

export default PortalButtons;
