    // import React from "react";
    // import { createClient } from '@supabase/supabase-js';

    // const OrcButtons = () => {
    // // Configuração do Supabase
    // const SUPABASE_URL = 'https://supabase.com/dashboard/project/ohigwnflyvseisqxweqw';
    // const SUPABASE_ON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9oaWd3bmZseXZzZWlzcXh3ZXF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0MTk4MjgsImV4cCI6MjA1Nzk5NTgyOH0.UYcQQWCDCftijuTLdt8VoKdLZsmz2A9VYMm06tlIQeo';
    // const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    // // Função para buscar o link no Supabase
    // const handleOrcButtonClick = async () => {
    //     try {
    //     const { data, error } = await supabase
    //         .from('links')
    //         .select('url')
    //         .limit(1)
    //         .single();

    //     if (error) throw error;
    //     if (data?.url) window.location.href = data.url;
    //     else console.log('Link não encontrado!');
    //     } catch (err) {
    //     console.error('Erro ao buscar dados:', err);
    //     }
    // };

    // // Função para redirecionar ao Google Drive
    // const handleDriveButtonClick = () => {
    //     window.location.href = 'https://drive.google.com/drive/u/0/folders/1Jvx9UyzYFCsqJYNeqS5wPM4YVnN8RqL8';
    // };

    // return (
    //     <div className="orc-buttons-container">
    //     {/* Botão Orc'cronologia */}
    //     <button className="orc-button" onClick={handleOrcButtonClick}>
    //         <img 
    //         src="https://s3-alpha-sig.figma.com/img/2aad/3cac/6241014c208c7f4bc16da5fa9301c712?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lopw6k5712M~VVsi48I09~6GOCsp50PQOxcbAHVvkNS1Ke1pPuapWett3A1LlXG2qsJ4Sv649K7gWRZgJfC-yRbHGm-yOIUmFpYnnbOuu9WejprPpFJqhnKKQT3l29bp-0IJxEQ~SYxZHaGQilcSev0ndlmJSUi9tkjo1iNs97x8e4Tj3ddXh2Y1AqlUIpQMpqMyLChC1mR9K90TSi5jSje6IoanSgpUbUJK4ugtGQAdfxuwnUosLsPz6MXQ3x21Tk4WSt93SbPf1-vwSlEd9cIiKb5iecoEFpPwnRQf9dx-VRbLd87W19ZG-7e8PxAoptwRKzkqbS0sxJhJLsmncQ__" 
    //         alt="Ícone" 
    //         className="orc-image" 
    //         />
    //         Orc'crono<br />logia
    //     </button>

    //     {/* Botão Google Drive */}
    //     <button className="orc-button" onClick={handleDriveButtonClick}>
    //         <img 
    //         src="https://s3-alpha-sig.figma.com/img/b88c/2a6d/d0c3965dd591f7691fd06e8292c76433?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Dat33BN47dM73Sc0KUQoeeY-BHO-vRLZPV4oBgDPR8xQjO1YhiVlYrS4ki6UkVZfNQ23dP0To2KrMU2CHuOD1IoK5PSB9CkA8gJ7EVawrz--gZLB3iVfBFW9JnjerDUKnd8JsfRvSS9YxVajbAL4TSF9BEeZeBqsOhptFOvXKJomMbKvXXLbG2Lnxi2FEdENZGpEvV5JXEATNIhU8qt5UKAZR7Fz5-k~R3yb3JPt1f5EfZD0JpIu4tzWRCeuccaOguD-Dia-Bkes~BTL1p5PB6r96DaO06ocxuv2s300ZewsQfZJ5aTTmp6i4BJLm15mEhua9KmqHDbQnlHF8Jijfw__" 
    //         alt="Google Drive" 
    //         className="orc-image" 
    //         />
    //         Google<br />Drive
    //     </button>
    //     </div>
    // );
    // };

    // export default PortalOrc;