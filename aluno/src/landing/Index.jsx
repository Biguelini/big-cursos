import CTA from '../components/landing/cta/CTA'
import Video from '../components/landing/video/Video'
import Dados from '../components/landing/dados/Dados'
import Depoimentos from '../components/landing/depoimentos/Depoimentos'
import ListaCursos from '../components/landing/listacursos/ListaCursos'
import ChamadaFinal from '../components/landing/chamadafinal/ChamadaFinal'

import './Landing.css'
import { Fade } from 'react-reveal'

function App() {
    return (
        <>
            <CTA />
            <Video />
            <Fade delay={50}>
                <Dados />
                <Depoimentos />
                <ListaCursos />
                <ChamadaFinal />
            </Fade>
        </>
    )
}

export default App
