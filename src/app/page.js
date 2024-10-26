import {ArticleCard} from "@/components/article-card";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Form, FormControl, FormDescription, FormItem, FormMessage} from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import {SubscribeCard} from "@/components/subscribe-card";

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
    }
]

export default function Home() {


    return (
        <div className={'flex flex-col md:flex-row'}>
            <div className={'md:w-3/5'}>
                {articles.map((article, index) => (
                    <ArticleCard key={index} {...article} />
                ))}
            </div>
            <div className={'md:w-2/5'}>
                <SubscribeCard/>
            </div>
        </div>
    );
}
