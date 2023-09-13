import React, { useState} from 'react'
import { alpacaConfig } from '../AlpacaConfig'
import Header from './Header'
import featureButton from './FeatureButton'

export default function AlpacaApp(){
    const [feature, setFeature] = useState(alpacaConfig[0].id)
    
    const featureButtonOnClickHandler = (alpacaConfig) =>{
        
    }

    return(
        <div>
            <Header></Header>
            {featureButton(alpacaConfig)}
        </div>
    )
}