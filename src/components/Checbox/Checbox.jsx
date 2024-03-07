import "./Checbox.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function Checbox() {
    const [openList, setOpenList] = useState((false));
    const [selectedNumber, setSelectedNumber] = useState(null);

    const arrauWork = [
        { id: 1, numbers: 1 },
        { id: 2, numbers: 2 },
        { id: 3, numbers: 3 },
        { id: 4, numbers: 4 },
        { id: 5, numbers: 5 },
    ]

    function handleOpen() {
        setSelectedNumber(true);
        setOpenList(true);
    }

    function handleClose() {
        setOpenList(false);
        setSelectedNumber(false);
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


                            {openList ? (<> <label className="checboxes__label" htmlFor="first" >Подготовительные работы</label>
                                <button className="checboxes__button" onClick={handleClose}>Скрыть</button></>) : (<>
                                    <label className="checboxes__label" htmlFor="first" >Подготовительные работы</label>
                                    <button className="checboxes__button" onClick={() => handleOpen()}>Раскрыть</button></>)}
                        </div>

                        {openList ? (<ul className="checboxes__sublist checkboxes__sublist--hide">
                            {arrauWork.map((item) => (
                                <li key={item.id} className="checboxes__subitem">
                                    <div className="item item__inst">
                                        <input className="checboxes__input" type="checkbox" name="first1" id="first1" />
                                        <label className="checboxes__label" htmlFor="first1">Подготовительные работы <span>{item.numbers}</span></label>
                                        <Link className="checboxes__button" to="https://ru.wikipedia.org/wiki/Заглавная_страница" target="_blank">Прочитать инструкцию</Link>
                                    </div>
                                </li>))}
                            {/* <li className="checboxes__subitem">
                                <div className="item item__inst">
                                    <input className="checboxes__input" type="checkbox" name="first1" id="first1" />
                                    <label className="checboxes__label" htmlFor="first1">Подготовительные работы 21</label>
                                    <Link className="checboxes__button" to="https://ru.wikipedia.org/wiki/Заглавная_страница" target="_blank">Прочитать инструкцию</Link>
                                </div>
                            </li>
                            <li className="checboxes__subitem">
                                <div className="item item__inst">
                                    <input className="checboxes__input" type="checkbox" name="first1" id="first1" />
                                    <label className="checboxes__label" htmlFor="first1">Подготовительные работы 3</label>
                                    <Link className="checboxes__button" to="https://ru.wikipedia.org/wiki/Заглавная_страница" target="_blank">Прочитать инструкцию</Link>
                                </div>
                            </li>
                            <li className="checboxes__subitem">
                                <div className="item item__inst">
                                    <input className="checboxes__input" type="checkbox" name="first1" id="first1" />
                                    <label className="checboxes__label" htmlFor="first1">Подготовительные работы 4</label>
                                    <Link className="checboxes__button" to="https://ru.wikipedia.org/wiki/Заглавная_страница" target="_blank">Прочитать инструкцию</Link>
                                </div>
                            </li>
                            <li className="checboxes__subitem">
                                <div className="item item__inst">
                                    <input className="checboxes__input" type="checkbox" name="first1" id="first1" />
                                    <label className="checboxes__label" htmlFor="first1">Подготовительные работы 5</label>
                                    <Link className="checboxes__button" to="https://ru.wikipedia.org/wiki/Заглавная_страница" target="_blank">Прочитать инструкцию</Link>
                                </div>
                            </li> */}
                        </ul>) : ""}
                    </li>


                    <li className="checboxes__item">
                        <div className="item">
                            <input className="checboxes__input" type="checkbox" name="second" id="second" />
                            <label className="checboxes__label" htmlFor="second">SEO аналитика</label>
                            <button className="checboxes__button">Раскрыть</button>
                        </div>
                        <ul className="checboxes__sublist checkboxes__sublist--hide">
                            <li className="checboxes__subitem">
                                <div className="item item__inst">
                                    <input className="checboxes__input" type="checkbox" name="second1" id="second1" />
                                    <label className="checboxes__label" htmlFor="second1">SEO аналитика 1</label>
                                    <Link className="checboxes__button">Прочитать инструкцию</Link>
                                </div>
                            </li>
                            <li className="checboxes__subitem">
                                <div className="item item__inst">
                                    <input className="checboxes__input" type="checkbox" name="second2" id="second2" />
                                    <label className="checboxes__label" htmlFor="second2">SEO аналитика 2</label>
                                    <Link className="checboxes__button">Прочитать инструкцию</Link>
                                </div>
                            </li>
                        </ul>
                    </li>

                    <li className="checboxes__item">
                        <div className="item">
                            <input className="checboxes__input" type="checkbox" name="second" id="second" />
                            <label className="checboxes__label" htmlFor="second">Стретегия продвижения</label>
                            <button className="checboxes__button">Раскрыть</button>
                        </div>
                        <ul className="checboxes__sublist checkboxes__sublist--hide">
                            <li className="checboxes__subitem">
                                <div className="item item__inst">
                                    <input className="checboxes__input" type="checkbox" name="second1" id="second1" />
                                    <label className="checboxes__label" htmlFor="second1">Стретегия продвижения 1</label>
                                    <Link className="checboxes__button">Прочитать инструкцию</Link>
                                </div>
                            </li>
                            <li className="checboxes__subitem">
                                <div className="item item__inst">
                                    <input className="checboxes__input" type="checkbox" name="second2" id="second2" />
                                    <label className="checboxes__label" htmlFor="second2">Стретегия продвижения 2</label>
                                    <Link className="checboxes__button">Прочитать инструкцию</Link>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul >
            </section >

        </>
    )
}

export default Checbox;