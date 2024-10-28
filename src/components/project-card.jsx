export default function ProjectCard({ company, description, link }) {
    return (
        <div className="w-full h-full p-4 bg-white dark:bg-black rounded-lg flex flex-col justify-start items-start gap-2">
            {/* Icon container with dark mode adjustments */}
            <div className="p-2 shadow-none rounded-full border border-gray-300 dark:border-gray-700 flex justify-center items-center gap-2">
                <div className="w-8 h-8 relative">
                    <div className="absolute w-8 h-8 bg-red-600 dark:bg-red-500"></div>
                    <div className="absolute w-4 h-4 left-2 top-2 bg-white dark:bg-zinc-900"></div>
                    <div className="absolute w-1.5 h-0.5 left-3.5 top-3.5 bg-white dark:bg-zinc-900"></div>
                </div>
            </div>

            {/* Content container with dark mode text color */}
            <div className="self-stretch h-[152px] flex flex-col justify-start items-start gap-4">
                <div className="text-gray-900 dark:text-white text-lg font-semibold leading-7">{company}</div>
                <div className="self-stretch text-gray-700 dark:text-gray-400 text-sm leading-6">{description}</div>

                {/* Link section with dark mode adjustments */}
                <div className="pt-2 pb-2 flex justify-center items-center gap-2">
                    <div className="w-6 h-6 relative">
                        <div className="absolute w-3.5 h-3 bg-gray-900 dark:bg-white left-2 top-1"></div>
                        <div className="absolute w-3.5 h-3 bg-black dark:bg-gray-300 left-0 top-2.5"></div>
                    </div>
                    <div className="text-gray-900 dark:text-gray-300 text-lg font-normal leading-7 break-words">
                        {link}
                    </div>
                </div>
            </div>
        </div>
    );
}
