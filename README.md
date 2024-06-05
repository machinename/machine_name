# Next.js Machine Name Portfolio

Welcome to my developer portfolio built with Next.js!

## Overview
- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Material-UI (MUI)
- **Generative AI**: Vertex-AI

## Getting Started

### Installation
To get started with this project, follow these steps:

1. **Install Node.js**: Download and install Node.js from the official website (https://nodejs.org/). This will also install npm.

2. **Clone the repository:**
    ```bash
    git clone https://github.com/machinename/machine_name.git
    cd machine_name
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Firebase Setup:**
    - Create a Firebase account and project from the official website (https://firebase.google.com/).
    - Obtain Firebase configuration keys from the Firebase Console:
        - After setting up your project, navigate to the Firebase Console.
        - Click on your project to enter the project dashboard.
        - Navigate to the "Project settings" by clicking on the gear icon next to "Project Overview" in the top-left corner.
        - In the "General" tab, scroll down to the section titled "Your apps" and select the web app you've added.
        - Copy the Firebase configuration keys provided.
    - Add a web app to your Firebase project:
        - In the "Project settings," navigate to the "General" tab if you're not already there.
        - Scroll down to the section titled "Your apps" and click on the "</>" icon labeled "Add app."
        - Follow the instructions to register your web app and obtain the Firebase configuration keys.
    - Enable the Gemini API:
        - In the Firebase Console, navigate to the "Build with Gemini" tab, located in the left sidebar.
        - Follow the instructions provided to enable the Gemini API and integrate it with your Firebase project.


5. **Set up environment variables:**
    - Create a `.env` file in the project directory.
    - Add the following Firebase configuration keys to the `.env` file:
        ```bash
        FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
        FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
        FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
        FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
        FIREBASE_MESSAGING_SENDER_ID=YOUR_FIREBASE_MESSAGING_SENDER_ID
        FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID
        FIREBASE_MEASUREMENT_ID=YOUR_FIREBASE_MEASUREMENT_ID
        ```

6. **Run the project in development mode:**
    ```bash
    npm run dev
    ```

7. **Open in your browser:**
    Open [http://localhost:3000](http://localhost:3000) to view the project in your browser. The page will auto-update as you edit the files.

### Customization
Feel free to customize and extend the project according to your preferences. You can modify pages, components, styles, and even integrate additional features or libraries as needed.

### Deployment
When you're ready to deploy the project to production, you can use platforms like Vercel, Netlify, or Firebase Hosting. Make sure to configure your deployment settings and environment variables accordingly.

### License
This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the terms of the license.

---

This README provides a quick overview and instructions for getting started with the project. If you have any questions or need further assistance, feel free to reach out or refer to the documentation provided by the frameworks and services used in this project. Happy coding!
