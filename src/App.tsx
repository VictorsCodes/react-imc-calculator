import { useState } from "react";
import styles from "./App.module.css";
import poweredImage from "./Assets/powered.png";
import arrowBack from "./Assets/leftarrow.png";
import { GridItem } from "./Components/GridItem";
import { levels, calculateIMC, Level } from "./helpers/imc";

const App = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [showResults, setShowResults] = useState<Level | null>(null);
  const handleCalculateIMC = () => {
    if (height && weight) {
      setShowResults(calculateIMC(height, weight));
    } else {
      alert("Preencha todos os campos");
    }
  };
  const handleClose = () => {
    setShowResults(null);
  };
  return (
    <div className={styles.main}>
      <header>
        <div className={styles.header}>
          <img src={poweredImage} alt="" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftside}>
          <h1>Calcule seu IMC.</h1>
          <p>
            O índice de massa corporal é uma medida internacional usada para
            calcular se uma pessoa está no peso ideal.{" "}
          </p>
          <input
            type="number"
            placeholder="Digite sua altura. Ex: 1.70 (em métros)"
            value={height > 0 ? height : ""}
            onChange={(e) => setHeight(+e.target.value)}
            disabled={showResults ? true : false}
          />
          <input
            type="number"
            placeholder="Digite seu peso. Ex: 80 (em Kg)"
            value={weight > 0 ? weight : ""}
            onChange={(e) => setWeight(+e.target.value)}
            disabled={showResults ? true : false}
          />

          <button
            onClick={handleCalculateIMC}
            disabled={showResults ? true : false}
          >
            Calcular
          </button>
        </div>
        <div className={styles.rightside}>
          {!showResults && (
            <div className={styles.grid}>
              {levels.map((item, index) => (
                <GridItem key={index} item={item} />
              ))}
            </div>
          )}
          {showResults && (
            <div className={styles.rightgrid}>
              <div className={styles.arrowBack} onClick={handleClose}>
                <img src={arrowBack} alt="" width={20} />
                <p>Voltar</p>
              </div>
              <GridItem item={showResults} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
