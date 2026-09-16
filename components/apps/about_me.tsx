import styles from './about_me.module.css';
export default function AboutMe({appDispatch}){
  return (<div className={styles.container}>
    <div className={styles.imageContainer}>
      <img className={styles.image} src="profile.jpg" />
      <div>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Cassandra Williams-Pauley</h2>
          <span className={styles.subtitle}>Senior Software Engineer</span>
        </div>
        <div className={styles.pillContainer}>
          <span className="pill pill-blue">C++</span>
          <span className="pill pill-green">Python</span>
          <span className="pill pill-teal">Typescript</span>
          <span className="pill pill-red">SQL</span>
          <span className="pill pill-peach">React</span>
          <span className="pill pill-sky">FastAPI</span>
          <span className="pill pill-mauve">Linux</span>
        </div>
        <div className="text-center">
          <span className={styles.resumeLink} onClick={()=>appDispatch({id:'resume', type:'open'})}>See my resume</span>
        </div>
      </div>
    </div>
  </div>)
}
