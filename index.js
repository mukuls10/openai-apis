import OpenAI from "openai";
import dotenv from 'dotenv';

//load env variables
dotenv.config();

//create open ai instance
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

//main function
async function main() {
  //call the openai completions create fxn
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  //output
  console.log(completion.choices[0]);
}

//execute
main();