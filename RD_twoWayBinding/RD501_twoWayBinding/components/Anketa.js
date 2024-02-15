import React from 'react';

class Anketa extends React.Component {

    state = {
        fio: "Иванов", // начальное значение поля формы
    };

    fioChanged = eo => {
        this.setState( { fio: eo.target.value } );
    };

    setPetrov = () => {
        this.setState({ fio: "Петров" });
    }

    render() {
        return (
            <div>
                <span>Введите свою фамилию</span><br/>
                <input type="text" value={this.state.fio} onChange={this.fioChanged} /><br/>
                <span>Вы ввели: {this.state.fio}</span>
                <br/><input type="button" value="установить Петров" onClick={this.setPetrov}/>
            </div>
        );
    }

}

export default Anketa;
