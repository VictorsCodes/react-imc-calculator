import { Level } from "../../helpers/imc";
import styles from "./GridItem.module.css";
import upImage from "../../Assets/up.png";
import downImage from "../../Assets/down.png";

type Props = {
  item: Level;
};

export const GridItem = ({ item }: Props) => {
  return (
    <div className={styles.gridItem} style={{ backgroundColor: item.color }}>
      <div className={styles.icon}>
        <img src={item.icon === "up" ? upImage : downImage} alt="" width={30} />
      </div>
      <div className={styles.title}>{item.title}</div>
      {item.yourIMC && (
        <div className={styles.yourImc}>Seu imc é de {item.yourIMC}kg/m²</div>
      )}
      <div className={styles.info}>
        <>
          IMC está entre <strong>{item.imc[0]}</strong> e{" "}
          <strong>{item.imc[1]}</strong>
        </>
      </div>
    </div>
  );
};
