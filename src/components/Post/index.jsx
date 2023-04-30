import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { v4 as uuidv4 } from 'uuid';

import { Avatar } from '../Avatar';
import { Comment } from '../Comment';

import { useState } from 'react';
import styles from './styles.module.css';

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState('');

  function handleChangeNewCommentText(event) {
    setNewCommentText(event.target.value);
  }

  function handleCreateNewComment(event) {
    event.preventDefault();

    const newComment = {
      id: uuidv4(),
      author: 'Diego Fernandes',
      content: newCommentText,
      createdAt: new Date(),
    }

    setComments([...comments, newComment]);
    setNewCommentText('');
  }

  function deleteComment(id) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment.id !== id;
    });

    setComments(commentsWithoutDeletedOne);
  }

  const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>
          
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time 
          title={publishedDateFormatted} 
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          return (
            <p key={line.id}>
              {line.content.map(item => {
                if (item.type === 'text') {
                  return item.content
                } 
                
                if (item.type === 'link') {
                  return <a key={item.id} href=''>{item.content}{' '}</a>
                }
              })}
            </p>
          )
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>

        <textarea 
          placeholder='Escreva um comentário...'
          value={newCommentText}
          onChange={handleChangeNewCommentText}
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => (
          <Comment 
            key={comment.id}
            data={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  )
}