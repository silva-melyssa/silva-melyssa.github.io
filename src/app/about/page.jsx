'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default async function Page() {
    return (
        <div className="flex flex-col md:flex-row justify-between min-h-screen mx-0 px-4 py-4 bg-white dark:bg-black text-gray-900 dark:text-white">
            {/* Left Side: Text Content */}
            <div className="flex flex-col justify-start items-start gap-6 w-full md:w-[464px] order-1 md:order-1">
                <h1 className="text-4xl font-bold">
                    I’m Jane. I live in New York City, where I develop the future.
                </h1>
                {Array.from({ length: 4 }, (_, index) => (
                    <p key={index} className="text-gray-600 dark:text-gray-400 text-sm leading-6">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi...
                    </p>
                ))}
            </div>

            {/* Right Side: Image and Social Media Links */}
            <div className="flex flex-col gap-6 w-full md:w-[464px] order-2 md:order-2">
                {/* Image at the top in mobile view */}
                <img
                    className="w-full h-[452px] object-cover rounded-lg"
                    src="src/image/profileimg.jpeg"
                    alt="About Image"
                />

                {/* Social Media Links */}
                <div className="flex flex-col gap-6">
                    {/* Follow me on Section with Clickable Icons */}
                    <div className="flex flex-col gap-2">
                        <a href="https://twitter.com/jane" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faXTwitter} className="text-gray-900 dark:text-white w-5 h-5" />
                            <span className="text-gray-900 dark:text-white text-sm">Follow me on X</span>
                        </a>
                        <a href="https://github.com/jane" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faGithub} className="text-gray-900 dark:text-white w-5 h-5" />
                            <span className="text-gray-900 dark:text-white text-sm">Follow me on GitHub</span>
                        </a>
                        <a href="https://linkedin.com/in/jane" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faLinkedin} className="text-gray-900 dark:text-white w-5 h-5" />
                            <span className="text-gray-900 dark:text-white text-sm">Follow me on LinkedIn</span>
                        </a>
                    </div>

                    {/* Email Section */}
                    <div className="flex items-center border-t border-gray-700 pt-4">
                        <FontAwesomeIcon icon={faEnvelope} className="text-gray-900 dark:text-white w-5 h-5" />
                        <span className="ml-2 text-gray-900 dark:text-white text-sm">jane@email.com</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
