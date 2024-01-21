import React from 'react';

class Anketa extends React.Component {

    state = {
        fio: "Иванов", // начальное значение поля формы
    };

    fioChanged = eo => {
        this.setState( { fio: eo.target.value } );
    };

    render() {
        return (
            <div>
                <span>Введите свою фамилию</span><br/>
                <input type="text" value={this.state.fio} onChange={this.fioChanged} /><br/>
                <span>Вы ввели: {this.state.fio}</span>
            </div>
        );
    }

}

export default Anketa;
