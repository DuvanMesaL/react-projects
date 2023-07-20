import React from 'react';
import {ButtonChangeGrade} from './ComponentsForComponents/ButtonChangeGrades.jsx';

const WheatherPronosticTopInfoButtons = ({activeButton, handleChangeUnit}) => {
    return (
        <section className="Wheather-Pronostic-Top-info-buttons">
            <ButtonChangeGrade
                action = "ºF"
                functionFC={() => handleChangeUnit('F')}
                className={activeButton === 'F' ? 'active' : ''}
            />
            <ButtonChangeGrade
                action = "ºC"
                functionFC={() => handleChangeUnit('C')}
                className={activeButton === 'C' ? 'active' : ''}
            />
        </section>
    );
};

export default WheatherPronosticTopInfoButtons;
