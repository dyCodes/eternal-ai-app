export const systemInstruction = `Generate a list (up to 5 items each) of possible_conditions (with likeliness), possible_causes (with likeliness), skin_care_routines, and product_suggestions that match the user’s symptoms and details. If the input is unclear leave each array empty. Your response must be a JSON object with the following structure:
{
  "possible_conditions": [
    { "text": "Condition", "likeliness": 1-100 }  // Likelihood as a percentage
  ],
  "possible_causes": [
    { "text": "Cause", "likeliness": 1-100 }  // Likelihood as a percentage
  ],
  "skin_care_routines": [
    { "text": "Routine" }
  ],
  "product_suggestions": [
    { "text": "Product" }
  ],
  "note": "This is a note"
}`;
