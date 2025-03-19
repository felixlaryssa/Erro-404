import { useEffect, useState } from 'react';
import { supabase } from "../../services/supabaseClient";
import { formatDate } from '../../utils/formatDate';
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
      <h1>Dados da Tabela General:</h1>
      <ul>
        {generalData.map((item) => (
          <li>
            <strong>{item.name}</strong> - <a href={item.link} target="_blank" rel="noopener noreferrer">Link</a> - {formatDate(item.date)}
          </li>
        ))}
      </ul>
    </div>
  );
}
