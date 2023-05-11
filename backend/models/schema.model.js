import { Schema, model } from "mongoose";

const dataBaseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gymStartYear: {
    type: String,
    required: true,
  },
  gymEndYear: {
    type: String,
    required: true,
  },
});

const Client = model("client", dataBaseSchema);

export default Client;
