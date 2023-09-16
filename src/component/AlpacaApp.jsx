import React, { useState } from "react";
import { alpacaConfig } from "../AlpacaConfig";
import Header from "./Header";
import FeatureButton from "./FeatureButton";
import StylesButton from "./StyleButton";
import AlpacaAvatar from "./AlpacaAvatar";
import Random from "./Random";
import Download from "./Download"

export default function AlpacaApp() {
    const [feature, setFeature] = useState(alpacaConfig[0].id);
    const [styles, setStyles] = useState(alpacaConfig[0].items);

    const [hair, setHair] = useState(alpacaConfig[0].items[0].id);
    const [ears, setEars] = useState(alpacaConfig[1].items[0].id);
    const [eyes, setEyes] = useState(alpacaConfig[2].items[0].id);
    const [mouth, setMouth] = useState(alpacaConfig[3].items[0].id);
    const [neck, setNeck] = useState(alpacaConfig[4].items[0].id);
    const [leg, setLeg] = useState(alpacaConfig[5].items[0].id);
    const [nose, setNose] = useState(alpacaConfig[6].items[0].id);
    const [accessories, setAccessories] = useState(alpacaConfig[7].items[0].id);
    const [background, setBackground] = useState(alpacaConfig[8].items[0].id);

    const featureButtonOnClickHandler = (value) => {
        setFeature(value);
        setStyles(alpacaConfig[value].items);
    };

    const stylesButtonOnClickHandler = (featureId, id) => {
        switch (featureId) {
            case 0:
                setHair(id);
                break;
            case 1:
                setEars(id);
                break;
            case 2:
                setEyes(id);
                break;
            case 3:
                setMouth(id);
                break;
            case 4:
                setNeck(id);
                break;
            case 5:
                setLeg(id);
                break;
            case 6:
                setNose(id);
                break;
            case 7:
                setAccessories(id);
                break;
            case 8:
                setBackground(id);
                break;
            default:
                break;
        }
    };

    const randomButtonOnClickHandler = () => {
        setHair(Math.floor(Math.random() * 6))
        setEars(Math.floor(Math.random() * 3))
        setEyes(Math.floor(Math.random() * 6))
        setMouth(Math.floor(Math.random() * 5))
        setNeck(Math.floor(Math.random() * 4))
        setLeg(Math.floor(Math.random() * 6))
        setAccessories(Math.floor(Math.random() * 4))
        setBackground(Math.floor(Math.random() * 15))
    };

    const downloadButtonOnClickHandler = () => {
        console.log(Math.random)
    }

    return (
        <div className="bg-gray-100 h-screen border-x-[150px] border-y-[50px] border-white">
            <Header></Header>
            <div className="flex justify-center">
                <div>
                    <div className='w-[450px] px-5'>
                        <AlpacaAvatar
                            data={alpacaConfig}
                            hair={hair}
                            ears={ears}
                            eyes={eyes}
                            mouth={mouth}
                            neck={neck}
                            leg={leg}
                            accessories={accessories}
                            background={background}
                        />
                    </div>
                    <div>
                        <Random
                            onClickHandler = {randomButtonOnClickHandler}
                        />
                        <Download
                            onClickHandler={downloadButtonOnClickHandler}
                        />
                    </div>
                </div>

                <div className='w-[550px] px-5'>
                    <div>
                        <p className="font-mochi text-xs">ACCESSORIZE THE ALPACA'S</p>
                        <FeatureButton
                            data={alpacaConfig}
                            feature={feature}
                            onClickHandler={featureButtonOnClickHandler}
                        />
                    </div>
                    <div className="my-5">
                        <p className="font-mochi text-xs">STYLES</p>
                        <StylesButton
                            styles={styles}
                            featureId={feature}
                            onClickHandler={stylesButtonOnClickHandler}
                            hair={hair}
                            ears={ears}
                            eyes={eyes}
                            mouth={mouth}
                            neck={neck}
                            leg={leg}
                            nose={nose}
                            accessories={accessories}
                            background={background}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}
