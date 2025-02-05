// import { useState } from "react";
import Button from "./Button";
import styles from "./ValReq.module.css";

function ValReq({ onYesClick }) {
  return (
    <div className={styles.contain}>
      <Button onClick={onYesClick}>Yes</Button>
      <Button onClick={{ display: "none" }}>No</Button>
    </div>
  );
}

export default ValReq;
