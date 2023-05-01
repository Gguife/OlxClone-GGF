import './App.css'
import { connect } from 'react-redux'
import MainRoutes from './router/MainRoutes'
import { Template } from './components/MainComponents'
import { Header } from './components/partials/header/Header'
import { Footer } from './components/partials/footer/Footer'

const Page = () =>{
  return (
    <div>
      <Template>
        <Header />
        <MainRoutes />
        <Footer />
      </Template>
    </div>
  )
}

const mapStateToProps = (state) =>{
  return {
    user: state.user
  }
}

const mapDispatchToProps = () =>{
  return {

  }
}

export default connect(mapDispatchToProps, mapStateToProps)(Page);