import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGO_URI);
const db = client.db('startup-forge');

export const auth = betterAuth({
  database: mongodbAdapter(db, { client }),

  emailAndPassword: { enabled: true },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },

  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "collaborator",
        input: true,
      },
      bio: {
        type: "string",
        defaultValue: "",
        input: true,
      },
      skills: {
        type: "string",
        defaultValue: "",
        input: true,
      },
      plan: {
        type: "string",
        defaultValue: "collaborator_free",
        input: true,
      },
      status: {
        type: "string",
        defaultValue: "active",
        input: true,
      },
    },
  },
});