import { useEffect, useState } from "react";
import { supabase } from "./../services/supabaseClient";
import { formatDate } from "./../utils/formatDate";
import "./styles.css";


export default function MomentForms() {
  const [generalData, setGeneralData] = useState([]);

  const fetchGeneral = async () => {
    const { data, error } = await supabase.from("General").select("*");
    if (error) {
      console.error("Erro ao buscar dados:", error);
    } else {
      setGeneralData(data || []);
    }
  };

  useEffect(() => {
    fetchGeneral();
  }, []);
  return (
      <div className="mainContainer">
        <div className="sidebar">
          <h2>ORQUESTRA</h2>
          <ul className="menuList">
            <li> Início</li>
            <li> Gerais</li>
            <li> Direx</li>
            <li> DiBis</li>
            <li> DiCom</li>
            <li> DiTops</li>
            <li> DiProj</li>
          </ul>
        </div>
  
        <div className="containerGeral">
          <h1 className="title">Forms do momento</h1>
          <ul className="containerMomentForms">
            {generalData.map((item, index) => (
              <li key={index}>
                <a
                  className="Name"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name}
                </a>
                <span className="Date">{formatDate(item.date)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
  );
}
