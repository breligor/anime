import React, {useEffect, useState} from 'react';
import './WaterFill.css';
import Fish from './ascets/170455.png'
import fish2 from './ascets/fish2.png'
import fish3 from './ascets/fish3.png'
import fish4 from './ascets/fish4.png'
import Grass from './ascets/3860159.png'
import horse from './ascets/png-clipart-green-algae-green-algae-plant-seaweed-plant-leaf-plant-stem.png'
import Sand from './ascets/png-transparent-sand-sandy-sandy-beach-beach.png'
import rock from './ascets/rock.png'
import castle from './ascets/castle.png'
import grass2 from './ascets/grass2.png'
import crab from './ascets/crab.gif'
import grass3 from './ascets/grass3.png'
import octopus from './ascets/octo2.png'

const WaterFill = ({text = "React", fillHeight = 75, waveHeight = 10}) => {
    const [filled, setFilled] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [score, setScore] = useState(0); // Состояние для хранения очков
    const handleBubbleClick = () => {
        setScore(score + 1);
        console.log('click')
    };
    const toggleAnimation = () => {
        setIsPaused(!isPaused);
    };
    useEffect(() => {
        setTimeout(() => {
            setFilled(true);
        }, 500);
    }, []);

    return (
        <>
            <div className="score">Score: {score}</div>
            {/* Отображение очков */}
            <div className="container">

                <div className={`fish ${isPaused ? 'paused' : ''}`} onClick={toggleAnimation}>
                    <img src={Fish} alt=""/>

                </div>

                <div className="bubleUp" onClick={handleBubbleClick}></div>
                <div className="bubleUp2" onClick={handleBubbleClick}></div>
                <div className="bubleUp3" onClick={handleBubbleClick}></div>
                <div className="bubleUp4" onClick={handleBubbleClick}></div>
                <div className="text">{text}</div>
                <div
                    className={`water ${filled ? 'filled' : ''}`}
                    style={{height: `${fillHeight}%`}}
                >
                    <div className="wave" style={{height: `${waveHeight}%`}}>

                        <div className="buble"></div>
                        <div className="buble2"></div>
                    </div>

                    <div className="wave2" style={{height: `${waveHeight}%`}}></div>
                </div>
                <img className="grass" src={Grass} alt=""/>
                <img className="horse" src={horse} alt=""/>
                <img className="Sand" src={Sand} alt=""/>
                <img className="Sand2" src={Sand} alt=""/>
                <img className="rock" src={rock} alt=""/>
                <img className="castle" src={castle} alt=""/>
                <img className="crab" src={crab} alt=""/>
                <img className="grass2" src={grass2} alt=""/>
                <img className="grass2 bottom" src={grass2} alt=""/>
                <img className="octo" src={octopus} alt=""/>
                <img className="grass2 grass3" src={grass3} alt=""/>
                <div className="fish fish2">
                    <img src={fish2} alt=""/>

                </div>
                <div className="fish fish3 ">

                    <div className='fish3rel'>
                        <img src={fish3} alt=""/>
                        <div className="bubleUp5" onClick={handleBubbleClick}></div>
                    </div>

                </div>
                <div className="fish fish4 ">
                <img src={fish4} alt=""/>
                </div>
            </div>
            <div className="under"></div>

        </>

    );
};

export default WaterFill;

