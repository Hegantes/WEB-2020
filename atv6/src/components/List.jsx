import React, {Component} from 'react';
//import axios from 'axios';
import TableRow from './TableRow';
import FirebaseContext from '../utils/FirebaseContext';
import FirebaseService from '../services/FirebaseService';

const ListPage = () => (
    <FirebaseContext.Consumer>
        {contexto => <List firebase={contexto} />}
    </FirebaseContext.Consumer>
)


/*export default*/ class List extends Component{

    constructor(props){
        super(props);
        
        this._isMounted = false;
        this.state = {disciplina:[]};
        this.apagarDisciplinaPorId = this.apagarDisciplinaPorId.bind(this);
    }

    componentDidMount(){
       this._isMounted = true;
       FirebaseService.list(this.props.firebase.getFirestore(), 
       (disciplina)=>{
            if(disciplina){
                if(this._isMounted){
                    this.setState({disciplina:disciplina});
                }
            }
       })
       //this.ref = this.props.firebase.getFirestore().collection('disciplina');
       //this.ref.onSnapshot(this.alimentarDisciplinas.bind(this));
       
        /*axios.get("http://localhost:3002/disciplinas/list")
        .then(
            (res)=>{
                this.setState({disciplina: res.data});
            }
        )
        .catch(
            (error)=>{
                console.log(error);
            }
        )*/
    }

    componentWillUnmount(){
        this._isMounted = false;
    }

    /*alimentarDisciplinas(query){
        let disciplinas = []
        query.forEach(
            (doc)=>{
                const {nome,curso,capacidade} = doc.data()
                disciplinas.push(
                    {
                        _id: doc.id,
                        nome,
                        curso,
                        capacidade,
                    }
                )
            }
        )
        if(this._isMounted)
        this.setState({disciplinas:disciplinas})
    }*/

    montarTabela(){
        if(!this.state.disciplina){
             return
        }else{
            return this.state.disciplina.map(
            (disciplina, i)=>{
                return <TableRow disciplina={disciplina} key={i} apagarDisciplinaPorId={this.apagarDisciplinaPorId}
                firebase = {this.props.firebase}
                />
            }
        )
        }
    }

    apagarDisciplinaPorId(id){
        let disciplinaTemp = this.state.disciplina
        for(let i = 0; i<disciplinaTemp.length; i++){
            if(disciplinaTemp[i]._id===id){
                disciplinaTemp.splice(i, 1);
            }
        }
        this.setState({disciplina:disciplinaTemp});
    }

    render(){
        return(
            <div style={{marginTop:10}}>
            <h3>Listar Disciplina</h3>
            <table className="table table-striped" style={{ marginTop:20}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Curso</th>
                        <th>Capacidade</th>
                        <th colSpan="2"></th>
                    </tr>
                </thead>
                <tbody>
                    {this.montarTabela()}
                </tbody>
            </table>
            </div>
        );
    }
}

    export default ListPage;