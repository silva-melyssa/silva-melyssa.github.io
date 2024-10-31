import { FaLink } from 'react-icons/fa'; // Import the chain link icon

export default function ProjectCard({ company, description, link }) {
    return (
        <div className="w-full h-full p-4 bg-white dark:bg-black rounded-lg flex flex-col justify-start items-start gap-2 hover:shadow-lg transition-shadow duration-300">
            {/* Icon container */}
            <div className="p-2 shadow-none rounded-full border border-gray-300 dark:border-gray-700 flex justify-center items-center gap-2">
                <div className="w-8 h-8 relative">
                    <div className="absolute w-8 h-8 bg-red-600 dark:bg-red-500"></div>
                    <div className="absolute w-4 h-4 left-2 top-2 bg-white dark:bg-zinc-900"></div>
                    <div className="absolute w-1.5 h-0.5 left-3.5 top-3.5 bg-white dark:bg-zinc-900"></div>
                </div>
            </div>

            {/* Content container */}
            <div className="self-stretch h-[100px] flex flex-col justify-start items-start gap-4">
                <div className="text-gray-900 dark:text-white text-lg font-semibold leading-7">{company}</div>
                <div className="self-stretch text-gray-700 dark:text-gray-400 text-sm leading-6">{description}</div>
            </div>

            {/* Link section with chain icon and text */}
            <div className="pt-2 pb-2 flex items-center gap-2">
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-900 dark:text-gray-300 text-sm font-normal leading-7 hover:underline"
                >
                    <FaLink className="mr-1" /> {/* Chain icon */}
                    Click here to see
                </a>
            </div>
        </div>
    );
}
