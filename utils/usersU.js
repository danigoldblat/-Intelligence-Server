import fs from "fs/promises"
export async function readUsers(){
    const read = await fs.readFile("./data/users.json","utf-8")
    const users = JSON.parse(read)
    return users
}
export async function writeUser(puth,data){
    const json = JSON.stringify(data,null,2)
    await fs.writeFile(puth,json , (err)=>{
        if(err)return console.log(err);
        
    }
    )
}