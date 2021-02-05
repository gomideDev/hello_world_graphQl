import Post from '../../../models/Post'
import User from '../../../models/User'

export default {
    Post:{
        author:  (post)=> User.findOne({where:{_id: post._id}})
    },
    Query: {
        posts: ()=> Post.findAll(),
        post: (_, {id})=> Post.findOne({where:{_id:id}})
    },
    Mutation: {
        createPost: (_, {data})=> Post.create(data),
        updatePost: async(_, {id, data})=>{
            const post = await Post.findOne({where:{_id:id}});
            const newPost = await (await post.update(data)).save();
            return newPost;
        }, //Com a flag new são retornados os dados novo,
        deletePost: async(_, {id})=> !!(await (await Post.findOne({where:{_id:id}})).destroy())
    }
}