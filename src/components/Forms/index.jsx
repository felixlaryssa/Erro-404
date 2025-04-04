import { useEffect, useState } from "react";
import { supabase } from "../../services/supabaseClient";
import { formatDate } from "../../utils/formatDate";
import "./styles.css";

export default function Forms() {
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
      <div className="containerGeral">
        <h1 className="title">Forms do momento</h1>
        <div className="containerMomentForms">
          {generalData.map((item, index) => (
            <div className="key" key={index}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div clasName= "Name">
                    <p >{item.name}</p>
                  </div>
                </a>
                <div>{formatDate(item.date)}</div>
            </div>
          ))}
        </div>
      </div>
  );
}
