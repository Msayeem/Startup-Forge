import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGO_URI);
const db = client.db('startup-forge');

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),

   emailAndPassword: { 
    enabled: true, 
  }, 

   socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
        }, 
      },

     user: {
       additionalFields: {
          role: {
              role:"collaborator"
            },

            bio: {
  bio: "",
},
skills: {
  skills: "",
},
    
            
              plan:{
default:'collaborator_free'
              },

              status:{
                status:"active"
              }
            
        }
    },
});