import styles from './dock.module.css';
export default function Dock({apps, appDispatch}) {
  return(<div className={styles.dockContainer}>
    <div className={styles.dock}>
      <div className={`${styles.dockItemWrapper} ${styles.aboutMe}`}>
        <img src="/icons/about_me.svg" 
          className={styles.dockItem}
          onClick={()=>appDispatch({id: 'about_me', type: 'open' })} />
      </div>
      <div className={`${styles.dockItemWrapper} ${styles.resume}`}>
        <img src="/icons/resume.svg" 
          className={styles.dockItem}
          onClick={()=>appDispatch({id: 'resume', type: 'open' })} />
      </div>
      <a href="mailto:cassandrawp@proton.me" className={`${styles.email} ${styles.dockItemWrapper}`} >
        <img src="/icons/email.svg" className={styles.dockItem} />
      </a>
      <a href="https://github.com/cassegfault"  className={`${styles.github} ${styles.dockItemWrapper}`}>
        <img src="/icons/github.svg" className={styles.dockItem}  />
      </a>
      <a href="https://www.linkedin.com/in/cassandra-williams-pauley-196636278/" className={`${styles.linkedIn} ${styles.dockItemWrapper}`}>
        <img src="/icons/linkedin.svg" className={styles.dockItem} />
      </a>
    </div>
  </div>);
}
