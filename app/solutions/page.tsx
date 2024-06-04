import { Paper } from '@mui/material';
import Image from "next/image";

export default function Solutions() {
  return (
    <main className="flex flex-col min-h-[800px] h-[100vh] items-center justify-center pt-[60px] pb-20 gap-20">
        <h1 className="text-5xl">Solutions</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Paper className=" p-2 rounded-none text-center w-[400px]">
                <h1 className="font-bold text-2x1">AI & Machine Learning</h1>
                <p>Brief description about AI & Machine Learning...</p>
            </Paper>
            <Paper className=" p-2 rounded-none text-centerw-[400px]">   
                <h1 className="font-bold text-2x1">Cloud Intergation</h1> 
                <p>Brief description about Cloud Intergation...</p>
            </Paper>
            <Paper className=" p-2 rounded-none text-center w-[400px]">   
                <h1 className="font-bold text-2x1">Full Stack Development</h1> 
                <p>Brief description about Full Stack Development...</p>
            </Paper>
            <Paper className=" p-2 rounded-none text-center w-[400px]">   
                <h1 className="font-bold text-2x1">Test Automation</h1> 
                <p>Brief description about Test Automation...</p>
            </Paper>
        </div>
        <h1 className="text-3xl">machinename.dev</h1>
    </main>
  );
};
