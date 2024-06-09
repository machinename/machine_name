import { GitHub } from "@mui/icons-material";
import { Button } from "@mui/material";

export const FlutterAuthContent = () => {
  return (
    <>
      <p className="tracking-tighter text-neutral-600 dark:text-neutral-400 mb-4">
        A Flutter auth template built using Dart, Firebase, and Flutter!
      </p>
      <div className='flex flex-col'>
        <p className="tracking-tighter text-neutral-600 dark:text-neutral-400">Features</p>
        <div className='tracking-tighter text-neutral-600 dark:text-neutral-400 ml-2'>
          <p className='ml-2'> - Firebase Authentification</p>
          <p className='ml-2'> - Intuitive Flutter UI</p>
        </div>
      </div>
    </>
  );
}

export const MachineNameContent = () => {
  return (
    <>
      <p className="tracking-tighter text-neutral-600 dark:text-neutral-400 mb-4">
        My developer portfolio built with Firebase, Next.js, Tailwind CSS, TypeScript and deployed using Vercel!
      </p>
      <div className='flex flex-col'>
        <p className="tracking-tighter text-neutral-600 dark:text-neutral-400">Features</p>
        <div className='tracking-tighter text-neutral-600 dark:text-neutral-400 ml-2'>
        <p className='ml-2'> - Next.js App Router</p>
        <p className='ml-2'> - Tailwind CSS Styling</p>
        <p className='ml-2'> - Vertex AI</p>
        </div>
      </div>
    </>
  );
}

export const MiniMLContent = () => {
  return (
    <>
      <p className="tracking-tighter text-neutral-600 dark:text-neutral-400 mb-4">
        A mini machine learning app built with Dart, Firebase, Flask, Flutter, and Python!
      </p>
      <div className='flex flex-col mb-4'>
        <p className="tracking-tighter text-neutral-600 dark:text-neutral-400">Features</p>
        <div className='tracking-tighter text-neutral-600 dark:text-neutral-400 ml-2'>
          <p className='ml-2'> - Secure Authentication</p>
          <p className='ml-2'> - Cloud Database & Storage</p>
          <p className='ml-2'> - Intuitive Flutter UI</p>
          <p className='ml-2'> - Machine Learning</p>
          <p className='ml-2'> - Data Analysis</p>
          <p className='ml-2'> - Real-Time Training</p>
          <p className='ml-2'> - Model Export</p>
        </div>
      </div>
      <div className='flex flex-row gap-2 items-center'>
        <Button variant='contained' className='rounded-none'>Download</Button>
      </div>
    </>
  );
}