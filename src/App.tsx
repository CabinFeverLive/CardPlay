import React from "react";
import Deck from "./components/Deck";

import styles from "./styles.module.css";

export default function App() {
  return (
    <div className={styles.container}>
      <Deck />
    </div>
  );
}
