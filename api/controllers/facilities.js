import { db } from "../db.js";

export const getAllFacilities = (req, res) => {
  const q = "SELECT * FROM facilities";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    //returns json of all facilites
    return res.status(200).json(data);
  });
};

export const addFacility = (req, res) => {
  res.json("from controller now");
};

export const getFacility = (req, res) => {
  res.json("from controller now");
};

export const deleteFacility = (req, res) => {
  res.json("from controller now");
};

export const updateFacility = (req, res) => {
  res.json("from controller now");
};
