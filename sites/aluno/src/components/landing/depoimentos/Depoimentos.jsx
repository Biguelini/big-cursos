import './Depoimentos.css'
import DepoimentoCard from '../../cards/DepoimentoCard'
import React from 'react'

export default function App(props) {
    return (
        <div className="depoimentos">
            <DepoimentoCard
                name="Jurandir"
                turma="00"
                depoimento="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum interdum neque non luctus. Praesent imperdiet in felis mattis pellentesque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis tincidunt maximus iaculis. Curabitur maximus dui a est sodales, id cursus metus interdum."
            />
            <DepoimentoCard
                name="Ademar"
                turma="00"
                depoimento="Praesent blandit porta purus, nec molestie dolor convallis ac. Vivamus quis massa dolor. In lobortis, urna a suscipit faucibus, metus ipsum auctor sem, sed maximus nisl metus sed justo. Vivamus suscipit, magna non maximus faucibus, libero lectus dictum ligula, id ultricies orci odio vitae mauris. Curabitur posuere, nulla ut dignissim tincidunt, felis mi ornare libero, non ultricies tortor nunc in neque."
            />
            <DepoimentoCard
                name="Bastiana"
                turma="00"
                depoimento="Morbi vel hendrerit purus. Suspendisse et ipsum purus. Sed a tellus accumsan, commodo est eu, pellentesque erat. Morbi consequat urna et ante scelerisque, nec eleifend nisi dapibus."
            />
        </div>
    )
}
