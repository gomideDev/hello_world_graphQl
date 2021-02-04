import User from '../../../models/User';

export default {
    User:{
        fullname: (user)=> `${user.firstname} ${user.lastname}`
    },
    Query: {
        users: ()=> User.find(),
        user: (_, {id})=> User.findById(id)
    },
    Mutation: {
        createUser: (_, {data})=> User.create(data),
        updateUser: (_, {id, data})=>User.findOneAndUpdate(id, data, {new: true}), //Com a flag new são retornados os dados novo,
        deleteUser: async(_, {id})=> !!(await User.findOneAndDelete(id))
    }
}