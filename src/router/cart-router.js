import cartRouter from "../controllers/cart-manager"

const router = express.Router()
const cartRoute = new cartRouter()
let admin = false

router.post('/', (req, res)=>{
    cartRoute.createCart()
        .then(result=> res.send(result))
        .catch(err=> res.sen({error: 0, mess: err}))
})
router.delete('/:id', (req,res)=>{
    cartRoute.deleteCart(req.params.id)
    .then(result=> res.send(result))
    .catch(err=> res.sen({error: 0, mess: err}))
})
router.get('/:id/productos', (req,res)=>{
    cartRoute.findAll(req.params.id)
    .then(result=> res.send(result))
    .catch(err=> res.sen({error: 0, mess: err}))
})
router.post('/:id/productos', (req,res)=>{
    cartRoute.addProdCart(req.params.id)
    .then(result=> res.send(result))
    .catch(err=> res.sen({error: 0, mess: err}))
})
/* router.delete('/:id/productos/:id_prod', (req, res)=>{

}) */