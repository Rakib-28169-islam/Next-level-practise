import { Express } from "express";
import { Router } from "express";

export const router = Router();


router.get("/", (req, res) => {

    res.json({
        message: "User route is working"
    })
});
router.get("/:id",(req,res)=>{
    const userId = req.params.id;
    const query = req.query
    res.send(`User with ID: ${userId}`);
})

