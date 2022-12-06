// router ('/')

import { Router } from "express";
import manager from "../controllers/manager";
const router = express.Router()
const manager = new manager()
let admin = false


//All
router.get('/', (req,res)=>{
    manager.findAll()
        .then(result=> res.send(result))
        .catch(err=> res.sen({error: 0, mess: err}))
})
//All
router.get('/:id', (req,res)=>{
    if(isNaN(req.params.id))return res.status(400).send({status: "error", message: 'paramas err'})
    manager.findById(req.params.id)
        .then(result=> res.send(result))
        .catch(err=> res.sen({error: 0, mess: err}))
})
//admin
router.post('/', (req,res)=>{
    if(!admin)return res.status(400).send({status: 'error', message: 'user err'})
    if(!req.body.nombre || !req.body.timestamp ||!req.body.nombre || !req.body.descripcion || !req.body.codigo || !req.body.foto ||!req.body.precio || !req.body.stock)
    manager.postProd(req.body)
        .then(result => res.send(result))
        .catch(err=> res.sen({error: 0, mess: err}))
})
//admin
router.put('/:id', (req,res)=>{
    if(isNaN(req.params.id))return res.status(400).send({status: "error", message: 'paramas err'})
    if(!admin)return res.status(400).send({status: 'error', message: 'user err'})
    manager.update(req.params.id)
        .then(result => res.send(result))
        .catch(err=> res.sen({error: 0, mess: err}))

})
//admin
router.delete('/:id', (req,res)=>{
    if(isNaN(req.params.id))return res.status(400).send({status: "error", message: 'paramas err'})
    if(!admin)return res.status(400).send({status: 'error', message: 'user err'})
    manager.delete(req.params.id)
    .then(result => res.send(result))
    .catch(err=> res.sen({error: 0, mess: err}))
})

export default router