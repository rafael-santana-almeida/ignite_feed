import { ThumbsUp, Trash } from 'phosphor-react';

import { Avatar } from '../Avatar';

import styles from './styles.module.css';

export function Comment({ data, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(data.id);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/diego3g.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{data.author}</strong>
              <time title='13 de Abril ás 20:57' dateTime='2023-04-13 20:57:38'>Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário' onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>

          <p>{data.content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}