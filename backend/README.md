# Eternal AI

## Overview

Eternal AI provides an innovative solution by offering immediate, preliminary assessments of skin conditions through AI-driven analysis. Users can upload an image and provide symptom data, receiving real-time feedback on potential skin conditions. This not only expedites the process of identifying skin issues but also educates users on skin health, guiding them on when and how to seek professional care. Our solution is tailored for scenarios where dermatological appointments might be inaccessible, delayed, or where patients are unwilling to make physical appointments.

## What It Does

Eternal AI aims to:

- **Expedite Skin Condition Identification**: Users receive instant feedback on potential skin conditions based on the data they provide.
- **Support Decision-Making**: By providing preliminary assessments, users can make informed decisions about seeking professional care.
- **Quick Access to Dermatologists**: Facilitates easy access to professional care when needed.
- **Educate on Skin Health**: The platform offers insights into skin health, helping users understand their symptoms better.

## Features

- **AI-Driven Analysis**: Leveraging Google's powerful AI to analyze uploaded image and symptom data for accurate skin condition assessments.
- **Generate Report**: Provides a detailed report on possible conditions, causes, and skincare recommendations.
- **Access to Dermatologists**: Enables users to easily book appointments with dermatologists based on the AI's analysis.
- **AI Chatbot**: An interactive chatbot that answers questions, provides guidance, and enhances user experience with a friendly, informative tone.

## How We Built It

- **Frontend**: React/Next.js, Tailwind CSS
- **Backend**: Node.js/Express
- **AI Integration**: Google Generative AI (Gemini), providing powerful AI-driven skin condition assessments based on uploaded image and symptom data.

## Getting Started

### Prerequisites

- Node.js
- npm/yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/dyCodes/eternal-ai-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd eternal-ai-app/backend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:

   - Create a `.env` file in the root directory and add your environment variables:

     ```plaintext
     GEMINI_API_KEY=your_gemini_api_key
     ```

5. Start the server:

   ```bash
   npm start
   ```

   The backend server should now be running on `http://localhost:3000`.
