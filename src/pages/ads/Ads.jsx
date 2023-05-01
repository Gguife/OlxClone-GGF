import { useState, useEffect } from 'react'
import { PageArea, PageContainer } from './styled'
import useApi from '../../helpers/OlxApi'
import { useLocation, useNavigate} from 'react-router-dom'
import AdItem from '../../components/partials/aditem/AdItem'

let timer

export const Ads = () => {
  const api = useApi()
  const history = useNavigate()

  const useQueryString = () =>{
    return new URLSearchParams(useLocation().search)
  }

  const query = useQueryString()

  const [q, setQ] = useState( query.get('q') != null ? query.get('q') : '' )
  const [cat, setCat] = useState( query.get('cat') != null ? query.get('cat') : '' )
  const [state, setState] = useState( query.get('state') != null ? query.get('state') : '' )

  const [adsTotal, setAdsTotal] = useState(0)
  const [stateList, setStateList] = useState([])
  const [categories, setCategories] = useState([])
  const [adList, setAdList] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const [loading, setLoading] = useState(true)

  const getAdsList = async () =>{
    setLoading(true)
    let offset = (currentPage - 1) * 2;   

    const json = await api.getAds({
      sort:'desc',
      limit: 9,
      q,
      cat,
      state,
      offset
    })
    setAdList(json.ads)
    setAdsTotal(json.total)
    setLoading(false)
  }
  
  useEffect(() =>{
    if(adList.length > 0){
     setPageCount( Math.ceil( adsTotal / adList.length )) 
    }else{
      setPageCount(0)
    }
  }, [adsTotal])

  useEffect(() =>{
    getAdsList()
  }, [currentPage])

  useEffect(() =>{
    let queryString = []
    if(q){
      queryString.push(`q=${q}`)
    }
    if(cat){
      queryString.push(`cat=${cat}`)
    }
    if(state){
      queryString.push(`state=${state}`)
    }

    history({
      search: `?${queryString.join('&')}`
    })

    if(timer){
      clearTimeout(timer)
    }
    timer = setTimeout(getAdsList, 2000) 
    setCurrentPage(1)
  }, [q, cat, state])

  //STATE
  useEffect(() =>{
    const getStates = async () =>{
      const sList = await api.getStates()
      setStateList(sList)
    }
    getStates()
  }, [])

  //CATEGORIES
  useEffect(() =>{
    const getCategories = async () =>{
      const cats = await api.getCategories()
      setCategories(cats)
    }
    getCategories()
  }, [])

  //ADS
  useEffect(() =>{
    const getRecentAds = async () =>{
      const json = await api.getAds({
        sort:'desc',
        limit: 8
      })
      setAdList(json.ads)
    }
    getRecentAds()
  }, [])

  let pagination = [];

  for(let i = 1; i <= pageCount; i++){
    pagination.push(i)
  }

  return (
    <PageContainer>
      <PageArea>
        <div className='left-side'>
          <form method='GET'>
            <input type="text" name='q' placeholder='O que você procura?' value={q} onChange={e => setQ(e.target.value)} />

            <div className="filter-name">Estado:</div>
            <select name="state" value={state} onChange={e => setState(e.target.value)}>
              {stateList.map((i, k) =>
                <option key={k} value={i.name}>{i.name}</option>
              )}
            </select>

            <div className="filter-name">Categoria:</div>
            <ul>
              {categories.map((i, key) =>
                <li key={key} className={cat == i.slug ? 'category-item active' : 'category-item'} onClick={() => setCat(i.slug)} >
                  <img src={i.img} alt="" />
                  <span>{i.name}</span>
                </li>
              )}
            </ul>
          </form>
        </div>
        <div className='right-side'>
          <h2>Resultados</h2>
          
          {loading && adList.length === 0 &&
            <div className="list-warning">Carregando...</div>
          }
          {!loading && adList.length === 0 &&
            <div className="list-warning">Resultado não encontrado</div>
          }

          <div className="list">
            {adList.map((i, key) =>
              <AdItem key={key} data={i} />
            )}
          </div>

          <div className="pagination">
            {pagination.slice(0, 5).map((i, key) =>
              <div onClick={() =>{setCurrentPage(i)}} className={i === currentPage ? 'page-item active' : 'page-item'} key={key}>{i}</div>
            )}
          </div>
        </div>
      </PageArea>
    </PageContainer>
  )
}
