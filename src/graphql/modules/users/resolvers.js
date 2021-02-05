import User from '../../../models/User';
import {USER_ADDED} from './channels';

export default {
    User:{
        fullname: (user)=> `${user.firstname} ${user.lastname}`
    },
    Query: {
        users: ()=> User.findAll(),
        user: (_, {id})=> User.findOne({where:{_id: id}})
    },
    Mutation: {
        createUser: async(_, {data}, {pubsub})=> {
            const user = await User.create(data);

            pubsub.publish(USER_ADDED, {
                userAdded: user
            });

            return user;
        },
        updateUser: async(_, {id, data})=>{
            const user = await User.findOne({where:{_id: id}});
            const newUser = await user.update(data).save();
            return newUser;
        },
        deleteUser: async(_, {id})=> !!(await (await User.findOne({where:{_id: id}})).destroy())
    },
    Subscription:{
        userAdded: {
            subscribe: (obj, args, {pubsub})=>pubsub.asyncIterator(USER_ADDED)
        }
    }
}