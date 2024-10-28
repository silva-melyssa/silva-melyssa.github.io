import { ArticleCard } from "@/components/article-card";
import { SubscribeCard } from "@/components/subscribe-card";
import { SkillsCard } from "@/components/skills-card";
import Profile from "@/components/profile";
import Work from "@/components/work-card";

const articles = [
    {
        date: "December 1, 2021",
        title: 'Lorem ipsum dolor sit amet consectetur',
        description: 'Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum',
        link: '#'
    },
    {
        date: "December 1, 2021",
        title: 'Lorem ipsum dolor sit amet consectetur',
        description: 'Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum',
        link: '#'
    },
    {
        date: "December 1, 2021",
        title: 'Lorem ipsum dolor sit amet consectetur',
        description: 'Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum',
        link: '#'
    }
]

export default async function Home() {
    const data = {
        languages: [
            {
                name: 'JavaScript',
                percent: 95,
            },
            {
                name: 'CSS',
                percent: 30,
            },
            {
                name: 'HTML',
                percent: 10,
            },
        ],
    };

    return (
        <div className="flex justify-between min-h-screen mx-0 px-[144px] py-4"> {/* Added padding and adjusted margin */}
            <div className="flex flex-col items-start flex-grow"> {/* Allow this column to grow */}
                <Profile />
                <div className={'flex flex-col md:flex-row'}>
                    <div className={'md:w-3/5'}>
                        {articles.map((article, index) => (
                            <ArticleCard key={index} {...article} />
                        ))}
                    </div>
                    <div className={'md:w-2/5 space-y-8'}>
                        <SubscribeCard />
                        <Work />
                        <SkillsCard stats={data} />
                    </div>
                </div>
            </div>
        </div>
    );
}
