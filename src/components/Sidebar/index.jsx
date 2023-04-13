import { PencilLine } from 'phosphor-react';

import styles from './styles.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1607350999170-b893fef057ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdvbGZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      />

      <div className={styles.profile}>
        <img src="https://avatars.githubusercontent.com/u/46360769?v=4" />

        <strong>Rafael Santana</strong>
        <span>Front-end Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}