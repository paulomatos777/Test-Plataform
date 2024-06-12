import styles from "./Home.module.css";
import photo from "../../img/home_image.svg";
import LinkButton from "../layout/LinkButton";

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-Vindo ao <span>Exmed Testes</span>
      </h1>
      <p>Gerenciador de Testes Projetos Exmed</p>
      <LinkButton to="/newtask" text="Criar Teste" />
      <img src={photo} alt="photo" className={styles.img} />
    </section>
  );
}
export default Home;
