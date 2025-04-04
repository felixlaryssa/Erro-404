import { useEffect, useState } from 'react';
// import { supabase } from "../../services/supabaseClient";
// import { formatDate } from '../../utils/formatDate';

import PortalButtons from '../../components/PortalButtons';
import WelcomeBanner from '../../components/WelcomeBanner';
import "./home.css";
import NavBar from '../../components/NavBar';
import Btns from '../../components/BtnsMain';
import Forms from '../../components/Forms';


export default function Home() {
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
    <div className="main">
      <NavBar />
      <div className="content">
        <PortalButtons />
        <WelcomeBanner />
        <div className="container-utils">
          <div className='btn-redirect'>
            <Btns/>
            <Forms/>
          </div>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=caio.duarte%40orcestra.com.br&ctz=America%2FSao_Paulo"
            style={{ border: "0" }}
            width="100%"
            height="auto"
            frameBorder="0"
            scrolling="no"
          />
        </div>
      </div>
    </div>
  );
}
