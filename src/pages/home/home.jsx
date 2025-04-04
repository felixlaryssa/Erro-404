import MomentForms from "../../components/MomentForms";
import "../../components/styles.css";
import Menu
 from "../../components/Menu";
export default function Home() {
  return (
    <div>
      <iframe className="calendar"
        src="https://calendar.google.com/calendar/embed?src=caio.duarte%40orcestra.com.br&ctz=America%2FSao_Paulo"
        style={{ border: "0" }} // Passando o estilo como objeto
        width="400"
        height="200"
        frameBorder="0" // Propriedade corrigida
        scrolling="no"
      />

      <MomentForms />
    </div>
  );
}