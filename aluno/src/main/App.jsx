import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import Header from '../components/common/header/Header'
import Footer from '../components/common/footer/Footer'
export default function App(props) {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className="app">
                <Header />
                <Routes />
                <Footer />
            </div>
        </BrowserRouter>
    )
}
