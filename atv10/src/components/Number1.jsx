import React, {Component} from 'react';
import Card from './Card';
import {connect} from 'react-redux';
import {changeNumber1} from '../store/actions/calcNumber1';

class Number1 extends Component{

    next(){
        const number1 = this.props.number1 + 1;
        this.props.changeNumber1(number1);
        
    }

    previous(){
        const number1 = this.props.number1 - 1;
        this.props.changeNumber1(number1);
    }

    render(){
        return(
            <Card title="Number 1">
                <div>
                    <button className="btn btn-secondary" onClick={()=>this.next()}>+</button>
                </div>
                <strong>{this.props.number1}</strong>
                <div>
                    <button className="btn btn-secondary" onClick={()=>this.previous()}>-</button>
                </div>
            </Card>
        )
    }
}

function mapStateToProps(state){
    return {
        number1: state.calcNumber.number1
    }
}

function mapActionCreatorToProps(dispatch){
    return{
        changeNumber1(new_number){
            const action = changeNumber1(new_number)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapActionCreatorToProps)(Number1)