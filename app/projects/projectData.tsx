

const flutterFirebaseAuthReadMe = ``;

export const miniMLReadMe = ``;

export const machineNameReadMe = `
# Machine Name
Welcome to Machine Name built with Next.js!


## Description
This Next.js project serves as both my developer portfolio and a boilerplate for implementing Google's Gemini AI Vertex API functionalities. It includes various pages such as a chat page, contact form, and projects page.

## Tech Stack
- **- Framework**: Next.js
- **- Language**: TypeScript
- **- Styling**: Tailwind CSS
- **- Components**: Material-UI (MUI)
- **- Generative AI**: Vertex-AI

## Getting Started
To get started with this project, follow these steps:

- **1. Install Node.js:**
Download and install Node.js from the official website (https://nodejs.org/). This will also install npm.

- **2. Clone Repository:**
    \`\`\`
    git clone https://github.com/machinename/machine_name.git
    cd machine_name
    \`\`\`

- **3. Install Dependencies:**
    \`\`\`
    npm install
    \`\`\`

- **4. Firebase Setup:**
    1. - Create a Firebase account and project from the official website (https://firebase.google.com/).
    2. - Add a Web app to your Firebase project and obtain its Firebase configuration keys under project settings.
    3. - Enable Firebase Vertex AI Gemini API in the Firebase Console.

- **5. Configure Environment Variables:**
    1. -  Create a \`.env\` file in the root directory of your Next.js project.
    2. -  Add the following Firebase configuration keys to the \`.env\` file:
          \`\`\`
          FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
          FIREBASE_AUTH_DOMAIN=YOUR FIREBASE_AUTH_DOMAIN
          FIREBASE_PROJECT_ID=YOUR FIREBASE_PROJECT_ID
          FIREBASE_STORAGE_BUCKET=YOUR FIREBASE_STORAGE_BUCKET
          FIREBASE_MESSAGING_SENDER_ID=YOUR FIREBASE_MESSAGING_SENDER_ID
          FIREBASE_APP_ID=YOUR FIREBASE_APP_ID
          FIREBASE_MEASUREMENT_ID=YOUR FIREBASE_MEASUREMENT_ID
          \`\`\`
    3. - Ensure that you include the .env file in your .gitignore file to prevent sensitive information from being committed to your version control system.

- **6. Run Project:**
    \`\`\`
    npm run dev
    \`\`\`

- **7. Open In Your Browser:**
    Open [http://localhost:3000](http://localhost:3000) to view the project in your browser. The page will auto-update as you edit the files.

### Customization
Feel free to customize and extend the project according to your preferences. You can modify pages, components, styles, and even integrate additional features or libraries as needed.

### Deployment
When you're ready to deploy the project to production, you can use platforms like Vercel, Netlify, or Firebase Hosting. Make sure to configure your deployment settings and environment variables accordingly.

### License
This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the terms of the license.

`;


export const projectPostsSlug: Record<string, { title: string; content: string, image: string }> = {
    'flutter_firebase_auth': { title: 'Flutter Firebase Auth', content: flutterFirebaseAuthReadMe, image: '/flutter_firebase_auth_home_screen.svg' },
    'machine_name': { title: 'Machine Name', content: machineNameReadMe, image: '/machine_name_home_screen.svg' },
    'mini_ml': { title: 'Mini ML', content: miniMLReadMe, image: '/mini_ml_home_screen.svg' },
  };

export const projectPosts = [
    { slug: 'flutter_firebase_auth', title: 'Flutter Firebase Auth', description: 'Brief description about Flutter Firebase Auth...', author: 'machinename.dev', image:'/flutter_firebase_auth_home_screen.svg'  },
    { slug: 'machine_name', title: 'Machine Name', description: 'Brief description about Machine Name...', author: 'machinename.dev', image:'/machine_name_home_screen.svg' },
    { slug: 'mini_ml', title: 'Mini ML', description: 'Brief description about Mini ML...', author: 'machinename.dev', image:'/mini_ml_home_screen.svg' }
  ];