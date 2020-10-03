export default class FirebaseService{

    static list = (firestore,callback) =>{

        let ref = firestore.collection('disciplina');
        ref.onSnapshot(
            (query) => {
                let disciplinas = []
                query.forEach(
                    (doc) => {
                        const { nome, curso, capacidade}  = doc.data()
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

                    callback(disciplinas);

            }
        )
    }

    static create = (firestore,callback,disciplina) =>{

        firestore.collection('disciplina').add(
            {
                nome: disciplina.nome,
                curso: disciplina.curso,
                capacidade: disciplina.capacidade
            }
        )
        .then(()=>callback('ok'))
        .catch(error=>callback('nok'))

        
    }

    static edit = (firestore,callback,disciplina,id) =>{
        firestore.collection('disciplina').doc( id).set(
            {
                nome: disciplina.nome,
                curso: disciplina.curso,
                capacidade: disciplina.capacidade,
            }
        )
        .then(()=>{
            callback('ok')
        })
        .catch((error)=>{
            callback('error')
        })

        
    }

    static delete = (firestore,callback,id) =>{
        firestore.collection('disciplina').doc(id).delete()
            .then(()=>callback('ok'))
            .catch(()=>callback('nok'))
        
    }

    static retrieve = (firestore,callback,id) =>{
        firestore.collection('disciplina').doc(id).get()
        .then(
            (doc)=>{
                callback(
                    {
                        nome:doc.data().nome,
                        curso:doc.data().curso,
                        capacidade:doc.data().capacidade
                    }
                )
                    
            }
        )
        .catch(error => callback(null))

        
    }
}