import React, { useState } from 'react'
import { DiProlog } from "react-icons/di";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { GiGoose } from "react-icons/gi";

import { GiMuscleUp } from "react-icons/gi";
import { BsTelephone } from "react-icons/bs";

import { GiScrollUnfurled } from "react-icons/gi";
import { GiRotaryPhone } from "react-icons/gi";

import { GiGClef } from "react-icons/gi";
import { GiMadScientist } from "react-icons/gi";

import { GiFireDash } from "react-icons/gi";
import { GiJupiter } from "react-icons/gi";

import { GiWaveSurfer } from "react-icons/gi";
import { GiFamilyHouse } from "react-icons/gi";
import { GiAstronautHelmet } from "react-icons/gi";
import { GiDwarfFace } from "react-icons/gi";

import { GiOwl } from "react-icons/gi";


export default function Header() {
    let [nigaYo, setNigaYo] = useState(false)
    let [nigaYo1, setNigaYo1] = useState(false)
    let [nigaYo2, setNigaYo2] = useState(false)

    let [nigaYo3, setNigaYo3] = useState(false)
    let [nigaYo4, setNigaYo4] = useState(false)

    let [nigaYo5, setNigaYo5] = useState(false)
    let [nigaYo6, setNigaYo6] = useState(false)

    let [nigaYo7, setNigaYo7] = useState(false)
    let [nigaYo8, setNigaYo8] = useState(false)

    let [nigaYo9, setNigaYo9] = useState(false)
    let [nigaYo10, setNigaYo10] = useState(false)

    let [nigaYo11, setNigaYo11] = useState(false)
    let [nigaYo12, setNigaYo12] = useState(false)

    let [nigaYo13, setNigaYo13] = useState(false)
    let [nigaYo14, setNigaYo14] = useState(false)

    let [nigaYo15, setNigaYo15] = useState(false)
    let [nigaYo16, setNigaYo16] = useState(false)

    let [nigaYo17, setNigaYo17] = useState(false)

    return (
        <header>
            <div>
                <span className='logo'>IT Art Community</span>
            </div>
            <BsFillPersonLinesFill onClick={() => setNigaYo(nigaYo = !nigaYo)} className={`pers ${nigaYo && 'active'}`} />
            {nigaYo && (
                <div className='pers1'>
                    <div className='pers2'>Команда</div>
                    <div className='iga'>Garri Swoopch</div>
                    <GiMuscleUp onClick={() => setNigaYo3(nigaYo3 = !nigaYo3)} className={`iga1 ${nigaYo3 && 'active'}`} />
                    {nigaYo3 && (
                        <div className='iga2'>
                            Разработка Web сайтов при помощи JavaScript технологии ReactJS. Размещение на Хостинге GitHub Pages.
                            Также составление графиков на Python, библиотека matplotlib. Pyplot. Jupyter notebook.
                            <BsTelephone onClick={() => setNigaYo4(nigaYo4 = !nigaYo4)} className={`tel ${nigaYo4 && 'active'}`} />
                            {nigaYo4 && (
                                <div className='tel1'>
                                    <div>Игарян Борисч</div>
                                    <div>8 921 593 63 24</div>
                                    <div>Санкт-Петерберг</div>
                                </div>
                            )}
                        </div>


                    )}
                    <div className='dim'>Dima Masterpisman</div>
                    <GiScrollUnfurled onClick={() => setNigaYo5(nigaYo5 = !nigaYo5)} className={`dim1 ${nigaYo5 && 'active'}`} />
                    {nigaYo5 && (
                        <div className='dim2'>
                            Дизайн Интерьеров. Техническая Документация и сопровождение проекта.
                            Репетиторство: подготовка к поступлению в Художественные ВУЗы. Реальная практика день за днем.
                            <GiRotaryPhone onClick={() => setNigaYo6(nigaYo6 = !nigaYo6)} className={`tel2 ${nigaYo6 && 'active'}`} />
                            {nigaYo6 && (
                                <div className='tel3'>
                                    <div>Дмитрий Юрич</div>
                                    <div>8 921 593 63 24</div>
                                    <div>Санкт-Петербург</div>
                                </div>
                            )}
                        </div>
                    )}
                    <div className='il'>Ilioos Yohan</div>
                    <GiGClef onClick={() => setNigaYo7(nigaYo7 = !nigaYo7)} className={`il1 ${nigaYo7 && 'active'}`} />
                    {nigaYo7 && (
                        <div className='il2'>
                            <ul>
                                Звукообработка.
                                Современный подход к Классическому Стилю.
                                Использование Новейших Программ.
                                Запись Музыки на Заказ.
                                Пишет Музыку C 8 лет!
                                Совместная работа.
                                Человек Звук.
                            </ul>
                            <GiMadScientist onClick={() => setNigaYo8(nigaYo8 = !nigaYo8)} className={`tel4 ${nigaYo8 && 'active'}`} />
                            {nigaYo8 && (
                                <div className='tel5'>
                                    <div>Илья Дмитрич</div>
                                    <div>8 968 188 60 13</div>
                                    <div>Санкт-Петербург</div>
                                </div>
                            )}
                        </div>
                    )}
                    <div className='an'>Dron Megavolt</div>
                    <GiFireDash onClick={() => setNigaYo9(nigaYo9 = !nigaYo9)} className={`an1 ${nigaYo9 && 'active'}`} />
                    {nigaYo9 && (
                        <div className='an2'>
                            <div>Электрик. Экспертное мнение. Технологичный подход к сборке щитков и распределительных коробок.
                                Штробление с применением системы циклонного фильтра, который минимизирует запыленность помещения.
                            </div>
                            <GiJupiter onClick={() => setNigaYo10(nigaYo10 = !nigaYo10)} className={`tel6 ${nigaYo10 && 'active'}`} />
                            {nigaYo10 && (
                                <div className='tel7'>
                                    <div>Андрей Юрич </div>
                                    <div>8 952 214 47 50</div>
                                    <div>Санкт-Петербург</div>
                                </div>
                            )}
                        </div>
                    )}
                    <div className='ju'>Andrey Julvern</div>
                    <GiWaveSurfer onClick={() => setNigaYo11(nigaYo11 = !nigaYo11)} className={`ju1 ${nigaYo11 && 'active'}`} />
                    {nigaYo11 && (
                        <div className='ju2'>Аренда помещений на Васильевском острове, центр,  3-я линия.
                            Клиентоорентированность и широкий спектр предоставляемых площадей.
                            Приемлемые цены. Вежливость и Надежность Сотрудничества.
                            <GiFamilyHouse onClick={() => setNigaYo12(nigaYo12 = !nigaYo12)} className={`tel8 ${nigaYo12 && 'active'}`} />
                            {nigaYo12 && (
                                <div className='tel9'>
                                    <div>Андрей Вячеславович</div>
                                    <div>8 921 900 37 60</div>
                                    <div>Санкт-Петербург</div>
                                </div>
                            )}
                        </div>
                    )}
                    <div className='iv'>Ivn Swed</div>
                    <GiAstronautHelmet onClick={() => setNigaYo13(nigaYo13 = !nigaYo13)} className={`iv1 ${nigaYo13 && 'active'}`} />
                    {nigaYo13 && (
                        <div className='iv2'>Специалист инженерных систем. Работы любой сложности.
                            Быстро и Качественно. Сварка в любом положении, на сто процентов.
                            Реализацияя самых сложных проектов.
                            Соблюдение сроков. Чистота и Порядок.
                            <GiDwarfFace onClick={() => setNigaYo14(nigaYo14 = !nigaYo14)} className={`tel10 ${nigaYo14 && 'active'}`} />
                            {nigaYo14 && (
                                <div className='tel11'>
                                    <div>Иванч</div>
                                    <tel>8 931 999 23 06</tel>
                                    <div> Санкт-Петербург </div>
                                </div>
                            )}
                        </div>
                    )}

                </div>
            )}
            <DiProlog onClick={() => setNigaYo1(nigaYo1 = !nigaYo1)} className={`menu ${nigaYo1 && 'active'}`} />
            {nigaYo1 && (
                <div className='menu1'>
                    <div>Сова - символ Мудрости. Таинственная птица. Помошник в понимании трудных задач.</div>
                    <div>Подсказывает верное направление и содействует в научных открытиях.</div>
                    <div>Как оберег, Сова известна во многих культурах.</div>
                    <div>Сова защищает от порчи и сглаза, отталкивая всю отрицательную энергетику.</div>
                    <div>night owl</div>
                    <GiOwl onClick={() => setNigaYo17(nigaYo17 = !nigaYo17)} className={`menu2 ${nigaYo17 && 'active'}`} />
                    {nigaYo17 && (
                        <div className='menu3'>
                            full night owl
                        </div>
                    )}

                </div>
            )}
            <GiGoose onClick={() => setNigaYo2(nigaYo2 = !nigaYo2)} className={`goo ${nigaYo2 && 'active'}`} />
            {nigaYo2 && (
                <div className='goo1'>
                    Дикиий Северный Гусь. Обитает на обширных территориях Северной Европы.
                    Серый Гусь (лат. Anser anser). Водоплавающая птица семейства утиных. Гнездится в Тундрах Евразии. Дикие Гуси живут 80 лет.
                    Птица длиной до 70-90 см и весом около 2-5 кг, размах крыльев 140-180 см.
                    Символ Созидания и Возрождения.
                </div>
            )}

            <div className='presentation'>
                <button onClick={() => setNigaYo15(nigaYo15 = !nigaYo15)} className={`but1 ${nigaYo15 && 'active'}`} >Web</button>
                {nigaYo15 && (
                    <div className='pole1'>
                        <div>welcom to the long path in the dark forest of knowledge:</div>
                        <div>JavaScript Provides Features.</div>
                        <div>Высокая скорость разработки.</div>
                        <div>Заточенность под мобильное использование.</div>
                        <div>Уникальность дизайна.</div>
                        <div>Одностраничный сайт - идеальный инструмент для малого и среднего бизнеса.</div>
                        <div>Компании могут предоставить свои услуги, контакты, портфолио и отзывы клиентов на одной странице.</div>
                        <div>Ссылку на сайт можно указать в визитках, в разговоре, в рекламных материалах.</div>
                        <div>На сайте легко публиковать информацию. Помогает Вам обеспечить свое  постоянное присутствие в Интернете.</div>
                    </div>
                )}
                <button onClick={() => setNigaYo16(nigaYo16 = !nigaYo16)} className={`but2 ${nigaYo16 && 'active'}`} >Information</button>
                {nigaYo16 && (
                    <div className='pole2'>
                        <div>the most valuable resource of our time</div>
                        <div>data types</div>
                        <div>Простые типы:</div>
                        <div>number</div>
                        <div>string</div>
                        <div>Boolean</div>
                        <div>Undefined</div>
                        <div></div>
                        <div>Null</div>
                        <div>Symbol</div>
                        <div>bigInt</div>
                        <div>Специальные типы:</div>
                        <div>Массивы - arrays</div>
                        <div>function - object</div>
                        <div>object</div>
                    </div>
                )}
            </div>

        </header>
    )
}
