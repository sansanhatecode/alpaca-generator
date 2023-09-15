import React, { useState} from 'react'
import { alpacaConfig } from '../AlpacaConfig'
import Header from './Header'
import FeatureButton from './FeatureButton'
import StylesButton from './StyleButton'

export default function AlpacaApp(){
    const [feature, setFeature] = useState(alpacaConfig[0].id)
    const [styles, setStyles] = useState(alpacaConfig[0].items)

    const [hair, setHair] = useState (alpacaConfig[0].items[0].id)
    const [ears, setEars] = useState (alpacaConfig[1].items[0].id)
    const [eyes, setEyes] = useState (alpacaConfig[2].items[0].id)
    const [mouth, setMouth] = useState (alpacaConfig[3].items[0].id)
    const [neck, setNeck] = useState (alpacaConfig[4].items[0].id)
    const [leg, setLeg] = useState (alpacaConfig[5].items[0].id)
    const [nose, setNose] = useState (alpacaConfig[6].items[0].id)
    const [accessories, setAccessories] = useState (alpacaConfig[7].items[0].id)
    const [background, setBackground] = useState (alpacaConfig[8].items[0].id)

    const featureButtonOnClickHandler = (value) =>{
        setFeature(value)
        setStyles(alpacaConfig[value].items)
    }

    const stylesButtonOnClickHandler = (featureId, id) =>{
        switch(featureId){
            case 0:
                setHair(id)
                break;
            case 1:
                setEars(id)
                break;
            case 2:
                setEyes(id)
                break;
            case 3:
                setMouth(id)
                break;
            case 4:
                setNeck(id)
                break;
            case 5:
                setLeg(id)
                break;
            case 6:
                setNose(id)
                break;
            case 7:
                setAccessories(id)
                break;
            case 8:
                setBackground(id)
                break;
        }
    }

    return(
        <div>
            <Header></Header>
            <div className='w-5/12'>
                <div>
                    <p>ACCESSORIZE THE ALPACA'S</p>
                    <FeatureButton 
                        data = {alpacaConfig}
                        feature = {feature}
                        onClickHandler = {featureButtonOnClickHandler}
                    />
                </div>
                <div>
                    <p>STYLES</p>
                    <StylesButton
                        styles = {styles}
                        featureID = {feature}
                        onClickHandler = {stylesButtonOnClickHandler}
                        hair = {hair}
                        ears = {ears}
                        eyes = {eyes}
                        mouth = {mouth}
                        neck = {neck}
                        leg = {leg}
                        nose = {nose}
                        accessories = {accessories}
                        background = {background}
                    />
            </div>
            </div>
        </div>
    )
}