import downImage from "../../assets/down.png";
import upImage from "../../assets/up.png";
import { Level } from "../../helpers/imc";
import styles from "./GridItem.module.css";

type Props = {
  data: Level;
};

export const GridItem = ({ data }: Props) => {
  return (
    <div className={styles.main} style={{ backgroundColor: data.color }}>
      <div className={styles.gridIcon}>
        <img src={data.icon === "up" ? upImage : downImage} width="30" />
      </div>
      <div className={styles.gridTitle}>{data.title}</div>

      {data.yourImc && (
        <div className={styles.yourImc}>Your IMC is {data.yourImc} kg/m²</div>
      )}

      <div className={styles.gridInfo}>
        <>
          IMC is between <strong>{data.imc[0]}</strong> and{" "}
          <strong>{data.imc[1]}</strong>
        </>
      </div>
    </div>
  );
};
