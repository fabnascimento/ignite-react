import styles from './Post.module.css'

export function Post(props){
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/10579529?v=4" alt="" />
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
    </article>
  )
}