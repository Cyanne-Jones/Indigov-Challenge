'use client'

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { Representative, Constituent, CSVSortBy } from "../utils/typeDefs";
import { ConstituentTable } from "./components/table/ConstituentTable";
import { Snackbar } from "@mui/material";
import { DownloadCsvMenu } from "./components/DownloadCsvMenu";


export default function Home() {
  const [ representative, setRepresentative ] = useState<Representative | null>(null);
  const [ constituents, setConstituents ] = useState<Constituent[] | null>(null);
  const [ showSnackbar, setShowSnackbar ] = useState<boolean>(false);
  const [ snackbarMessage, setSnackbarMessage ] = useState<string>('');

  // use 1, 2, 3 to toggle between different representatives!
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
        setShowSnackbar(true);
        setSnackbarMessage('Error fetching representative information');
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
        setShowSnackbar(true);
        setSnackbarMessage('Error fetching constituent information');
      })
  }, []);

  const handleCSVDownload = (sortBy: CSVSortBy) => {
    fetch(`http://localhost:4000/downloadCSV?representativeId=${representativeId}&sortBy=${sortBy}`)
      .then(res => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'constituents.csv');
        document.body.appendChild(link);
        link.click();
        setShowSnackbar(true);
        setSnackbarMessage('CSV downloaded successfully');
      })
      .catch((e) => {
        console.error(e);
        setShowSnackbar(true);
        setSnackbarMessage('Error downloading CSV');
      })
  }

  const welcomeMessage = representative ? `Welcome back, ${representative.role} ${representative.name}!` : '';

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>{welcomeMessage}</h1>
        <p>View and manage your constituents here!</p>
      </header>
      <div className={styles.buttonContainer}>
        <DownloadCsvMenu
          handleDownloadSelection={handleCSVDownload}
        />
      </div>
      <ConstituentTable constituents={constituents || []} />
      <Snackbar
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={() => setShowSnackbar(false)}
        message={snackbarMessage}
      />
    </div>
  );
}
