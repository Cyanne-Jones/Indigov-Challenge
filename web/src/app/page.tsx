'use client'

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { Representative, Constituent } from "../typeDefs/typeDef";


export default function Home() {
  const [ representative, setRepresentative ] = useState<Representative | null>(null);
  const [ constituents, setConstituents ] = useState<Constituent[] | null>(null);

  // would pull this from auth login/app state info in a real app
  const representativeId = 2;

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
    fetch(`http://localhost:4000/constituents?id=${representativeId}`)
      .then(res => res.json())
      .then((data) => {
        setConstituents(data);
      })
      .catch((e) => {
        console.error(e);
      })
  }, []);

  const welcomeMessage = representative ? `Welcome back, ${representative.role} ${representative.name}!` : '';

  return (
    <div className={styles.page}>
      <h1>{welcomeMessage}</h1>
      <p>View and manage your constituents</p>
    </div>
  );
}
