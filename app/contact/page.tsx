'use client'

import { useAppContext } from '../contexts/AppProvider';

export default function Contact() {
  const { conversation, setConversation } = useAppContext();

  return (
    <main className="flex flex-col min-h-[600px] h-[100vh] items-center justify-center pt-20 pb-20 ">
        <h1 className="text-5xl m-0 p-0">Contact</h1>
    </main>
  );
}
