import "./Calc.css";
import { useState } from 'react';

function Calc() {
    // const breed = document.querySelector(".calculator__breed"); //порода
    // const age = document.querySelector(".calculator__age"); //возраст
    // const activity = document.querySelector(".calculator__form-active"); //актвиность
    // const weight = document.querySelector(".calculator__weight"); //вес
    // const result = document.querySelector(".calculator__form-result"); //результат
    const initialFormState = {
        breeds: "",
        age: "",
        activity: "",
        weight: ""
    };

    const [formData, setFormData] = useState(initialFormState);
    const [foodAmount, setFoodAmount] = useState(0);

    const calculateFood = (breed, age, activity, weight) => {
        let amount = 0;

        //логика расчет количества еды
        if (breed === "Овчарка") {
            if (age === "Меньше 1 года") {
                amount = 600;
            } else if (age === "От 1 года до 5 лет") {
                amount = 800;
            } else {
                amount = 700;
            }
        } else if (breed === "Лабрадор") {
            if (age === "Меньше 1 года") {
                amount = 500;
            } else if (age === "От 1 года до 5 лет") {
                amount = 700;
            } else {
                amount = 400;
            }
        }

        if (weight >= 5 && weight <= 10) {
            amount *= 1.2;
        } else if (weight > 10 && weight <= 20) {
            amount *= 1.3;
        } else if (weight > 20 && weight <= 30) {
            amount *= 1.4;
        }

        if (activity === "active") {
            amount *= 1.3;
        }

        setFoodAmount(amount);
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        calculateFood(formData.breeds, formData.age, formData.activity, parseInt(formData.weight, 10));
    };

    const handleSubmitReset = (e) => {
        e.preventDefault();
        setFormData(initialFormState);
        setFoodAmount(0);
    };


    // Обновление состояния формы при изменении значений в полях
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    return (
        <section className="calculator">
            <article className="calculator__block">
                <h1 className="calculator__title">
                    Калькулятор корма еды</h1>
                <p className="calculator__description">
                    Для расчёта необходимо ввести данные о питомце в форму:
                    порода, возраст, активность, а также вес.</p>
            </article>
            <aside className="calculator__content">
                <form className="calculator__form" onSubmit={handleSubmit} >

                    <div className="calculator__form-parametr">
                        <label className="calculator__form-label calculator__breed">Порода</label>
                        <select className="calculator__form-select" required id="breeds" name="breeds" onClick={handleInputChange}>
                            <option className="calculator__form-option" hidden value="">Выбрать</option>
                            <option className="calculator__form-option">Овчарка</option>
                            <option className="calculator__form-option">Лабрадор</option>
                        </select></div>

                    <div className="calculator__form-parametr">
                        <label className="calculator__form-label calculator__age">Возраст</label>
                        <select className="calculator__form-select" required id="age" name="age" onClick={handleInputChange}>
                            <option className="calculator__form-option" defaultValue="" value="" hidden>Выбрать</option>
                            <option className="calculator__form-option">Меньше 1 года</option>
                            <option className="calculator__form-option">От 1 года до 5 лет</option>
                            <option className="calculator__form-option">Более 5 лет</option>
                        </select></div>

                    <div className="calculator__form-parametr">
                        <p className="calculator__form-label calculator__form-active">Активность</p>
                        <input className="calculator__form-input" type="radio" name="activity" id="temperate" value="temperate" required onClick={handleInputChange} />
                        <label className="calculator__form-label" htmlFor="temperate">Умеренный</label>
                        <input className="calculator__form-input" type="radio" name="activity" id="active" defaultValue="active" required onClick={handleInputChange} />
                        <label className="calculator__form-label" htmlFor="active">Активный</label>
                    </div>

                    <div className="calculator__form-parametr">
                        <label className="calculator__form-label calculator__weight" value="" htmlFor="weight">Вес:</label>
                        <input className="calculator__form-select" type="number" id="weight" name="weight" min="0" max="30" step="1" defaultValue="" required onClick={handleInputChange} />

                    </div>
                    <button type="submit" className="calculator__button calculator__form-button">Расчитать</button>
                    <h2 className="calculator__form-result">Итог - <span>{foodAmount} гр.</span></h2>

                    <button type="submit" onClick={handleSubmitReset} className="calculator__button calculator__button-reset" >Сбросить</button>

                </form>
            </aside>

        </section>
    )
}

export default Calc;