import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'

export function Sidebar(){
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=50" alt="" />
      
      <div className={styles.profile}>
        <Avatar src="https://github.com/fabnascimento.png" />
        <strong>Fabricio Nascimento</strong>
        <span>Front-end Developer</span>
      </div>

      <footer>
        
        <a href="#">
          <PencilLine size={20}/>
          Editar Perfil
        </a>
      </footer>
    </aside>
  )
}