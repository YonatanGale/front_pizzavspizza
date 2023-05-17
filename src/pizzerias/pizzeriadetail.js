import React, { Component } from 'react';
import PizzaUpdate from './pizzeriaupdate';
import axios from 'axios';



class PizzaDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
        };
        this.updatePizzeriaDetails = this.updatePizzeriaDetails.bind(this);
        this.deletePizzeria = this.deletePizzeria.bind(this);
    }

    deletePizzeria(obj){
        console.log(obj);
        axios.delete("http://127.0.0.1:8000".concat(obj))
        .then((response) => {
            console.log(response);
        })
        .catch(function (error) {
            console.log.apply(error);
        });
    }

    updatePizzeriaDetails() {
        this.setState({ showComponent: true });
    }

    render() {
        const obj = this.props.pizzariaDetail;
        return (
            <div style={{ color: "yellow", border: "1px solid yellow" }}>
                <h4>{obj.pizzeria_name}</h4>
                <h5>
                    Direccion: {obj.city} {obj.zip_code} {obj.street} {obj.state}
                </h5>
                <h6>Telefono: {obj.phone_number}</h6>
                <p>{obj.description}</p>
                <button style={{ backgroundColor: "white" }} onClick={() => this.updatePizzeriaDetails()}>Update</button>
                {this.state.showComponent ? <PizzaUpdate pizzeriaUpdate={obj}/> : null}
                <button style={{ backgroundColor: "white" }} onClick={() => this.deletePizzeria(obj.delete)}>Borrar</button>
            </div>
        );
    }
}
export default PizzaDetail;