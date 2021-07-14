const ulr = 'https://api.chucknorris.io/jokes/random';
const urlUsers = 'https://reqres.in/api/users?page=2';


const peticion = async ()=>{
    try {
        const resp = await fetch(ulr);
        if(!resp.ok) throw 'no se pudo realizar la peticion';
        const {icon_url, id, value} = await (await resp).json();
        return {icon_url, id, value};
    } catch (error) {
        throw error;
    }
}
const peticionUsuarios = async()=>{
    try{
        const resp = await fetch(urlUsers);
        const {data : usuarios} =  await resp.json();                
        return usuarios;
    }catch(err){
        throw err;
    }
}

export{
    peticion,
    peticionUsuarios
}