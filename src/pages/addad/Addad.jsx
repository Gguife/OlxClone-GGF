import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {PageArea, PageTitle} from './styled'
import {PageContainer, ErrorMessage} from '../../components/MainComponents'
import useApi from '../../helpers/OlxApi'

export const Addad = () => {
  const api = useApi()
  const fileField = useRef()
  const history = useNavigate()

  const [categories, setCategories] = useState([])

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [priceNegotiable, setPriceNegotiable] = useState(false)
  const [desc, setDesc] = useState('')

  const [disabled, setDisabled] = useState(false)
  const [error, setError] = useState('')
  
  useEffect(() => {
    const getCategories = async () =>{
      const cats = await api.getCategories();
      setCategories(cats);
    }        
    getCategories();
  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault()
    setDisabled(true)
    setError('')
    
    let erros = []

    if(!title.trim()){
      erros.push('Sem Título')
    }
    if(!category){
      erros.push('Sem categoria')
    }

    if(erros.length === 0){
      const fData = new FormData()
      fData.append('title', title)
      fData.append('price', price)
      fData.append('priceneg', priceNegotiable)
      fData.append('desc', desc)
      fData.append('cat', category)

      if(fileField.current.files.length > 0){
        for(let i = 0; i < fileField.current.files.length; i++){
          fData.append('img', fileField.current.files[i])
        }
      }

      const json = await api.addAd(fData)

      if(!json.error){
        history(`/ad/${json.id}`)

        return
      }else{
        setError(json.error)
      }

    }else{
      setError(erros.join("\n"))
    }

    setDisabled(false)
  }


  return (
    <div>
      <PageContainer>
        <PageTitle>Faça um post</PageTitle>
        <PageArea>
          {error &&
            <ErrorMessage>{error}</ErrorMessage>
          }
          <form onSubmit={handleSubmit}>
            <label>
              <div className="area">
                <div className="area-title">Título</div>
                <div className="area-input">
                  <input type="text" id='title' disabled={disabled} value={title} onChange={e=>setTitle(e.target.value)} required />
                </div>
              </div>
            </label>
            <label>
              <div className="area">
                <div className="area-title">Categoria</div>
                <div className="area-input">
                  <select disabled={disabled} onChange={e=>setCategory(e.target.value)} required>
                    <option></option>
                    {categories && categories.map(i =>
                      <option key={i._id} value={i._id}>{i.name}</option>  
                    )}
                  </select>
                </div>
              </div>
            </label>
            <label>
              <div className="area">
                <div className="area-title">Preço</div>
                <div className="area-input">
                  <input type="number" placeholder='R$' disabled={disabled || priceNegotiable} value={price} onChange={e=>setPrice(e.target.value)} />
                </div>
              </div>
            </label>
            <label>
              <div className="area">
                <div className="area-title">Preço Negociável</div>
                <div className="area-input">
                  <input type="checkbox" disabled={disabled} checked={priceNegotiable} onChange={e => setPriceNegotiable(!priceNegotiable)} />
                </div>
              </div>
            </label>
            <label>
              <div className="area">
                <div className="area-title">Descrição</div>
                <div className="area-input">
                  <textarea disabled={disabled} value={desc} onChange={e => setDesc(e.target.value)}></textarea>
                </div>
              </div>
            </label>
            <label>
              <div className="area">
                <div className="area-title">Imagens</div>
                <div className="area-input">
                  <input type="file" disabled={disabled} ref={fileField} multiple />
                </div>
              </div>
            </label>
            <label>
              <div className="area">
                <div className="area-title"></div>
                <div className="area-button">
                  <button disabled={disabled} >Adicionar Anúncio</button>
                </div>
              </div>
            </label>
          </form>
        </PageArea>
      </PageContainer>
    </div>
  )
}
