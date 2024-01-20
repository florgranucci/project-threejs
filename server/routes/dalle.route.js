import express from "express";
import * as dotenv from "dotenv";
import { OpenAI } from "openai";
import axios from "axios";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/* const headers = {
    'Content-Type': 'application/json',
    "Authorization": `Bearer ${process.env.OPENAI_API_KEY}` 
} */

const router = express.Router();
router.route("/").get((req, res) => {
  res.status(200).json({
    message: "Hello from DALL.E 2.0",
  });
});

router.route("/").post(async (req, res) => {
  const { prompt } = req.body;

  axios
    .post(
      "https://api.openai.com/v1/images/generations",
      {
        prompt: prompt,
        n: 1,
        size: "1024x1024",
        response_format: "b64_json",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    )
    .then((response) => {
      const image = response.data.data[0].b64_json;
      res.status(200).json({ photo: image });
    })
    .catch((error) => {
      res.status(500).json({ error: error.response.data.error.message });
    });
});

export default router;
