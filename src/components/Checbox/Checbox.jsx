import "./Checbox.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { ProgressBar } from 'primereact/progressbar';
// import 'primereact/resources/themes/saga-blue/theme.css';
// import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css';



function Checbox() {
    const [openList1, setOpenList1] = useState(false);
    const [openList2, setOpenList2] = useState(false);
    const [openList3, setOpenList3] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState(null);

    const arrayWork = [
        { id: 1, numbers: 1 },
        { id: 2, numbers: 2 },
        { id: 3, numbers: 3 },
        { id: 4, numbers: 4 },
        { id: 5, numbers: 5 },
    ]

    function handleOpen(listNumber) {
        setSelectedNumber(listNumber);
        if (listNumber === 1) {
            setOpenList1(true);
        } else if (listNumber === 2) {
            setOpenList2(true);
        } else if (listNumber === 3) {
            setOpenList3(true);
        }
    }

    function handleClose(listNumber) {
        if (listNumber === 1) {
            setOpenList1(false);
        } else if (listNumber === 2) {
            setOpenList2(false);
        } else if (listNumber === 3) {
            setOpenList3(false)
        }
        setSelectedNumber(null);
    }

    return (
        <>
            <div className="switch">
                <input className="switch__input" type="checkbox" id="switch" name="switch" />
                <label className="switch__label" htmlFor="switch">Admin</label>
            </div>
            <div className="progress">
                <div className="progress__bar">
                    <div className="progress__fill"></div>
                    <ProgressBar value={50}></ProgressBar>
                    <p className="progress__text">
                        Продвижение на <span className="progress__value">0</span>%
                    </p>
                </div>
            </div>
            <section className="container checboxes">
                <ul className="checboxes__list">
                    <li className="checboxes__item">
                        <div className="item">
                            <input className="checboxes__input" type="checkbox" name="first" id="first" />

                            {openList1 ? (<> <label className="checboxes__label" htmlFor="first" >Подготовительные работы</label>
                                <button className="checboxes__button" onClick={() => handleClose(1)}>Скрыть</button></>) : (<>
                                    <label className="checboxes__label" htmlFor="first" >Подготовительные работы</label>
                                    <button className="checboxes__button" onClick={() => handleOpen(1)}>Раскрыть</button></>)}
                        </div>

                        {openList1 ? (<ul className="checboxes__sublist checkboxes__sublist--hide">
                            {arrayWork.map((item) => (
                                <li key={item.id} className="checboxes__subitem">
                                    <div className="item item__inst">
                                        <input className="checboxes__input" type="checkbox" name={`first${item.id}`} id={`first${item.id}`} />
                                        <label className="checboxes__label" htmlFor={`first${item.id}`}>Подготовительные работы <span>{item.numbers}</span></label>
                                        <Link className="checboxes__button" to="https://ru.wikipedia.org/wiki/Заглавная_страница" target="_blank">Прочитать инструкцию</Link>
                                    </div>
                                </li>))}
                        </ul>) : ""}
                    </li>

                    <li className="checboxes__item">
                        <div className="item">
                            <input className="checboxes__input" type="checkbox" name="second" id="second" />
                            {openList2 ? (<> <label className="checboxes__label" htmlFor="second">SEO аналитика</label>
                                <button className="checboxes__button" onClick={() => handleClose(2)}>Cкрыть</button></>) : (<>
                                    <label className="checboxes__label" htmlFor="first" >SEO аналитика</label>
                                    <button className="checboxes__button" onClick={() => handleOpen(2)}>Раскрыть</button></>)}
                        </div>

                        {openList2 ? (<ul className="checboxes__sublist checkboxes__sublist--hide">
                            {arrayWork.map((item) => (
                                <li key={item.id} className="checboxes__subitem">
                                    <div className="item item__inst">
                                        <input className="checboxes__input" type="checkbox" name="second1" id="second1" />
                                        <label className="checboxes__label" htmlFor="second1">SEO аналитика <span>{item.numbers}</span></label>
                                        <Link className="checboxes__button" to="https://ru.wikipedia.org/wiki/Заглавная_страница" target="_blank">Прочитать инструкцию</Link>
                                    </div>
                                </li>
                            ))}
                        </ul>) : ""}

                    </li>

                    <li className="checboxes__item">
                        <div className="item">
                            <input className="checboxes__input" type="checkbox" name="second" id="second" />
                            {openList3 ? (<><label className="checboxes__label" htmlFor="second">Стратегия продвижения</label>
                                <button className="checboxes__button" onClick={() => handleClose(3)}>Cкрыть</button></>) : (
                                <><label className="checboxes__label" htmlFor="second">Стратегия продвижения</label>
                                    <button className="checboxes__button" onClick={() => handleOpen(3)}>Раскрыть</button></>
                            )}
                        </div>
                        {openList3 ? (<ul className="checboxes__sublist checkboxes__sublist--hide">
                            {arrayWork.map((item) => (
                                <li className="checboxes__subitem" key={item.id}>
                                    <div className="item item__inst">
                                        <input className="checboxes__input" type="checkbox" name="second1" id="second1" />
                                        <label className="checboxes__label" htmlFor="second1">Стртегия продвижения <span>{item.numbers}</span></label>
                                        <Link className="checboxes__button">Прочитать инструкцию</Link>
                                    </div>
                                </li>
                            ))}

                        </ul>) : ""}

                    </li>
                </ul >
            </section >

        </>
    )
}

export default Checbox;