import React, { useState } from 'react'

export default function Lego() {
    let [nigaLe, setNigaLe] = useState(false)
    let [nigaLe1, setNigaLe1] = useState(false)
    let [nigaLe2, setNigaLe2] = useState(false)
    let [nigaLe3, setNigaLe3] = useState(false)
    let [nigaLe4, setNigaLe4] = useState(false)
    let [nigaLe5, setNigaLe5] = useState(false)
    let [nigaLe6, setNigaLe6] = useState(false)
    let [nigaLe7, setNigaLe7] = useState(false)
    let [nigaLe8, setNigaLe8] = useState(false)
    let [nigaLe9, setNigaLe9] = useState(false)
    let [nigaLe10, setNigaLe10] = useState(false)
    let [nigaLe11, setNigaLe11] = useState(false)
    let [nigaLe12, setNigaLe12] = useState(false)
    let [nigaLe13, setNigaLe13] = useState(false)
    let [nigaLe14, setNigaLe14] = useState(false)
    let [nigaLe15, setNigaLe15] = useState(false)

    return (
        <lego>
            <div className='lego'>
                <div>
                    lego club
                    <button onClick={() => setNigaLe(nigaLe = !nigaLe)} className={`le ${nigaLe && 'active'}`} >comics</button>
                    {nigaLe && (
                        <div className='episode'>
                            <button onClick={() => setNigaLe1(nigaLe1 = !nigaLe1)} className={`ep1 ${nigaLe1 && 'active'}`} >Episode 1</button>
                            {nigaLe1 && (
                                <div className='cadr1'>
                                    <div className='text1'>Marty McFly</div>
                                    <button onClick={() => setNigaLe2(nigaLe2 = !nigaLe2)} className={`but1ep1 ${nigaLe2 && 'active'}`} >go to Doc Brown</button>
                                    {nigaLe2 && (
                                        <div className='cadr2'>
                                            <div className='text2'>new adventures</div>
                                            <button onClick={() => setNigaLe3(nigaLe3 = !nigaLe3)} className={`but2ep1 ${nigaLe3 && 'active'}`} >roll</button>
                                            {nigaLe3 && (
                                                <div className='cadr3'>
                                                    <button onClick={() => setNigaLe4(nigaLe4 = !nigaLe4)} className={`but3ep1 ${nigaLe4 && 'active'}`} >put up a skate</button>
                                                    {nigaLe4 && (
                                                        <div className='cadr4'>
                                                            <div className='text4'>Dog where are you ?</div>
                                                            <button onClick={() => setNigaLe5(nigaLe5 = !nigaLe5)} className={`but4ep1 ${nigaLe5 && 'active'}`} >call Doc Brown</button>
                                                            {nigaLe5 && (
                                                                <div className='cadr5'>
                                                                    <div className='text5'>I'm here Marty</div>
                                                                    <button onClick={() => setNigaLe6(nigaLe6 = !nigaLe6)} className={`but5ep1 ${nigaLe6 && 'active'}`} >welcome Doc</button>
                                                                    {nigaLe6 && (
                                                                        <div className='cadr6'>
                                                                            <div className='text6'>Hello Doc</div>
                                                                            <button onClick={() => setNigaLe7(nigaLe7 = !nigaLe7)} className={`but6ep1 ${nigaLe7 && 'active'}`} >move</button>
                                                                            {nigaLe7 && (
                                                                                <div className='cadr7'>
                                                                                    <div className='text7'>Hello! help me</div>
                                                                                    <button onClick={() => setNigaLe8(nigaLe8 = !nigaLe8)} className={`but7ep1 ${nigaLe8 && 'active'}`} >help</button>
                                                                                    {nigaLe8 && (
                                                                                        <div className='cadr8'>
                                                                                            <div className='text8'>keep here</div>
                                                                                            <button onClick={() => setNigaLe9(nigaLe9 = !nigaLe9)} className={`but8ep1 ${nigaLe9 && 'active'}`} >keep</button>
                                                                                            {nigaLe9 && (
                                                                                                <div className='cadr9'>
                                                                                                    <div className='text9'>everything is fine</div>
                                                                                                    <button onClick={() => setNigaLe10(nigaLe10 = !nigaLe10)} className={`but9ep1 ${nigaLe10 && 'active'}`} >pull out</button>
                                                                                                    {nigaLe10 && (
                                                                                                        <div className='cadr10'>
                                                                                                            <div className='text10'>completed</div>
                                                                                                            <button onClick={() => setNigaLe11(nigaLe11 = !nigaLe11)} className={`but10ep1 ${nigaLe11 && 'active'}`} >remove details</button>
                                                                                                            {nigaLe11 && (
                                                                                                                <div className='cadr11'>
                                                                                                                    <div className='text11'>great</div>
                                                                                                                    <button onClick={() => setNigaLe12(nigaLe12 = !nigaLe12)} className={`but11ep1 ${nigaLe12 && 'active'}`} >wait</button>
                                                                                                                    {nigaLe12 && (
                                                                                                                        <div className='cadr12'>
                                                                                                                            <div className='text12'>a little more</div>
                                                                                                                            <button onClick={() => setNigaLe13(nigaLe13 = !nigaLe13)} className={`but12ep1 ${nigaLe13 && 'active'}`} >continue</button>
                                                                                                                            {nigaLe13 && (
                                                                                                                                <div className='cadr13'>
                                                                                                                                    <div className='text13'>spare part</div>
                                                                                                                                    <button onClick={() => setNigaLe14(nigaLe14 = !nigaLe14)} className={`but13ep1 ${nigaLe14 && 'active'}`} >fix</button>
                                                                                                                                    {nigaLe14 && (
                                                                                                                                        <div className='cadr14'>
                                                                                                                                            <div className='text14'>here it is</div>
                                                                                                                                            <button onClick={() => setNigaLe15(nigaLe15 = !nigaLe15)} className={`but14ep1 ${nigaLe15 && 'active'}`} >take</button>
                                                                                                                                            {nigaLe15 && (
                                                                                                                                                <div className='cadr15'>
                                                                                                                                                    <div className='text15'>take it Marty</div>
                                                                                                                                                </div>
                                                                                                                                            )}
                                                                                                                                        </div>
                                                                                                                                    )}
                                                                                                                                </div>
                                                                                                                            )}
                                                                                                                        </div>
                                                                                                                    )}
                                                                                                                </div>
                                                                                                            )}
                                                                                                        </div>
                                                                                                    )}
                                                                                                </div>
                                                                                            )}

                                                                                        </div>
                                                                                    )}
                                                                                </div>
                                                                            )}
                                                                        </div>

                                                                    )}
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>

            </div>


            <div className='legoblock'></div>
        </lego>
    )
}
