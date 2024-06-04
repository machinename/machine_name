import { Paper } from '@mui/material';
import Image from "next/image";

export default function MiniML() {
  return (
    <main className="flex flex-col min-h-[800px] h-[100vh] items-center justify-center pt-[60px] pb-20 gap-20">
        <h1 className="text-5xl">Mini ML</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Paper className=" p-2 rounded-none text-center">
                <h1 className="text-xl">Machine Learning</h1>
                <p>Brief description about Machine Learning...</p>
            </Paper>
            <Paper className=" p-2 rounded-none text-center">   
                <h1 className="text-xl">Cloud Storage</h1> 
                <p>Brief description about Cloud Storage...</p>
            </Paper>
            <Paper className=" p-2 rounded-none text-center">   
                <h1 className="text-xl">Scikit Learn</h1> 
                <p>Brief description about Scikit Learn...</p>
            </Paper>
            <Paper className=" p-2 rounded-none text-center">   
                <h1 className="text-xl">Intuitive UI</h1> 
                <p>Brief description about Intuitive Interface...</p>
            </Paper>
        </div>
        <h1 className="text-3xl">machinename.dev</h1>
    </main>
  );
};
