import React from 'react';

const About = () => {
    return (<>
        <div className='flex flex-wrap sm:gap-x-6 items-center justify-center'>
            <h1 className='text-4xl font-bold leading-none tracking-tight sm:text-6xl'>
                We love
            </h1>
            <div className='stats bg-primary shadow'>

                <div className='stat'>

                    <div className='stat-title text-primary-content text-3xl font-bold tracking-tighter'>
                        A-Store
                    </div>

                </div>

            </div>

        </div>
        <p className='mt-6 text-lg max-w-3xl mx-auto leading-8'>

            Selling furniture and accessories is big business generate over $114 billion U.S. dollars worth of sales each year. As disposable income has increased, the home furnishings industry has enjoyed considerable growth. In 2021,
            With generous profit margins and a society that values the comfort and beauty of their home, the opportunity for home furnishings sellers is immense. But succeeding may not be as easy as it sounds. Where there's good money to be made, there's also abundant competition.

            To stand out, home furnishings sellers — including many who export their furnishings from countries like India and Germany — must use top-notch marketing with quality copywriting.
        </p>
    </>
    );
}

export default About;
