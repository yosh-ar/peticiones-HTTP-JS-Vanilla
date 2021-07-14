const url ='https://reqres.in/api/users';

const getUsuario = async(id)=>{
    const resp = await  fetch(`${url}/${id}`);
    const {data} = await resp.json();
    return data;
}

const crearUsuario = async(user)=>{
    const resp = await fetch(url,{
        method: 'POST',
        body : JSON.stringify(user),
        headers : {
            'Content-Type' : 'application/json'
        }
    })

    return await resp.json();
}

const updateUsuario = async(id,user)=>{
    const resp = await fetch(`${url}/${id}`,{
        method: 'PUT',
        body : JSON.stringify(user),
        headers : {
            'Content-Type' : 'application/json'
        }
    })

    return await resp.json();
}
const borrarUsuario = async(id)=>{
    const resp = await fetch(`${url}/${id}`,{
        method: 'DELETE'
    })
    return (resp.ok)?'borrado' : 'No se hizo nada';
}

export {
    getUsuario,
    crearUsuario,
    updateUsuario,
    borrarUsuario
}