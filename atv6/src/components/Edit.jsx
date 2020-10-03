import React, {Component} from 'react';
//import axios from 'axios';
import FirebaseContext from '../utils/FirebaseContext';
import FirebaseService from '../services/FirebaseService';
const EditPage = (props) => (

    <FirebaseContext.Consumer>
        {contexto => <Edit firebase={contexto} id={props.match.params.id}/>}
    </FirebaseContext.Consumer>
)


/*export default*/ class Edit extends Component{

    constructor(props){
        super(props);
        this.state = {nome:"", curso:"", capacidade:""};


        this.setNome = this.setNome.bind(this);
        this.setCurso = this.setCurso.bind(this);
        this.setCapacidade = this.setCapacidade.bind(this);
    
        this.onSubmit = this.onSubmit.bind(this);
    }

    
    setNome(e){
        this.setState({nome:e.target.value});
    }
    setCurso(e){
        this.setState({curso:e.target.value});
    }
    setCapacidade(e){
        this.setState({capacidade:e.target.value});
    }

    onSubmit(e){
     e.preventDefault()

     const disciplina = {
        nome:this.state.nome,
        curso:this.state.curso,
        capacidade:this.state.capacidade}

    FirebaseService.edit(this.props.firebase.getFirestore(),
        (mensagem)=>{
            if(mensagem==='ok') console.log('Disciplina atualizada com sucesso.')
        },disciplina, this.props.id)

        /*this.props.firebase.getFirestore().collection('disciplina').doc(this.props.id).set(
            {
                nome: this.state.nome,
                curso: this.state.curso,
                capacidade: this.state.capacidade,
            }
        )
        .then(()=>{
            console.log('Disciplina Atualizada')
        })
        .catch((error)=>{
            console.log(error)
        })*/

     /*const disciplinaEditada = {
        nome:this.state.nome,
        curso:this.state.curso,
        capacidade:this.state.capacidade}

        axios.put("http://localhost:3002/disciplinas/update/"+this.props.match.params.id, disciplinaEditada)
        .then(
            res=>{
                this.props.history.push("/list");
            }
        )
        .catch(
            (error)=>{
                console.log(error);
            }
        )*/
    }

    componentDidMount(){

        FirebaseService.retrieve(this.props.firebase.getFirestore(),
        (disciplina)=>{
            if(disciplina)
                this.setState({
                    nome: disciplina.nome,
                    curso: disciplina.curso,
                    capacidade: disciplina.capacidade
                })
        },this.props.id)

        /*this.props.firebase.getFirestore().collection('disciplina').doc(this.props.id).get()
        .then(
            (doc)=>{
                this.setState({
                    nome: doc.data().nome,
                    curso: doc.data().curso,
                    capacidade: doc.data().capacidade
                })
            }
        )
        .catch(error => console.log(error))
*/
        /*console.log("ID recebido: " + this.props.match.params.id);  
        axios.get("http://localhost:3002/disciplinas/retrieve/"+this.props.match.params.id)
        .then(
            (res)=>{
                this.setState(
                    {
                        nome:res.data.nome,
                        curso:res.data.curso,
                        capacidade:res.data.capacidade
                    }
                )
            }
        )
        .catch(
            (error)=>{
                console.log(error);
            }
        )*/
    }

    render(){
        return(
            <div style={{marginTop:10}}>
                <h3>Editar Disciplina</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nome: </label>
                        <input type="text" className="form-control" value={this.state.nome} onChange={this.setNome}/>
                    </div>
                    <div className="form-group">
                        <label>Curso: </label>
                        <input type="text" className="form-control" value={this.state.curso} onChange={this.setCurso}/>
                    </div>
                    <div className="form-group">
                        <label>Capacidade: </label>
                        <input type="text" className="form-control" value={this.state.capacidade} onChange={this.setCapacidade}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Salvar" className="btn btn-outline-warning"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditPage;