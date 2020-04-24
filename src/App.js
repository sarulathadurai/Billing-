import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";
import Input from "./components/Input";
import Modal from "./components/Modal";
import ListItem from './components/ListItem';
import Image from './components/Image';


class App extends Component {
    constructor(){
        super();

        this.state = {
            total:"",
            result: "",
            item : "",
            showModal : false
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        var checkResult = ''
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+');
        }

        else {
            checkResult = this.state.result;
        }
           
        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(checkResult) || "" ) + ""
            })

        } 
        catch (e) {
            this.setState({
                result: "error"
            });

        }

        this.setState ({

            total:this.state.result
        })

        
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    //rendering portal

    handleShow = () => {

        this.setState({showModal : true});

    }
    
    handleHide = () => {

        this.setState({showModal : false});
    }
    
    handleChange = (e) => {

        this.setState ({

            item:e.target.value

        })

    }


    render() {

        const modal = this.state.showModal ? (
            <Modal>
                 <div className="calculator-body">

                 <ResultComponent result={this.state.result}/>
                 <KeyPadComponent onClick={this.onClick}/>

                 <button className = "btn-style"onClick = {this.handleHide}>close</button>

                 </div>
               
            </Modal>
        ) :null;        
           
        const displayItemFromCalc =  this.state.total? (

            <ListItem item={this.state.item} amount={this.state.result} />

        ) :null;
     
        return (
            <div onChange = {this.handleChange}>
                    
                    <p>Hey guys this is a simple billing system where you can enter the items and amount and the total gets printed.You can even use calculator if you want assistance</p>
                    <Input />
                    {displayItemFromCalc}
                    <img className="img-align" onClick = {this.handleShow} src="https://img.icons8.com/dusk/64/000000/calculator.png"/>
                    {modal}


            </div>
        );
    }
}

export default App;
