import { useNavigate } from 'react-router-dom'
import './stylesheets/Top.css'

function Top() {

  const navigate = useNavigate()

  return (
    <>
      <h1 className="title">The 25th Annual Putnam County Spelling Bee</h1>
      <nav className='navigationBar'>
        <a onClick={() => navigate('/')}>Home</a>
        <a onClick={() => navigate('/info')} >Info</a>
        <a onClick={() => navigate('/spelers')}>Spelers</a>
        <a onClick={() => navigate('/spellen')}>Spellen</a>
      </nav>
    </>
  )
}

export default Top
