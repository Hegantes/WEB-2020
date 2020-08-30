import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from  'axios';


export default class TableRow extends Component{
    
    
    constructor(props){

        super(props)
        this.apagar = this.apagar.bind(this);
    }

    apagar(){
        axios.delete("http://localhost:3002/disciplinas/delete/" + this.props.disciplina._id)
        .then(
            (res)=>{
                this.props.apagarDisciplinaPorId(this.props.disciplina._id)
                console.log("Registro apagado")
                alert("Disciplina apagada com sucesso!")
        })
        .catch((error)=>{console.log(error)})
    }

    
    render(){
        return(
            <tr>
                <td>
                    {this.props.disciplina._id}
                </td>
                <td>
                    {this.props.disciplina.nome}
                </td>
                <td>
                    {this.props.disciplina.curso}
                </td>
                <td>
                    {this.props.disciplina.capacidade}
                </td>
                <td style={{textAlign:"center"}}>
                    <Link to={"/edit/"+this.props.disciplina._id} className="btn btn-outline-warning">Editar</Link>
                </td>
                <td style={{textAlign:"center"}}>
                    <button onClick={this.apagar} className="btn btn-outline-danger">Apagar</button>
                </td>
            </tr>
            
        )
    }
}