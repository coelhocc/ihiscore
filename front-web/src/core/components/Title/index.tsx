import './styles.scss'

type Props = {
  title: string
}

const Title = ( { title } : Props) => (
  <h1 className="text-title">
    { title } 
  </h1>
)

export default Title;