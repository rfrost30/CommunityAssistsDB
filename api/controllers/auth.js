import { db } from "../db.js"
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'

export const register = (req, res) => {

    //check if data is being saved correctly
    console.log(req.body);


    //Check for existing user
    const q = "SELECT * FROM users WHERE email = ? OR username = ?";

    db.query(q, [req.body.email, req.body.username], (err, data) => {
        //return the error
        if (err) {
            return res.json(err);
        }
        //if data is returned, the user already exists
        if (data.length) {
            return res.status(409).json("User already exists");
        }

        //when user doesn't exist HASH the password and create new user. This encrypts the password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)";
        const values = [
            req.body.username,
            req.body.email,
            hash,
        ]

        db.query(q, [values], (err, data) => {
            if (err) return res.json(err);
            return res.status(200).json("User has been created.")

        });
    });

};

export const login = (req, res) => {

    //Check for existing user
    const q = "SELECT * FROM users WHERE username = ?";

    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.json(err);

        //Length =0 Means No user found with username entered
        if (data.length === 0) return res.status(404).json("User not found")

        //No error & user exists
        //CHECK PASSWORD

        //compare password to hashed password in the DB
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);

        //if incorrect
        if (!isPasswordCorrect) {
            return res.status(400).json("Username or password is incorrect.");
        }

        //create token for user
        const token = jwt.sign({ id: data[0].id }, "jwtkey01");

        //separate password from all other data
        const { password, ...other } = data[0]
        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json(other) //returns json of data without password

    });
};

export const logout = (req, res) => {
    //TODO implement logout
}