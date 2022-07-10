import Header from '../components/templates/header/Header'
import CTA from '../components/templates/cta/CTA'
import Video from '../components/templates/video/Video'
import Dados from '../components/templates/dados/Dados'
import Depoimentos from '../components/templates/depoimentos/Depoimentos'
import ListaCursos from '../components/templates/listacursos/ListaCursos'
import ChamadaFinal from '../components/templates/chamadafinal/ChamadaFinal'
import Footer from '../components/templates/footer/Footer'
import './Landing.css'
import { Fade } from 'react-reveal'

function App() {
    return (
        <>
            <Header />
            <CTA />
            <Video />
            <Fade delay={50}>
                <Dados />
                <Depoimentos />
                <ListaCursos />
                <ChamadaFinal />
            </Fade>
            <Footer />
        </>
    )
}

export default App
