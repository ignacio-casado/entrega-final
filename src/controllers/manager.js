// clase manager con metodos
import fs from 'fs'

const pathToFile = './src/data/products.json'

class manager {

    findAll = async () =>{
        if(!fs.existsSync(pathToFile))return({status: "error", message: "Data not found"})
        let data = await fs.promises.readFile(pathToFile, 'utf-8')
        return JSON.parse(data)
    }

    findById = async (id) =>{
        id = parseInt(id)
        if(!fs.existsSync(pathToFile))return({status: "error", message: "Data not found"})
        let data = await fs.promises.readFile(pathToFile, 'utf-8')
        let productos = JSON.parse(data)
        let productFind = productos.find(element => element.id === id)
        if(!productFind)return({status: "error", message: "Id not found"})
        return productFind
        
    }
    postProd = async (product)=>{
            // Validacion
            if(!product.tittle ) return{status: "error", message: "Missing files"}
    
            try{
                if(fs.existsSync(pathToFile)){
                    fs.appendFile
                    let leerData = await fs.promises.readFile(pathToFile, 'utf-8')
                    let productos = JSON.parse(leerData)
                    let id = productos[productos.length-1].id+1
                    product.id = id
                    productos.push(product)
                    await fs.promises.writeFile(pathToFile, JSON.stringify(productos, null, 2))
                    return{status: "success", message:"new product added"}
                }else{
                    product.id = 1
                    await fs.promises.writeFile(pathToFile, JSON.stringify([product], null, 2))
                    return {status: "file created", message: "product added"}
                }
            }catch(err){
                return{status: "error", message: err.message}
    
            }
        
    
    }
    update = async (id, update)=>{
        id = parseInt(id)
        if(fs.existsSync(pathToFile)){
            let variable = false
            let data = await fs.promises.readFile(pathToFile, 'utf-8')
            let productos = JSON.parse(data)
            let prodNew = productos.find(element =>{
                if(element.id === id){
                    variable = true
                    return{
                        id,
                        ...update
                    }
                }else{
                    return element
                }
           
            }) 
            if(!variable)return({status: 'ERR'})
            await fs.promises.writeFile(pathToFile, JSON.stringify(product, null, 2))
            return prodNew.find(element=> element.id ===id)
        }else{
            return ({status: 'error', message: 'Id not found'})
        }
    }

    delete = async(id)=>{
        id=parseInt(id)
        if(fs.existsSync(pathToFile)){
            let variable = false
            let data = await fs.promises.readFile(pathToFile, 'utf-8')
            let productos = JSON.parse(data)
            let findAndDelete = productos.find(element=> element.id !== id)
            if(productos.length !== findAndDelete.length)variable = true
            if(!variable)return({status: 'ERR'})
            await fs.promises.writeFile(pathToFile, JSON.stringify(product, null, 2))
            return findAndDelete
        }else{
            return ({status: 'error', message: 'Id not found'})
        }
    }
}

export default manager