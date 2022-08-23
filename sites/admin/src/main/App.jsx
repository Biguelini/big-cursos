import './App.css'
import Routes from './Routes'
import { BrowserRouter } from 'react-router-dom'
import Header from '../components/common/header/Header'

function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className="app">
                <Header />
                <Routes />
            </div>
        </BrowserRouter>
    )
}

export default App
