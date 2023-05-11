require("dotenv").config();
const router = require("express").Router();
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  organization: "org-CXxomNL48mtiSAVJC98mWOr5",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

router.post("/", async (req, res) => {
  console.log("received request:", req.body);
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message:
          "OpenAI API key not configured, please follow instructions in README.md",
      },
    });
    return;
  }

  const destination = req.body.destination || "";
  if (destination.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid destination",
      },
    });
    return;
  }

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(destination),
      temperature: 0.6,
    });
    res.status(200).json({ result: response.data.choices[0].text });
  } catch (error) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: "An error occurred during your request.",
        },
      });
    }
  }
});

function generatePrompt(destination) {
  const capitalizedDestination =
    destination[0].toUpperCase() + destination.slice(1).toLowerCase();
  return `Provide 3 suggestions on things to do when you visit a destination.

destination: New York
Suggestions: Statue of Liberty, One World Trade, and Yankee Stadium
destination: Los Angeles
Suggestions: Hollywood Sign, Santa Monica Pier, Hollywood Walk of Fame
destination: ${capitalizedDestination}
Suggestions:`;
}

module.exports = router;
