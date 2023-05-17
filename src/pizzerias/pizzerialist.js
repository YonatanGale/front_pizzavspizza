import React, { Component } from 'react';
import PizzaDetail from './pizzeriadetail';
import PizzaForm from './pizzeriaform';
import axios from 'axios';

class PizzaList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pizzeriasData: [],
            pizzeria: " ",
            showComponent: false,
        };
        this.getPizzaDetail = this.getPizzaDetail.bind(this);
        this.showPizzeriaDetails = this.showPizzeriaDetails.bind(this);
    }

    getPizzaDetail(item){
        axios.get("http://127.0.0.1:8000".concat(item.absolute_url))
         .then((response) => {
         this.setState({pizzeria: response.data})
         })
         .catch(function (error) {
         console.log(error);
         });
        }
    showPizzeriaDetails(item){
        this.getPizzaDetail(item);
        this.setState({ showComponent: true });
        }

    componentDidMount(){
        axios
        .get("http://127.0.0.1:8000/")
        .then((response) => {
            this.setState({pizzeriasData: response.data});
        })
        .catch(function (error) {
            console.log(error);
           });
    }

    render() {
        return (
            <div>
                {this.state.pizzeriasData.map((item) => { 
                    return (
                    <h3 key={item.id} onClick={() => this.showPizzeriaDetails(item)}>
                        {item.pizzeria_name}, {item.city}
                    </h3>
                );
                })}

                {this.state.showComponent ? (
                    <PizzaDetail pizzariaDetail= {this.state.pizzeria} />
                ) : null}

                <PizzaForm/>

            </div>
        );
    }
}
export default PizzaList;