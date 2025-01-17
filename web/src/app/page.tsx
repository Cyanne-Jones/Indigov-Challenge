'use client'

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { Representative, Constituent } from "../typeDefs/typeDef";
import { ConstituentTable } from "./components/ConstituentTable";
import { Button } from "@mui/material";


export default function Home() {
  const [ representative, setRepresentative ] = useState<Representative | null>(null);
  const [ constituents, setConstituents ] = useState<Constituent[] | null>(null);

  // would pull this from auth login/app state info in a real app
  const representativeId = 3;

  useEffect(() => {
    // fetch the representative from the backend
    fetch(`http://localhost:4000/representative?id=${representativeId}`)
      .then(res => res.json())
      .then((data) => {
        setRepresentative(data);
      })
      .catch((e) => {
        console.error(e);
      })
  }, []);

  useEffect(() => {
    // fetch the constituents from the backend
    fetch(`http://localhost:4000/constituents?representativeId=${representativeId}`)
      .then(res => res.json())
      .then((data) => {
        setConstituents(data);
      })
      .catch((e) => {
        console.error(e);
      })
  }, []);

  const handleCSVDownload = () => {
    console.log('Download CSV');
  }

  const welcomeMessage = representative ? `Welcome back, ${representative.role} ${representative.name}!` : '';

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>{welcomeMessage}</h1>
        <p>View and manage your constituents here!</p>
      </header>
      <div className={styles.buttonContainer}>
        <Button 
          variant="outlined" 
          color="primary"
          onClick={handleCSVDownload}
        >
          Download CSV
        </Button>
      </div>
      <ConstituentTable constituents={constituents || []} />
    </div>
  );
}
