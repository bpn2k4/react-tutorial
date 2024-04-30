import Header from '../components/Header'
import Container from './Container'

const DefaultLayout = ({ children }) => {

  return (
    <Container>
      <Header />
      <div className='pt-14 h-full overflow-y-auto'>
        {children}
      </div>
    </Container>
  )
}

export default DefaultLayout