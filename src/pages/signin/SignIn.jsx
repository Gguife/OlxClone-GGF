import { useState } from 'react'
import {PageArea} from './styled'
import {PageContainer, PageTitle, ErrorMessage} from '../../components/MainComponents'
import useApi from '../../helpers/OlxApi'
import {doLogin} from '../../helpers/authHandler'

export const SignIn = () => {
  const api = useApi()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberPassword, setRememberPassword] = useState(false)

  const [disabled, setDisabled] = useState(false)
  const [error, setError] = useState('')
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setDisabled(true)
    setError('')

    const json = await api.login(email, password)

    if(json.error){
      setError(json.error)
    }else{
      doLogin(json.token, rememberPassword)
      window.location.href = '/'
    }

    setDisabled(false)
  }

  
  return (
    <PageContainer>
      <PageTitle>Login</PageTitle>
      <PageArea>
        {error &&
          <ErrorMessage>{error}</ErrorMessage>
        }
        <form onSubmit={handleSubmit}>
          <label>
            <div className="area">
              <div className="area-title">Email</div>
              <div className="area-input">
                <input type="email" disabled={disabled} value={email} onChange={e=>setEmail(e.target.value)} required />
              </div>
            </div>
          </label>
          <label>
            <div className="area">
              <div className="area-title">Password</div>
              <div className="area-input">
                <input type="password" disabled={disabled} value={password} onChange={e=>setPassword(e.target.value)} required />
              </div>
            </div>
          </label>
          <label>
            <div className="area">
              <div className="area-title">Lembrar Senha</div>
              <div className="area-input">
                <input type="checkbox" disabled={disabled} value={rememberPassword} checked={rememberPassword} onChange={() => setRememberPassword(!rememberPassword)} />
              </div>
            </div>
          </label>
          <label>
            <div className="area">
              <div className="area-title"></div>
              <div className="area-button">
                <button disabled={disabled} >Fazer Login</button>
              </div>
            </div>
          </label>
        </form>
      </PageArea>
    </PageContainer>
  )
}
