import { GitHub } from '@mui/icons-material';
import { MachineNameContent, MiniMLContent } from '../projects/content';
import Link from 'next/link';

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864p.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

interface ShowContentProps {
  showContent: boolean;
}

export const ProjectList: React.FC<ShowContentProps> = ({ showContent }) => {
  return (
    <>
      <h1 className="mb-4 tracking-tighter">Projects</h1>
      <div className='flex flex-col'>
  
  
          <div className='flex flex-row items-center gap-2'>
            <Link href="https://github.com/machinename/machine_name "  target="_blank" rel="noopener noreferrer" className="tracking-tighter text-xl">machinename.dev</Link>
            <ArrowIcon />
          </div>
          {showContent && (
            <>
            <MachineNameContent />
            <hr className="my-3 border-neutral-100 dark:border-neutral-800"></hr>
            </>
          )}
      
   
          <div className='flex flex-row items-center gap-2'>
            <Link href="https://github.com/machinename/mini_ml"  target="_blank" rel="noopener noreferrer"className="tracking-tighter text-xl">mini ML</Link>
            <ArrowIcon />
          </div>
          {showContent && (
            <>
            <MiniMLContent />
            </>
          )}
      
      </div>
    </>
  )
}


export const WorkList: React.FC<ShowContentProps> = ({ showContent }) => {
  return (
    <>
      <h1 className="mb-4 tracking-tighter">Work</h1>
      <h2 className="tracking-tighter">Clyde & Co</h2>
      <p className="tracking-tighter mb-4 text-neutral-600 dark:text-neutral-400">Test Automation Engineer, 2023 — Current </p>
      {showContent == true && (
        <div className='flex flex-col gap-2'>
          <p>In April 2023, I joined Clyde & Co as a Test Automation Engineer, a newly created position that allowed me to leverage my degree in Software Engineering. Initially, the automation team exclusively used Eggplant Functional for its OCR capabilities and its English-like scripting language, SenseTalk.</p>
          <p>Upon my arrival, we expanded our toolkit to include Selenium and Playwright frameworks, using C# and JavaScript. Our goal was to enhance the effectiveness of our automation efforts by incorporating more advanced object-oriented programming languages and principles.</p>
          <p>My role involved developing scalable and maintainable frameworks with Selenium and Playwright, ensuring they could meet the evolving needs of Clyde & Co&apos;s legal technology landscape.</p>
        </div>
      )}
    </>
  )
}