import React, {Component} from 'react';
import Card from './Card';
import {connect} from 'react-redux';
import {changeNumber2} from '../store/actions/calcNumber2';

class Number2 extends Component{

    next(){
        const number2 = this.props.number2 + 1;
        this.props.changeNumber2(number2);
        
    }

    previous(){
        const number2 = this.props.number2 - 1;
        this.props.changeNumber2(number2);
    }

    render(){
        return(
            <Card title="Number 2">
                <div>
                    <button className="btn btn-secondary" onClick={()=>this.next()}>+</button>
                </div>
                <strong>{this.props.number2}</strong>
                <div>
                    <button className="btn btn-secondary" onClick={()=>this.previous()}>-</button>
                </div>
            </Card>
        )
    }
}

function mapStateToProps(state){
    return {
        number2: state.calcNumber.number2 
    }
}

function mapActionCreatorToProps(dispatch){
    return{
        changeNumber2(new_number){
            const action = changeNumber2(new_number)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapActionCreatorToProps)(Number2)