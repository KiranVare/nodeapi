import express from "express";
import { User } from "../models/users.js";
import { deleteUser, getAllUsers, getUserById, register, special, updateUser } from "../controllers/user.js";

const router = express.Router();

router.get("/all",getAllUsers);

router.post("/new",register);

router.get("/userid/special",special);
      
//dynamic routes should be always kept last

//all things at same time using chaning without doing extra work

router.route("/userid/:id").get(getUserById).put(updateUser).delete(deleteUser);

// router.get("/userid/:id",getUserById);

// router.put("/userid/:id",updateUser);

// router.delete("/userid/:id",deleteUser);


    
export default router;