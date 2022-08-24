import Autores from "../models/Autor.js";


class AutorController {

    static listarAutores = (req, res) => {
        Autores.find((err, autores)=>{
            res.status(200).json(autores)
        })
    }

    static listarAutorPorId =(req, res) => {
        const id = req.params.id;

        Autores.findById(id, (err, autores)=> {
            if(err) {
                res.status(400).send({message: `${err.message} - Id do livro não localizado`})
            } else {
                res.status(200).send(autores);
            }
        })
    }

    static cadastrarAutor = (req, res) => {
        let autor = new Autores(req.body);

        autor.save((err)=> {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar Autor`})
            } else {
                res.status(201).send(autor.toJSON())
            }
        })

    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id;

        Autores.findByIdAndUpdate(id, {$set: req.body}, (err)=>{
            if(!err){
                res.status(200).send({message: 'autor atualizado com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static excluirautor = (req, res) => {
        const id = req.params.id;

        Autores.findByIdAndDelete(id, (err)=> {
            if(!err){
                res.status(200).send({message: 'Autor removido com sucesso'})
            } else {
                res.status(500).send({message: `${err.message}`})
            }
        })
    }

    /*static deletaAutor = (req, res) => {
        
    }*/

}

export default AutorController;