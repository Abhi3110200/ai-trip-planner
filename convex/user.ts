import { mutation, MutationCtx } from "./_generated/server";
import { v } from "convex/values";

export const CreateNewUser = mutation({
    args:{
        name:   v.string(),
        email: v.string(),
        imageUrl: v.string(),
    },
    handler: async(ctx: MutationCtx, args: { name: string; email: string; imageUrl: string;}) => {
        const user = await ctx.db.query('UserTable').filter((q)=>q.eq(q.field('email'), args.email)).collect();        
        if(user?.length === 0){
           const userData = {
            name: args.name,
            email: args.email,
            imageUrl: args.imageUrl,
           }
           const user = await ctx.db.insert('UserTable', userData)
           return user  
        }
        return user[0]
    }
})