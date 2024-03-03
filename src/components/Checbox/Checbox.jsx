import "./Checbox.css";
import { Link } from "react-router-dom";

function Checbox() {



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
                            <label className="checboxes__label" htmlFor="first">Подготовительные работы</label>
                            <button className="checboxes__button">Раскрыть</button>
                        </div>
                        <ul className="checboxes__sublist checkboxes__sublist--hide">
                            <li className="checboxes__subitem">
                                <div className="item item__inst">
                                    <input className="checboxes__input" type="checkbox" name="first1" id="first1" />
                                    <label className="checboxes__label" htmlFor="first1">Подготовительные работы 1</label>
                                    <Link className="checboxes__button">Прочитать инструкцию</Link>
                                </div>
                            </li>
                            <li className="checkboxes__subitem">
                                <div className="item item__inst">
                                    <input className="checboxes__input" type="checkbox" name="first1" id="first1" />
                                    <label className="checboxes__label" htmlFor="first1">Подготовительные работы 2</label>
                                    <Link className="checboxes__button">Прочитать инструкцию</Link>
                                </div>
                            </li>
                        </ul>
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
                                    <label className="checboxes__label" htmlFor="second1">Подготовительные работы 1</label>
                                    <Link className="checboxes__button">Прочитать инструкцию</Link>
                                </div>
                            </li>
                            <li className="checboxes__subitem">
                                <div className="item item__inst">
                                    <input className="checboxes__input" type="checkbox" name="second2" id="second2" />
                                    <label className="checboxes__label" htmlFor="second2">Подготовительные работы 2</label>
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
                                    <label className="checboxes__label" htmlFor="second1">Подготовительные работы 1</label>
                                    <Link className="checboxes__button">Прочитать инструкцию</Link>
                                </div>
                            </li>
                            <li className="checboxes__subitem">
                                <div className="item item__inst">
                                    <input className="checboxes__input" type="checkbox" name="second2" id="second2" />
                                    <label className="checboxes__label" htmlFor="second2">Подготовительные работы 2</label>
                                    <Link className="checboxes__button">Прочитать инструкцию</Link>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>

        </>
    )
}

export default Checbox;