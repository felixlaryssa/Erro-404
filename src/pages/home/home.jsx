import { useEffect, useState } from 'react';
import { supabase } from "../../services/supabaseClient";
import { formatDate } from '../../utils/formatDate';
import PortalButtons from '../../components/PortalButtons';
import WelcomeBanner from '../../components/WelcomeBanner'; 
// import PortalOrc from '../../components/PortalOrc'; 

export default function Home() {
  const [generalData, setGeneralData] = useState([]);

  const fetchGeneral = async () => {
    const { data, error } = await supabase.from('General').select('*');
    if (error) {
      console.error('Erro ao buscar dados:', error);
    } else {
      setGeneralData(data || []);
    }
  };
  
  useEffect(() => {
    fetchGeneral();
  }, []);

  return (
    <div>
      {/* Botões no canto superior direito */}
      <PortalButtons />
      
      {/* Seção de boas-vindas */}
      <WelcomeBanner />


      {/* Conteúdo existente */}
      <div className="content-container">
        {/* <h1>Google Calendário</h1> */}
        <iframe
          src="https://calendar.google.com/calendar/embed?src=caio.duarte%40orcestra.com.br&ctz=America%2FSao_Paulo"
          style={{ border: '0' }}
          width="400"
          height="200"
          frameBorder="0"
          scrolling="no"
        />

        <h1 className="titulo-Forms" >Forms do Momento:</h1>
        <ul>
          {generalData.map((item, index) => (
            <li key={index}>
              <strong>{item.name}</strong> - <a href={item.link} target="_blank" rel="noopener noreferrer">Link</a> - {formatDate(item.date)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}