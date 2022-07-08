import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment(){
  return (
    <div className={styles.comment}>
      <img src="https://github.com/fabnascimento.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Alguem</strong>
              <time 
                title='11 de marco as 00:13'
                dateTime='2022-03-11 00:13'
              >
                Um tempo ai
              </time>
            </div>

            <button title='Deletar comentario'>
              <Trash size={24}/>
            </button>
          </header>
          <p>
            Save forte
          </p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span />20
          </button>
        </footer>
      </div>
    </div>
  )
}