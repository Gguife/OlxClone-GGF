//Hooks
import { useState, useEffect } from "react"
import {useParams, Link} from 'react-router-dom'
//Api
import useApi from '../../helpers/OlxApi'
//styled
import {PageContainer} from  './styled'
import {Fake, PageArea, OthersArea, BreadChumb} from './styled'
import AdItem from '../../components/partials/aditem/AdItem'
//slide
import {Slide} from 'react-slideshow-image'
import "react-slideshow-image/dist/styles.css"



export const AdPage = () => {
  const api = useApi()
  const { id } = useParams()

  const [loading, setLoading] = useState(true)
  const [adInfo, setAdInfo] = useState({})

  useEffect(() =>{
    const getAdInfo = async (id) =>{
      const json = await api.getAd(id, true)
      setAdInfo(json)
      setLoading(false)
    }
    getAdInfo(id)
  },[])

  const formatDate = (date) =>{
    let cDate = new Date(date)
    let months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

    let cDay = cDate.getDate()
    let cMonth = cDate.getMonth()
    let cYear = cDate.getFullYear()

    return `${cDay} de ${months[cMonth]} de ${cYear}`
  } 


  return (
    <PageContainer>
      {adInfo.category &&
        <BreadChumb>
          Você está aqui:
          <Link to='/'> Home </Link> 
          / 
          <Link to={`/ads?state=${adInfo.stateName}`}> {adInfo.stateName} </Link>    
          / 
          <Link to={`/ads?state=${adInfo.stateName}&cat=${adInfo.category.slug}`}> {adInfo.category.name} </Link>
          / {adInfo.title}
        </BreadChumb>
      }
      <PageArea>
        <div className="left-side">
          <div className="box">
            <div className="ad-img">
              {loading && <Fake height={300} />}
              {adInfo.images &&
                <Slide>
                  {adInfo.images.map((img, key) =>
                    <div className="each-slide" key={key}>
                      <img src={img} alt=''/>
                    </div>
                   )}
                </Slide>
              }  
            </div>
            <div className="ad-info">
              <div className="ad-name">
                {loading && <Fake height={20} />}
                {adInfo.title &&
                  <h2>{adInfo.title}</h2>
                }
                {adInfo.dateCreated &&
                  <small>Criando em {formatDate(adInfo.dateCreated)}</small>
                }
              </div>
              <div className="ad-description">
                {loading && <Fake height={100} />}
                {adInfo.description}
                <hr />
                {adInfo.views &&
                  <small>Visualizações: {adInfo.views}</small>
                }
                </div>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="box box-padding">
            {loading && <Fake height={20} />}
            {adInfo.priceNegotiable &&
              "Preço Negociável"
            }
            {!adInfo.priceNegotiable &&
              <div className="price">Preço: <span>R$ {adInfo.price}</span></div>
            }
          </div>
          {loading && <Fake height={50} />}
          {adInfo.userInfo &&          
            <>
              <a href={`mailto:${adInfo.userInfo.email}`} target="_blank" className="contactSellerLink">Fale com o vendedor</a>
              <div className="createdBy box box-padding">
                <strong>{adInfo.userInfo.name}</strong>
                <small>E-mail: {adInfo.userInfo.email}</small>
                <small>Estado: {adInfo.stateName}</small>
              </div>
            </>
          }
        </div>
      </PageArea>
      
      <OthersArea>
        {adInfo.others &&
          <>
            <h2>Outras ofertas de vendedor</h2>
            <div className="list">
              {adInfo.others.map((item, key) =>
                <AdItem key={key} data={item} />
              )}
            </div>
          </>
        }
      </OthersArea>
    </PageContainer>  
  )
}
