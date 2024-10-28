'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function SkillsCard({ stats }) {

    return (
        <Card>
            <CardHeader>
                <CardTitle className={'text-base'}>⚡️ Skills</CardTitle>
                <CardDescription className={'text-sm'}>
                    Here are some of the skills I have acquired over the years.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className={'grid grid-cols-1 gap-y-4'}>
                    {stats.languages.map((language, index) => (
                        <div key={index} className={'flex items-end gap-x-2'}>
                            <div className={'flex-shrink'}>
                                <Button className={'rounded-full p-2'} size={'icon'} variant={'secondary'}>
                                    <img src={`/${language.name.toLowerCase()}.png`} alt={language.name} className={'w-6 h-6'} />
                                </Button>
                            </div>
                            <div className={'flex-grow'}>
                                <div className={'flex flex-row items-center justify-between'}>
                                    <span className={'text-sm'}>{language.name}</span>
                                </div>
                                <div className={'bg-secondary w-full h-6'}>
                                    <div style={{ width: `${language.percent}%` }} className={'bg-teal-500 h-6'}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
