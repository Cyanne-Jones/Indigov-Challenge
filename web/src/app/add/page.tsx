import { AddConstituentForm } from "./components/AddConstituentForm";
import styles from './page.module.css';

const AddConstituentPage = () => {

  return (
    <div className={styles.page}>
      <h1>Add a constituent here!</h1>
      <AddConstituentForm />
    </div>
  )
}

export default AddConstituentPage;