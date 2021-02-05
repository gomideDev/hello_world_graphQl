import Client from '../../../models/MClient';

export default {
    Query: {
        client: (_, {id})=> Client.findOne({where: {_id:id}}),
        clients: ()=>Client.findAll()
    },

    Mutation: {
        createClient: async(_, {data})=> {
            console.log(`Client data received: ${data.cpf}`);
            const client = await Client.create({
                name: data.name,
                cpf: data.cpf
            });
            console.log(`Client is created with successfuly: ${client._id}`);
            return client
        },
        updateClient: (_, {id, data})=>{
            Client.findOne({where: {id:id}}).then((client)=>{
                client.update({
                    name: data.name,
                    cpf: data.cpf
                })
            });
            
        },
        deleteClient: async(_, {id})=>{
            Client.findOne({where: {id:id}}).then((client)=>{
                client.destroy()
            });
        }
    }
}