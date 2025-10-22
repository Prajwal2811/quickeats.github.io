import axios from "axios";

const DEEPSEEK_API_KEY = "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";

export const queryDeepSeek = async (text) => {
  try {
    const response = await axios.post(
      "https://api.deepseek.ai/v1/query",
      {
        input: text
      },
      {
        headers: {
          "Authorization": `Bearer ${DEEPSEEK_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("DeepSeek API Error:", error);
    return null;
  }
};
