import { readUsers ,writeUser} from "../utils/usersU.js";
export const Auth = async (req, res) => {
  try {
    res.json({ ok: true });
  } catch (error) {
    console.log(error);
    ;
  }
};
export const getAllUsers = async (req, res) => {
  const userData = await readUsers();
  console.log("userData: ", userData);
  
  res.json(userData);
};

export const verification = async (req, res, next) => {
    const read = await readUsers()  
     read.find((elemant) => {
    const inputUser = req.headers;
    console.log(inputUser);

    if (
      elemant.username === inputUser.username &&
      elemant.password === inputUser.password
    ) {
      next();
    } else {
      res.status(401).json("the username or passwors not dfind");
    }
  });
};

export const createUser = async (req , res ) => {
    const newUser = req.body
    console.log(newUser);
    
    const read = await readUsers()
    console.log(read);
    const match = read.find(user => user.username===newUser.username)
        if(!match){
         read.push(newUser)
        writeUser("./data/users.json",read)
        res.sand("sssss")

        }else{
            res.status(401).json("username exists")
        
    }
}