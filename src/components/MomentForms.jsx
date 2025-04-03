import { useEffect, useState } from 'react';
import { supabase } from "./../services/supabaseClient";
import { formatDate } from './../utils/formatDate';
import "./styles.css"


export default function MomentForms() {
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
    <div className='containerGeral'>
      <h1 className='title'>Forms do momento</h1>
      <ul className="containerMomentForms">
        {generalData.map((item) => (
          <li>
            <span className='Name'>{item.name}</span> {" "}
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              Link
            </a>{" "}
            <span className='Date'>{formatDate(item.date)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}