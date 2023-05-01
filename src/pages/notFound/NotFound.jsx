import {Link} from 'react-router-dom'
import {NotFoundArea} from './styled'

export const NotFound = () => {
  return (
    <NotFoundArea>
      <div className='container'>
        <h1>404</h1>
        <span>Página não encontrada</span>
        <Link to='/'>Voltar para a Página Inicial</Link>
        </div>
    </NotFoundArea>
  )
}
