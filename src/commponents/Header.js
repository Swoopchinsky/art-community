import React, { useState } from 'react'
import { DiProlog } from "react-icons/di";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { GiGoose } from "react-icons/gi";
import { GiMuscleUp } from "react-icons/gi";
import { BsTelephone } from "react-icons/bs";

export default function Header() {
    let [nigaYo, setNigaYo] = useState(false)
    let [nigaYo1, setNigaYo1] = useState(false)
    let [nigaYo2, setNigaYo2] = useState(false)

    let [nigaYo3, setNigaYo3] = useState(false)
    let [nigaYo4, setNigaYo4] = useState(false)
    return (
        <header>
            <div>
                <span className='logo'>IT Art Community</span>
            </div>
            <BsFillPersonLinesFill onClick={() => setNigaYo(nigaYo = !nigaYo)} className={`pers ${nigaYo && 'active'}`} />
            {nigaYo && (
                <div className='pers1'>
                    <div className='pers2'>Команда</div>
                    <div className='iga'>Garri Looking</div>
                    <GiMuscleUp onClick={() => setNigaYo3(nigaYo = !nigaYo)} className={`iga1 ${nigaYo3 && 'active'}`} />
                    {nigaYo3 && (
                        <div className='iga2'>
                            Разработка Web сайток при помощи JavaScript технологии ReactJS. Размещение на Хостинге GitHub Pages.
                            Также составление графиков на Python, библиотека matplotlib.
                            <BsTelephone onClick={() => setNigaYo4(nigaYo4 = !nigaYo4)} className={`tel ${nigaYo4 && 'active'}`} />
                            {nigaYo4 && (
                                <div className='tel1'>
                                    8 921 593 63 24 Sankt-Petersburg:
                                    SberBank:
                                </div>
                            )}
                        </div>

                    )}

                </div>
            )}
            <DiProlog onClick={() => setNigaYo1(nigaYo1 = !nigaYo1)} className={`menu ${nigaYo1 && 'active'}`} />
            {nigaYo1 && (
                <div className='menu1'>
                    shalom
                </div>
            )}
            <GiGoose onClick={() => setNigaYo2(nigaYo2 = !nigaYo2)} className={`goo ${nigaYo2 && 'active'}`} />
            {nigaYo2 && (
                <div className='goo1'>
                    Гусь это не просто птица!
                </div>
            )}

            <div className='presentation'></div>

        </header>
    )
}
