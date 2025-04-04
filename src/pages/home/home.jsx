import { useEffect, useState } from 'react';
import { supabase } from "../../services/supabaseClient";
import { formatDate } from '../../utils/formatDate';
import PortalButtons from '../../components/PortalButtons';
import WelcomeBanner from '../../components/WelcomeBanner'; 
import MomentForms from "../../components/MomentForms";
import "../../components/styles.css";
// import PortalOrc from '../../components/PortalOrc'; 
import './home.css';


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

      <MomentForms />

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

    

      </div>
    </div>
  );
}