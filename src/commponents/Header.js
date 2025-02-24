import React, { useState } from 'react'
import { DiProlog } from "react-icons/di";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { GiGoose } from "react-icons/gi";
import { GiMuscleUp } from "react-icons/gi";
import { BsTelephone } from "react-icons/bs";
import { GiScrollUnfurled } from "react-icons/gi";
import { GiRotaryPhone } from "react-icons/gi";

export default function Header() {
    let [nigaYo, setNigaYo] = useState(false)
    let [nigaYo1, setNigaYo1] = useState(false)
    let [nigaYo2, setNigaYo2] = useState(false)

    let [nigaYo3, setNigaYo3] = useState(false)
    let [nigaYo4, setNigaYo4] = useState(false)

    let [nigaYo5, setNigaYo5] = useState(false)
    let [nigaYo6, setNigaYo6] = useState(false)
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
                    <GiMuscleUp onClick={() => setNigaYo3(nigaYo3 = !nigaYo3)} className={`iga1 ${nigaYo3 && 'active'}`} />
                    {nigaYo3 && (
                        <div className='iga2'>
                            Разработка Web сайтов при помощи JavaScript технологии ReactJS. Размещение на Хостинге GitHub Pages.
                            Также составление графиков на Python, библиотека matplotlib.
                            <BsTelephone onClick={() => setNigaYo4(nigaYo4 = !nigaYo4)} className={`tel ${nigaYo4 && 'active'}`} />
                            {nigaYo4 && (
                                <div className='tel1'>
                                    8 921 593 63 24
                                    Игарян
                                    Sankt-Petersburg
                                </div>
                            )}
                        </div>


                    )}
                    <div className='dim'>Dima Masterpisman</div>
                    <GiScrollUnfurled onClick={() => setNigaYo5(nigaYo5 = !nigaYo5)} className={`dim1 ${nigaYo5 && 'active'}`} />
                    {nigaYo5 && (
                        <div className='dim2'>
                            Дизайн Интерьеров. Техническая Документация и сопровождение проекта.
                            Репетиторство: подготовка к поступлению в Художественные ВУЗы.
                            <GiRotaryPhone onClick={() => setNigaYo6(nigaYo6 = !nigaYo6)} className={`tel2 ${nigaYo6 && 'active'}`} />
                            {nigaYo6 && (
                                <div className='tel3'>
                                    8 921 593 63 24
                                    спросить Дмитрия Юрича _________
                                    Sankt-Petersburg
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
