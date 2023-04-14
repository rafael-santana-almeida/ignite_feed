import styles from './styles.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/46360769?v=4"/>
          <div className={styles.authorInfo}>
            <strong>Rafael Santana</strong>
            <span>Front-end Developer</span>
          </div>
        </div>

        <time title='13 de Abril ás 20:57' dateTime='2023-04-13 20:57:38'>Publicado há 1 hora</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 <a href=''>jane.design/doctorcare</a></p>
        <p>
          <a href=''>#novoprojeto </a> 
          <a href=''>#nlw </a> 
          <a href=''>#rocketseat </a>
        </p>    
      </div>
    </article>
  )
}