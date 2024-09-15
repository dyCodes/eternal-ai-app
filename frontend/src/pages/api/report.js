import { GoogleGenerativeAI } from '@google/generative-ai';
import { systemInstruction } from '@/constants/geminiAI';
import { fileToGenerativePart } from '@/utils/fileUtils';

// Initialize the generative model
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
  generationConfig: { responseMimeType: 'application/json' },
  systemInstruction: systemInstruction,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    // console.log('data: ', data);

    try {
      async function run() {
        // Prepare prompt
        const prompt = `User details and symptom. Description: ${data.nature} | Appearance: ${data.appearance}  | Gender: ${data.gender}`;

        // Prepare image parts if image data is available
        let imageParts = [];
        if (data?.image && data?.mimeType) {
          imageParts = [fileToGenerativePart(data.image, data.mimeType)];
        }

        // Generate content
        const result = await model.generateContent([prompt, ...imageParts]);
        const response = await result.response.text();
        return response;
      }

      const output = await run();
      // console.log('output: ', output);

      // Return response
      res.status(200).json(output);
    } catch (error) {
      console.error('Error: ', error);
      res.status(500).json({ error: 'An error occurred. Please try again.' });
    }
  } else {
    res.status(200).json([]);
  }
}
