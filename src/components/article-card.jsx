'use client';

export function ArticleCard({date, title, description, link}) {
    return (
        <div className={'p-6'}>
            <div className={'mb-4'}>
                <span className={'text-sm text-muted-foreground border-border border-l-4 pl-4'}>{date}</span>
            </div>
            <div className={'mb-4'}>
                <h2 className={'text-xl font-semibold'}>{title}</h2>
            </div>
            <div className={'mb-4'}>
                <p className={'text-muted-foreground line-clamp-3'}>{description}</p>
            </div>
            <div>
                <a href={link} className={'text-teal-500'}>Read more</a>
            </div>
        </div>
    );
}
