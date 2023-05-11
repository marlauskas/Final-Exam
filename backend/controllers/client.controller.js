import Client from "../models/schema.model.js";
import Post from "../models/schema.model.js";

export const getdatabase = async (_req, res) => {
  try {
    const database = await Client.find();

    res.json(database);
  } catch (error) {
    console.log(error);
    res.json({ message: "Error..." });
  }
};

export const getMember = async (req, res) => {
  try {
    const clientId = req.params.id;

    const client = await Client.findById(clientId);

    res.json(client);
  } catch (error) {
    console.log(error);
    res.json({ message: "Error..." });
  }
};

export const createMember = async (req, res) => {
  try {
    const client = req.body;

    const validatedclient = new Client(client);

    const savedData = await validatedclient.save();

    res.json(savedData);
  } catch (error) {
    console.log(error);
    res.json({ message: "Error..." });
  }
};

export const updateMember = async (req, res) => {
  try {
    console.log(req.params);
    const clientId = req.params._id;
    const updatedClientData = req.body;

    await Client.findByIdAndUpdate(updatedClientData._id, updatedClientData);
    const updatedClient = await Post.findById(clientId);

    res.json(updatedClient);
  } catch (error) {
    console.log(error);
    res.json({ message: "Error..." });
  }
};

export const deleteMember = async (req, res) => {
  try {
    const clientId = req.params.id;

    await Client.findByIdAndDelete(clientId);

    res.json({ message: "Client deleted" });
  } catch (error) {
    console.log(error);
    res.json({ message: "Error..." });
  }
};
