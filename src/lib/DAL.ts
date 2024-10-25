"use server";

import { MongoClient, ObjectId } from "mongodb";
import { Post } from "./models/post";

const connectionString = process.env.MONGODB!;

export const getPosts = async () => {
    const client = new MongoClient(connectionString);
    const db = client.db("postagram");

    try {
        return await db.collection<Post>("posts").find().toArray();
    } catch (error) {
        console.log(error);
        return [];
    } finally {
        await client.close();
    }
}

export const addPost = async (post: Post) => {
    const client = new MongoClient(connectionString);
    const db = client.db("postagram");

    try {
        return await db.collection("posts").insertOne(post);
    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }
}

export const getPostById = async (id: string) => {
    const client = new MongoClient(connectionString);
    const db = client.db("postagram");

    try {
        return await db.collection<Post>("posts").findOne({ _id: new ObjectId(id) });
    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }
}
