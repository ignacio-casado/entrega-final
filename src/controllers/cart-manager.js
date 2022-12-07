//clase para carrito
import fs from 'fs'

const pathToFile = './src/data/cart.json'

class cartManager {
    createCart = async (cart)=>{
        if(!fs.existsSync(pathToFile))return({status: "error", message: "Data not found"})
        if(fs.existsSync(pathToFile)){ let data = await fs.promises.readFile(pathToFile, 'utf-8')
        let carts = JSON.parse(data)
        if (carts.length >0){id =carts[carts.length-1].id+1
        cart={
            id,
            ...cart
        }
        carts.push(cart)
        await fs.promises.writeFile(pathToFile, JSON.stringify(carts, null, 2))}
       
    }else(err)
        return{status: "error", message: err.message}
        
    }

    deleteCart = async (id)=>{
        id =parseInt(id)
        if(!fs.existsSync(pathToFile))return({status: "error", message: "Data not found"})
        if(fs.existsSync(pathToFile)){
            let variable = false
            let data = await fs.promises.readFile(pathToFile, 'utf-8')
            let cart = JSON.parse(data)
            let findAndDelete = cart.find(item => item.id !== id)
            if(cart.length !== findAndDelete.length)variable = true
            if(!variable)return({status: 'ERR'})
            await fs.promises.writeFile(pathToFile, JSON.stringify(product, null, 2))
            return findAndDelete
        }else{
            return ({status: 'error', message: 'Id not found'})
        }
       
    }
    findAll = async ()=>{
        if(!fs.existsSync(pathToFile))return({status: "error", message: "Data not found"})
        let data = await fs.promises.readFile(pathToFile, 'utf-8')
        return JSON.parse(data)
    }
    addProdCart = async(id, add)=>{
        if(!fs.existsSync(pathToFile))return({status: "error", message: "Data not found"})
        if(fs.existsSync(pathToFile)){
            let data = await fs.promises.readFile(pathToFile, 'utf-8')
            let cart = JSON.parse(data)
            let findAndChange = cart.find(item => item.id === id)
                
                add={
                    id,
                    ...add
            }  
            cart.push(product)
            await fs.promises.writeFile(pathToFile, JSON.stringify(cart, null, 2))
        }else{
            return ({status: 'error', message: 'Id not found'})
        }  
      
    }


}
export default cartRouter