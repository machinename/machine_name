import { Paper } from '@mui/material';
import Image from "next/image";
export default function Templates() {
  return (
    <main className="flex flex-col min-h-[800px] h-[100vh] items-center justify-center pt-20 pb-20 gap-20">
        <h1 className="text-5xl">Templates</h1>
        <Paper className="p-2 rounded-none text-center w-[400px]">
            <h1 className="font-bold text-2x1">Flutter Firebase Auth</h1>
            <p>Brief description about Flutter Firebase Auth...</p>  
            <p>by machinename.dev</p>  
        </Paper>
        <Paper className="p-2 rounded-none text-center w-[400px]">
            <h1 className="font-bold text-2x1">Machine Name</h1>  
            <p>Brief description about Machine Name...</p>
            <p>by machinename.dev</p>  
        </Paper>
        <h1 className="text-3xl">machinename.dev</h1>
    </main>
  );
};
