import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(props){
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/LeoCL95.png" />
          <div className={styles.authorInfo}>
            <strong>Fabricio Nascimento</strong>
            <span>Front-end Developer</span>
          </div>
        </div>
        <time title='11 de outubro 12:20' dateTime='2022-10-11 12:20:00'>
          Publicado no futuro
        </time>
      </header>

      <div className={styles.content}>
        <p>Aoba </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
      </div>
    </article>
  )
}