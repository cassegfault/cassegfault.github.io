import styles from './resume.module.css';
export default function Resume(){
  return (<div className={styles.container}>
    <a className={styles.newWindowButton} href="/resume_2026.pdf#view=FitW" target="_blank">Open in New Tab</a>
    <object className={styles.iframe} data="/resume_2026.pdf" type="application/pdf" />
  </div>);
}
