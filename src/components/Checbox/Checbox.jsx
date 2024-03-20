import "./Checbox.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { ProgressBar } from 'primereact/progressbar';

function Checbox() {
    const [openList1, setOpenList1] = useState(false);
    const [openList2, setOpenList2] = useState(false);
    const [openList3, setOpenList3] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState(null);
    const [checked1, setChecked1] = useState([true]);
    const [checked2, setChecked2] = useState([true]);
    const [checked3, setChecked3] = useState([true]);
    const [mainChecked1, setMainChecked1] = useState(false);
    const [mainChecked2, setMainChecked2] = useState(false);
    const [mainChecked3, setMainChecked3] = useState(false);

    function handleChange(listNumber, index) {
        if (listNumber === 1) {
            const newChecked1 = [...checked1];
            newChecked1[index] = !newChecked1[index];
            setChecked1(newChecked1);

            if (index !== 0) {
                const allChecked = newChecked1.slice(1).every((item) => item);
                setMainChecked1(allChecked);
            }
        } else if (listNumber === 2) {
            const newChecked2 = [...checked2];
            newChecked2[index] = !newChecked2[index];
            setChecked2(newChecked2);

            if (index !== 0) {
                const allChecked = newChecked2.slice(1).every((item) => item);
                setMainChecked2(allChecked);
            }
        } else if (listNumber === 3) {
            const newChecked3 = [...checked3];
            newChecked3[index] = !newChecked3[index];
            setChecked3(newChecked3);

            if (index !== 0) {
                const allChecked = newChecked3.slice(1).every((item) => item);
                setMainChecked3(allChecked);
            }
        }
    }

    const arrayWork = [
        { id: 1, name: "Подготовительные работы 1", link: "Прочитать инструкцию" },
        { id: 2, name: "Подготовительные работы 2", link: "Прочитать инструкцию" },
        { id: 3, name: "Подготовительные работы 3", link: "Прочитать инструкцию" },
        { id: 4, name: "Подготовительные работы 4", link: "Прочитать инструкцию" },
        { id: 5, name: "Подготовительные работы 5", link: "Прочитать инструкцию" },
    ]

    const arraySeo = [
        { id: 1, name: "SEO аналитика 1", link: "Прочитать инструкцию" },
        { id: 2, name: "SEO аналитика 2", link: "Прочитать инструкцию" },
        { id: 3, name: "SEO аналитика 3", link: "Прочитать инструкцию" },
        { id: 4, name: "SEO аналитика 4", link: "Прочитать инструкцию" },
        { id: 5, name: "SEO аналитика 5", link: "Прочитать инструкцию" },
    ]

    const arrayStrategi = [
        { id: 1, name: "Стратегия продвижения 1", link: "Прочитать инструкцию" },
        { id: 2, name: "Стратегия продвижения 2", link: "Прочитать инструкцию" },
        { id: 3, name: "Стратегия продвижения 3", link: "Прочитать инструкцию" },
        { id: 4, name: "Стратегия продвижения 4", link: "Прочитать инструкцию" },
        { id: 5, name: "Стратегия продвижения 5", link: "Прочитать инструкцию" },
    ]

    function handleMainChecked(listNumber) {
        if (listNumber === 1) {
            const newMainChecked1 = !mainChecked1;
            setMainChecked1(newMainChecked1);

            if (newMainChecked1) {
                const newChecked = new Array(checked1.length).fill(true);
                setChecked1(newChecked);
            } else {
                const newChecked = new Array(checked1.length).fill(false);
                setChecked1(newChecked);
            }
        } else if (listNumber === 2) {
            const newMainChecked2 = !mainChecked2;
            setMainChecked2(newMainChecked2);

            if (newMainChecked2) {
                const newChecked = new Array(checked2.length).fill(true);
                setChecked2(newChecked);
            } else {
                const newChecked = new Array(checked2.length).fill(false);
                setChecked2(newChecked);
            }
        } else if (listNumber === 3) {
            const newMainChecked3 = !mainChecked3;
            setMainChecked3(newMainChecked3);

            if (newMainChecked3) {
                const newChecked = new Array(checked3.length).fill(true);
                setChecked3(newChecked);
            } else {
                const newChecked = new Array(checked3.length).fill(false);
                setChecked3(newChecked);
            }
        }
    }

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
                    <ProgressBar value={100} />
                    <p className="progress__text">
                        Продвижение на <span className="progress__value">0</span>%
                    </p>
                </div>
            </div>
            <section className="container checboxes">
                <ul className="checboxes__list">
                    <li className="checboxes__item" >
                        <div className="item">
                            <input className="checboxes__input" type="checkbox" name="first" id="first"
                                onChange={handleMainChecked} checked={mainChecked1} />

                            {openList1 ? (<> <label className="checboxes__label" htmlFor="first" >Подготовительные работы</label>
                                <button className="checboxes__button" onClick={() => handleClose(1)}>Скрыть</button></>) : (<>
                                    <label className="checboxes__label" htmlFor="first" >Подготовительные работы</label>
                                    <button className="checboxes__button" onClick={() => handleOpen(1)}>Раскрыть</button></>)}
                        </div>

                        {openList1 ? (<ul className="checboxes__sublist checkboxes__sublist--hide">
                            {arrayWork.map((item) => (
                                <li key={item.id} className="checboxes__subitem">
                                    <div className="item item__inst">
                                        <input className="checboxes__input" type="checkbox" name="first1" id="first1"
                                            onChange={() => handleChange(item.id)} checked={checked1[item.id]} />
                                        <label className="checboxes__label" htmlFor="first">{item.name}</label>
                                        <Link className="checboxes__button" to="https://ru.wikipedia.org/wiki/Заглавная_страница" target="_blank">{item.link}</Link>
                                    </div>
                                </li>))}
                        </ul>) : ""}
                    </li>

                    <li className="checboxes__item">
                        <div className="item">
                            <input className="checboxes__input" type="checkbox" name="second1" id="second1"
                                onChange={handleMainChecked} checked={mainChecked2} />
                            {openList2 ? (<> <label className="checboxes__label" htmlFor="second1">SEO аналитика</label>
                                <button className="checboxes__button" onClick={() => handleClose(2)}>Cкрыть</button></>) : (<>
                                    <label className="checboxes__label" htmlFor="second1" >SEO аналитика</label>
                                    <button className="checboxes__button" onClick={() => handleOpen(2)}>Раскрыть</button></>)}
                        </div>

                        {openList2 ? (<ul className="checboxes__sublist checkboxes__sublist--hide">
                            {arraySeo.map((item) => (
                                <li key={item.id} className="checboxes__subitem">
                                    <div className="item item__inst">
                                        <input className="checboxes__input" type="checkbox" name="second1" id="second1"
                                            onChange={() => handleChange(item.id)} checked={checked2[item.id]} />
                                        <label className="checboxes__label" htmlFor="second1">{item.name}</label>
                                        <Link className="checboxes__button" to="https://ru.wikipedia.org/wiki/Заглавная_страница" target="_blank">{item.link}</Link>
                                    </div>
                                </li>
                            ))}
                        </ul>) : ""}

                    </li>

                    <li className="checboxes__item">
                        <div className="item">
                            <input className="checboxes__input" type="checkbox" name="second3" id="second3"
                                onChange={handleMainChecked} checked={mainChecked3} />
                            {openList3 ? (<><label className="checboxes__label" htmlFor="second3">Стратегия продвижения</label>
                                <button className="checboxes__button" onClick={() => handleClose(3)}>Cкрыть</button></>) : (
                                <><label className="checboxes__label" htmlFor="second">Стратегия продвижения</label>
                                    <button className="checboxes__button" onClick={() => handleOpen(3)}>Раскрыть</button></>
                            )}
                        </div>
                        {openList3 ? (<ul className="checboxes__sublist checkboxes__sublist--hide">
                            {arrayStrategi.map((item) => (
                                <li key={item.id} className="checboxes__subitem" >
                                    <div className="item item__inst">
                                        <input className="checboxes__input" type="checkbox" name="second3" id="second3"
                                            onChange={() => handleChange(item.id)} checked={checked3[item.id]} />
                                        <label className="checboxes__label" htmlFor="second1">{item.name}</label>
                                        <Link className="checboxes__button">{item.link}</Link>
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