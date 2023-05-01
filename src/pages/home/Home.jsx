import { useState, useEffect } from 'react'
import {SearchArea, PageContainer, PageArea} from './styled'
import useApi from '../../helpers/OlxApi'
import {AiOutlineSearch} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import AdItem from '../../components/partials/aditem/AdItem'

export const Home = () => {
  const api = useApi()
  
  const [stateList, setStateList] = useState([])
  const [categories, setCategories] = useState([])
  const [adList, setAdList] = useState([])
  
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

  return (
    <>
      <SearchArea>
        <PageContainer>
          <div className="searchBox">
            <form method='GET' action="/ads">
              <input type="text" name='q' placeholder='O que você procura?' />
              <select name="state">
                {stateList.map((i, key) =>
                  <option value={i.name} key={key}>{i.name}</option>
                )}
              </select>
              <button><AiOutlineSearch className='icon-search' />Pesquisar</button>
            </form>
          </div>
          <div className="category-list">
            {categories.map((i, key) =>
              <Link key={key} to={`/ads?cat=${i.slug}`} className='category-item'> 
                <img src={i.img} alt="" />
                <span>{i.name}</span>
              </Link>
            )}
          </div>
        </PageContainer>
      </SearchArea>
      <PageContainer>
        <PageArea>
          <h2>Anúncios Recentes</h2>
          <div className="list">
            {adList.map((i, key) =>
              <AdItem key={key} data={i} />
            )}
          </div>
          <Link to='/ads' className='seeAllLink'>Ver todos &gt;&gt;</Link>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </PageArea>
      </PageContainer>
    </>
  )
}
