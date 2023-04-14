import { Comment } from '../Comment'

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

      <form className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>

        <textarea placeholder='Escreva um comentário...' />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
      </div>
    </article>
  )
}