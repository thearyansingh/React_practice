import config from "../Conf/conf";
import { Client,ID,Databases,Storage,Query } from "appwrite";


export class Service{
client=new Client();
Databases;
bucket;
constructor(){
    this.client
    .setEndpoint(config.appWriteUrl)
    .setProject(config.ProjectId)
this.databases= new Databases(this.client);
this.bucket=new Storage(this.client); 
}  

async createPost({title,slug,content,featuredImage,
    status,userId}){
try {
    return await this.databases.createDocument(
        config.DatabaseId,
        config.collectionId,
        slug,{
title,
content,
featuredImage,
status,
userId,
        }
    )
} catch (error) {
    console.log("appwrite:: Databases ", error)
}
}

async updatePost(slug,{title,content,featuredImage,
    status}){
try {
    return await this.databases.updateDocument(
        config.DatabaseId,
        config.collectionId,
        slug,{
title,
content,
featuredImage,
status
        }
    )
    return true
} catch (error) {
    console.log("appwrite::updateDatabase ", error)
}
return false
}

async deletePost(slug){
try {
await this.databases.deleteDocument(
    config.DatabaseId,
config.collectionId,
slug
)
return true  

}
 catch (error) {
    console.log("appwrite:: delete ", error)
}
return false
}

async getDocument(slug){
    try {
        await this.databases.getDocument(
            config.DatabaseId,
            config.collectionId,
            slug
        )
        
    } catch (error) {
        console.log("appwrite service:getpost", error);
        
    }
}
// async getAllDocument(slug){
//     try {
//         await this.databases.getAllDocument(
//             config.DatabaseId,
//             config.collectionId,
//             slug
//         )
        
//     } catch (error) {
//         console.log("appwrite service:getpost", error);
        
//     }
// }
async getsDocument(queries=[Query.equal("status","active")]){
    try {
        return await this.databases.listDocuments(
            config.DatabaseId,
            config.collectionId,
           queries,

        )
    } catch (error) {
        console.log("appwrite getall",error)
    }

}
// file upload
async uploadFile(file){
try {
    return await this.bucket.createFile(
       config.BucketId,
       ID.unique(),
       file  
    )
} catch (error) {
    console.log("upload file", error)
}
}
async deleteFile(fileId){
    try {
        await this.bucket.deleteFile(
            config.BucketId,
        fileId
        )
        return true

    } catch (error) {
       console.log("delete file",error) 
       return false
    }
}

getFilePreview(fileId){
    return this.bucket.getFilePreview(
        config.BucketId,
        fileId
    )
}


}
const service=new Service()
export default service
