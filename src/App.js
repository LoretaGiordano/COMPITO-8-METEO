import './App.css'
import MeteoComponent from './components/MeteoComponent'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container />
        <Row className="justify-concent-center">
          <Col xs={12} md={6}>
            <MeteoComponent />
          </Col>
        </Row>
      </header>
    </div>
  )
}

export default App
