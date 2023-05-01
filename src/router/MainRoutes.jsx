import { Navigate, useRoutes } from 'react-router-dom'
import {Home} from '../pages/home/Home'
import {About} from '../pages/about/About'
import {SignIn} from '../pages/signin/SignIn'
import {NotFound} from '../pages/notFound/NotFound'
import {SignUp} from '../pages/signup/SignUp'
import {AdPage} from '../pages/adpage/AdPage'
import { isLogged } from '../helpers/authHandler'
import {Addad} from '../pages/addad/Addad'
import {Ads} from '../pages/ads/Ads'

const MainRoutes = () => {
  const logged = isLogged();

  const routes = useRoutes([
    {path:'/', element:<Home />},
    {path:'/about', element:<About />},
    {path:'/signin', element:<SignIn />},
    {path:'/signup', element:<SignUp />},
    {path:'/ad/:id', element:<AdPage />},
    {path:'/ads', element:<Ads />},
    {path:'/post-an-ad', element: logged ? <Addad /> : <Navigate to='/signin' />},
    {path:'*', element:<NotFound />}
  ])
  
  return (
    <div>
      {routes}
    </div>
  )
}

export default MainRoutes