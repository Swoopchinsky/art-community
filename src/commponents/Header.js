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
import { GiBeastEye } from "react-icons/gi";


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
    let [nigaYo18, setNigaYo18] = useState(false)

    let [nigaYo19, setNigaYo19] = useState(false)

    return (
        <header>
            <div>
                <span className='logo'> JavaScript. React. Node.js. VS. GitHub. npm</span>
            </div>
            <BsFillPersonLinesFill onClick={() => setNigaYo(nigaYo = !nigaYo)} className={`pers ${nigaYo && 'active'}`} />
            {nigaYo && (
                <div className='pers1'>
                    <div className='pers2'>KamshCrew</div>
                    <div className='iga'>IB Looking</div>
                    <GiMuscleUp onClick={() => setNigaYo3(nigaYo3 = !nigaYo3)} className={`iga1 ${nigaYo3 && 'active'}`} />
                    {nigaYo3 && (
                        <div className='iga2'>
                            jun wed developer NodeJS<br />
                            npx create-react-app vak  <br />
                            A huge thank you to The Community from this opportunity <br />
                            cd vak <br />
                            npm start <br />
                            после этого будет запущет ряд инструментальных программ, также запустится отладочный вэб-сервер http:localhost:3000/ <br />


                            <BsTelephone onClick={() => setNigaYo4(nigaYo4 = !nigaYo4)} className={`tel ${nigaYo4 && 'active'}`} />
                            {nigaYo4 && (
                                <div className='tel1'>
                                    <div>Игорь Борисович Л.</div>
                                    <address>+7 921 593 63 24</address>
                                    <div>Шлите манету на карту сбера. </div>
                                    <div>Картины Маслом </div>
                                    <div>Украшения из титана и янтаря</div>
                                </div>
                            )}
                        </div>


                    )}
                    <div className='dim'>Don D</div>
                    <GiScrollUnfurled onClick={() => setNigaYo5(nigaYo5 = !nigaYo5)} className={`dim1 ${nigaYo5 && 'active'}`} />
                    {nigaYo5 && (
                        <div className='dim2'>
                            Дизайн Интерьеров. Техническая Документация и сопровождение проекта. <br />
                            Репетиторство: подготовка к поступлению ВУЗ. <br />
                            Реальная практика день за днем. <br />
                            Идеальный вкус и острое чувство Прекрасного. <br />
                            Использование современных технологий дизайнаю <br />

                            <GiRotaryPhone onClick={() => setNigaYo6(nigaYo6 = !nigaYo6)} className={`tel2 ${nigaYo6 && 'active'}`} />
                            {nigaYo6 && (
                                <div className='tel3'>
                                    <div>Masterpisman</div>
                                    <div>Гений современности классического стиля. <br /> </div>
                                    <div>Модные светосочетания и оттенки. <br /> </div>
                                    <div>Связь через IB Looking <br /> </div>
                                    <div>Реализация проектов в Санкт-Петербурге и обл.</div>
                                </div>
                            )}
                        </div>
                    )}
                    <div className='il'>Il Yohin</div>
                    <GiGClef onClick={() => setNigaYo7(nigaYo7 = !nigaYo7)} className={`il1 ${nigaYo7 && 'active'}`} />
                    {nigaYo7 && (
                        <div className='il2'>
                            <ul>
                                <p>Человек Звук. </p>
                                <p>Мастерски владеет самыми поуляными утилитами в сфере записи и обработки звука. <br /></p>
                                <p>Аранжировка, запись звука, бас-гитара, Варган. <br /></p>
                                <p>Музыка - вид искусства, в котором определенным образом организованные звуки используются для создания формы, гармонии, мелодии, ритма. <br /></p>
                            </ul>
                            <GiMadScientist onClick={() => setNigaYo8(nigaYo8 = !nigaYo8)} className={`tel4 ${nigaYo8 && 'active'}`} />
                            {nigaYo8 && (
                                <div className='tel5'>
                                    <div>Илья Дмитрич Ю.</div>
                                    <div>+7 968 188 60 13</div>
                                    <div>Создаст мелодию на Ваш вкус.</div>
                                    <div>Индивидуальный подход.</div>
                                    <div>Идеальный слух.</div>
                                </div>
                            )}
                        </div>
                    )}
                    <div className='an'>AYo Megavolt</div>
                    <GiFireDash onClick={() => setNigaYo9(nigaYo9 = !nigaYo9)} className={`an1 ${nigaYo9 && 'active'}`} />
                    {nigaYo9 && (
                        <div className='an2'>
                            <p>Андрей Юрич С. <br /></p>
                            <p>Электричество - Electricus - Совокупность явлений, обусловленных существованием, взаимодействием и движением электрических зарядов.</p>
                            <div>Инженерный уровень мышления, обширный спектр скилов, специалист технолог.

                            </div>
                            <GiJupiter onClick={() => setNigaYo10(nigaYo10 = !nigaYo10)} className={`tel6 ${nigaYo10 && 'active'}`} />
                            {nigaYo10 && (
                                <div className='tel7'>
                                    <div>Андрей Юрич С. </div>
                                    <div>Владения всеми видами технического оборудования.</div>

                                    <div>Санкт-Петербург</div>
                                </div>
                            )}
                        </div>
                    )}
                    <div className='ju'>Miting RA</div>
                    <GiWaveSurfer onClick={() => setNigaYo11(nigaYo11 = !nigaYo11)} className={`ju1 ${nigaYo11 && 'active'}`} />
                    {nigaYo11 && (
                        <div className='ju2'>
                            <p>Эфективность фотографии, способность создавать рабочую атмосферу для получения наилучших кадров.<br /></p>
                            <p>Масстерская фото съёмка. <br /></p>
                            <p>Фотография - технология записи изображения путем регистрации оптических излучений с помощью светочувствительного фотоматериала или полупроводникового преобразователя.</p>

                            <GiFamilyHouse onClick={() => setNigaYo12(nigaYo12 = !nigaYo12)} className={`tel8 ${nigaYo12 && 'active'}`} />
                            {nigaYo12 && (
                                <div className='tel9'>
                                    <div>Роман Александровичь М.</div>
                                    <div>Про Фотограф. </div>
                                    <div>Креативное мышление.</div>
                                    <div>Обсолютное видедие ракурса и переспективы.</div>
                                    <div>Санкт-Петербург</div>
                                </div>
                            )}
                        </div>
                    )}
                    <div className='iv'>Ivn Swed</div>
                    <GiAstronautHelmet onClick={() => setNigaYo13(nigaYo13 = !nigaYo13)} className={`iv1 ${nigaYo13 && 'active'}`} />
                    {nigaYo13 && (
                        <div className='iv2'>
                            <p>Организация и проведение инженерно технических работ любой сложности. <br /> </p>
                            <p>Реконструкции ИТП, замена оборудования, контроль качества. <br /></p>
                            <p>огненно сварочные работы, разработка проекта, вычесление объёмов матеала, изготовлениеи зелов лубой конфигурации.</p>
                            <p>Подключение Камуникация в любых условиях.</p>

                            <GiDwarfFace onClick={() => setNigaYo14(nigaYo14 = !nigaYo14)} className={`tel10 ${nigaYo14 && 'active'}`} />
                            {nigaYo14 && (
                                <div className='tel11'>
                                    <div>Иван</div>
                                    <tel>Основа Цивилизации.</tel>
                                    <div>Оптимальные технические решения, логика и порядок.<br /></div>


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
                    <div>Ночной охотник</div>
                    <GiOwl onClick={() => setNigaYo17(nigaYo17 = !nigaYo17)} className={`menu2 ${nigaYo17 && 'active'}`} />
                    {nigaYo17 && (
                        <div className='menu3'>
                            full night owl
                            <div>
                                <button onClick={() => setNigaYo18(nigaYo18 = !nigaYo18)} className={`menu4 ${nigaYo18 && 'active'}`}>Infa</button>
                                {nigaYo18 && (
                                    <div className='memu5'>
                                        <div className='menu6'>
                                            think:
                                            <GiBeastEye onClick={() => setNigaYo19(nigaYo19 = !nigaYo19)} className={`menu7 ${nigaYo19 && 'active'}`} />
                                            {nigaYo19 && (
                                                <div className='menu8'>
                                                    10 000 $
                                                </div>
                                            )}
                                        </div>
                                        <div className='menu9'>
                                            <div>Размер: 240 X 300</div>
                                            <div>Масло Холст</div>
                                            <div>Автор Garri Looking</div>
                                            <div>Год: 2018</div>
                                            <div>Цена: 10 000 $</div>
                                        </div>
                                    </div>
                                )}
                            </div>

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
                <button onClick={() => setNigaYo15(nigaYo15 = !nigaYo15)} className={`but1 ${nigaYo15 && 'active'}`} ></button>
                {nigaYo15 && (
                    <div className='pole1'></div>
                )}
                <button onClick={() => setNigaYo16(nigaYo16 = !nigaYo16)} className={`but2 ${nigaYo16 && 'active'}`} ></button>
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
