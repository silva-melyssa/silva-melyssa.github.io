export const metadata = {
    title: 'Portfolio - Uses',
    description: 'The uses page of my portfolio.',
};

// Section Title Component
function SectionTitle({ title, description }) {
    return (
        <div className="w-full flex flex-col items-start gap-4 lg:gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
                {title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-6">
                {description}
            </p>
        </div>
    );
}

// Item Component
function Item({ name, description }) {
    return (
        <div className="flex flex-col gap-2 p-4 bg-white dark:bg-zinc-900 rounded-lg shadow-sm w-[738px]">
            <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                {name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-6">
                {description}
            </p>
        </div>
    );
}

// Category Component
function Category({ categoryName, items }) {
    return (
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 w-full max-w-3xl lg:pl-6 border-l border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                {categoryName}
            </h3>
            <div className="flex flex-col gap-6">
                {items.map((item, index) => (
                    <Item key={index} name={item.name} description={item.description} />
                ))}
            </div>
        </div>
    );
}

// Main Uses Page Component
export default function Uses() {
    return (
        <div className="flex flex-col items-start px-6 md:px-10 py-10 md:py-16 bg-white dark:bg-black min-h-screen">
            <div className="w-full md:w-2/3">
                <SectionTitle
                    title="Software I use, gadgets I love, and other things I recommend."
                    description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi."
                />
            </div>

            <div className="flex flex-col items-center gap-12 lg:gap-20 w-full mt-12 lg:mt-16">
                <Category
                    categoryName="Workstation"
                    items={[
                        {
                            name: "Monitor",
                            description: "High-quality display with excellent color accuracy and resolution."
                        },
                        {
                            name: "Keyboard",
                            description: "Mechanical keyboard with tactile switches."
                        },
                    ]}
                />
                <Category
                    categoryName="Development Tools"
                    items={[
                        {
                            name: "VS Code",
                            description: "My go-to code editor with a variety of useful extensions."
                        },
                        {
                            name: "Git",
                            description: "Essential for version control and collaboration on projects."
                        },
                    ]}
                />
                <Category
                    categoryName="Design"
                    items={[
                        {
                            name: "Figma",
                            description: "Powerful design tool with collaboration features."
                        },
                        {
                            name: "Whimsical",
                            description: "Useful for flowcharts and quick prototyping."
                        },
                    ]}
                />
                <Category
                    categoryName="Productivity"
                    items={[
                        {
                            name: "Notion",
                            description: "All-in-one workspace for notes, project management, and databases."
                        },
                        {
                            name: "Todoist",
                            description: "Simple and effective task management app."
                        },
                    ]}
                />
            </div>
        </div>
    );
}
