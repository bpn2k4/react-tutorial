import Header from '../components/Header'
import Container from './Container'

const DefaultLayout = ({ children }) => {

  return (
    <Container>
      <Header />
      <div className='mt-14'>
        {children}
      </div>
    </Container>
  )
}

export default DefaultLayout