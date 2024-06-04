import { Paper } from '@mui/material';
import Image from "next/image";
export default function Templates() {
  return (
    <main className="flex flex-col min-h-[800px] h-[100vh] items-center justify-center pt-20 pb-20 gap-20">
        <Paper className=" flex flex-col text-center items-center justify-center rounded-none lg:w-[600px] w-[400px]">
        <div className=" w-full  p-2 flex flex-col  justify-center text-center">
                <h1 className="font-bold text-2x1">Flutter Firebase Auth</h1>  
            </div>
            <div className="w-full text-center p-2 flex flex-col gap-2">
                <p>Get started with Flutter and Firebase in seconds.</p>  
                <p>by machinename.dev</p>  
            </div>
        </Paper>

        <Paper className=" flex flex-col text-center items-center justify-center rounded-none lg:w-[600px] w-[400px]">
            <div className=" w-full p-2 flex flex-col  justify-center text-center">
                <h1 className="font-bold text-2x1">Machine Name</h1>  
            </div>
            <div className="w-full text-center p-2 flex flex-col gap-2">
                <p>Create a copy of machinename.dev with Google Cloud VERTEX-AI.</p>  
                <p>by machinename.dev</p>  
            </div>
        </Paper>
    </main>
  );
};
