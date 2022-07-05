export function Post(props){
  const {author, content} = props
  return (
    <div>
      <h6>{author}</h6>
      <p>{content}</p>
    </div>
  )
}
