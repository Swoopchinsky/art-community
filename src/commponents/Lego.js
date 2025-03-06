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
    let [nigaLe16, setNigaLe16] = useState(false)
    let [nigaLe17, setNigaLe17] = useState(false)
    let [nigaLe18, setNigaLe18] = useState(false)
    let [nigaLe19, setNigaLe19] = useState(false)
    let [nigaLe20, setNigaLe20] = useState(false)
    let [nigaLe21, setNigaLe21] = useState(false)
    let [nigaLe22, setNigaLe22] = useState(false)
    let [nigaLe23, setNigaLe23] = useState(false)
    let [nigaLe24, setNigaLe24] = useState(false)
    let [nigaLe25, setNigaLe25] = useState(false)
    let [nigaLe26, setNigaLe26] = useState(false)
    let [nigaLe27, setNigaLe27] = useState(false)
    let [nigaLe28, setNigaLe28] = useState(false)

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
                                    <div className='text1'>Marty McFly
                                        <div>Dr. Emit Brown</div>
                                        <div> and Machine Time</div>
                                    </div>
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
                                                                                                                                    <button onClick={() => setNigaLe14(nigaLe14 = !nigaLe14)} className={`but13ep1 ${nigaLe14 && 'active'}`} >search</button>
                                                                                                                                    {nigaLe14 && (
                                                                                                                                        <div className='cadr14'>
                                                                                                                                            <div className='text14'>here it is</div>
                                                                                                                                            <button onClick={() => setNigaLe15(nigaLe15 = !nigaLe15)} className={`but14ep1 ${nigaLe15 && 'active'}`} >take</button>
                                                                                                                                            {nigaLe15 && (
                                                                                                                                                <div className='cadr15'>
                                                                                                                                                    <div className='text15'>take it Marty</div>
                                                                                                                                                    <button onClick={() => setNigaLe16(nigaLe16 = !nigaLe16)} className={`but15ep1 ${nigaLe16 && 'active'}`} >grab</button>
                                                                                                                                                    {nigaLe16 && (
                                                                                                                                                        <div className='cadr16'>
                                                                                                                                                            <div className='text16'>give it to me</div>
                                                                                                                                                            <button onClick={() => setNigaLe17(nigaLe17 = !nigaLe17)} className={`but16ep1 ${nigaLe17 && 'active'}`} >give</button>
                                                                                                                                                            {nigaLe17 && (
                                                                                                                                                                <div className='cadr17'>
                                                                                                                                                                    <div className='text17'>just a minute</div>
                                                                                                                                                                    <button onClick={() => setNigaLe18(nigaLe18 = !nigaLe18)} className={`but17ep1 ${nigaLe18 && 'active'}`} >let's do it</button>
                                                                                                                                                                    {nigaLe18 && (
                                                                                                                                                                        <div className='cadr18'>
                                                                                                                                                                            <div className='text18'>catch</div>
                                                                                                                                                                            <button onClick={() => setNigaLe19(nigaLe19 = !nigaLe19)} className={`but18ep1 ${nigaLe19 && 'active'}`} >begin</button>
                                                                                                                                                                            {nigaLe19 && (
                                                                                                                                                                                <div className='cadr19'>
                                                                                                                                                                                    <div className='text19'>tighten the bolt</div>
                                                                                                                                                                                    <button onClick={() => setNigaLe20(nigaLe20 = !nigaLe20)} className={`but19ep1 ${nigaLe20 && 'active'}`} >tighten</button>
                                                                                                                                                                                    {nigaLe20 && (
                                                                                                                                                                                        <div className='cadr20'>
                                                                                                                                                                                            <div className='text20'>tighten it tighter</div>
                                                                                                                                                                                            <button onClick={() => setNigaLe21(nigaLe21 = !nigaLe21)} className={`but20ep1 ${nigaLe21 && 'active'}`} >repair</button>
                                                                                                                                                                                            {nigaLe21 && (
                                                                                                                                                                                                <div className='cadr21'>
                                                                                                                                                                                                    <div className='text21'>knock here</div>
                                                                                                                                                                                                    <button onClick={() => setNigaLe22(nigaLe22 = !nigaLe22)} className={`but21ep1 ${nigaLe22 && 'active'}`} >knock</button>
                                                                                                                                                                                                    {nigaLe22 && (
                                                                                                                                                                                                        <div className='cadr22'>
                                                                                                                                                                                                            <div className='text22'>ready</div>
                                                                                                                                                                                                            <button onClick={() => setNigaLe23(nigaLe23 = !nigaLe23)} className={`but22ep1 ${nigaLe23 && 'active'}`} >fix</button>
                                                                                                                                                                                                            {nigaLe23 && (
                                                                                                                                                                                                                <div className='cadr23'>
                                                                                                                                                                                                                    <div className='text23'>very nice</div>
                                                                                                                                                                                                                    <button onClick={() => setNigaLe24(nigaLe24 = !nigaLe24)} className={`but23ep1 ${nigaLe24 && 'active'}`} >super</button>
                                                                                                                                                                                                                    {nigaLe24 && (
                                                                                                                                                                                                                        <div className='cadr24'>
                                                                                                                                                                                                                            <div className='text24'>everything is perfect</div>
                                                                                                                                                                                                                            <button onClick={() => setNigaLe25(nigaLe25 = !nigaLe25)} className={`but24ep1 ${nigaLe25 && 'active'}`} >get out</button>
                                                                                                                                                                                                                            {nigaLe25 && (
                                                                                                                                                                                                                                <div className='cadr25'>
                                                                                                                                                                                                                                    <div className='text25'>thanks Marty</div>
                                                                                                                                                                                                                                    <button onClick={() => setNigaLe26(nigaLe26 = !nigaLe26)} className={`but25ep1 ${nigaLe26 && 'active'}`} >joy</button>
                                                                                                                                                                                                                                    {nigaLe26 && (
                                                                                                                                                                                                                                        <div className='cadr26'>
                                                                                                                                                                                                                                            <div className='text26'>get ready for the road </div>
                                                                                                                                                                                                                                            <button onClick={() => setNigaLe27(nigaLe27 = !nigaLe27)} className={`but26ep1 ${nigaLe27 && 'active'}`} >engine</button>
                                                                                                                                                                                                                                            {nigaLe27 && (
                                                                                                                                                                                                                                                <div className='cadr27'>
                                                                                                                                                                                                                                                    <button onClick={() => setNigaLe28(nigaLe28 = !nigaLe28)} className={`but27ep1 ${nigaLe28 && 'active'}`} >com</button>
                                                                                                                                                                                                                                                    {nigaLe28 && (
                                                                                                                                                                                                                                                        <div className='text27'>
                                                                                                                                                                                                                                                            to be continued. watch episode 2.
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
