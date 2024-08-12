const equal_pay = {
    tabs: ['Introduction', 'Salary', 'Negotiation 101', 'Market Yourself', 'Pay Discussion'],
    ['tabContent']: [
    {
            title: 'Introduction to Equal Pay',
            description: "SheeKeela Edwards introduces the Fair and Equal Pay section of the EmpowerHer kit and explains the importance of this subject.",
            contents: [
                {type: 'video', content: "Intro to Equal Pay Video", videoId: "mfUrGC3loWI?si=ReJE6PUo-07bNRVU"},
                {type: 'link', content: "Also, check out our Kahoot quiz for this module!", href: "https://create.kahoot.it/share/equal-fair-pay-knowledge-check/a0db4155-ae3b-4486-b1ee-222ba5eb1fd0"}
            ]
    },  {
        title: 'Market Salary Resources',
        description: "It is very crucial in today's world that you know how to navigate and find valuable information on expected pay for the position you are interested in. Glassdoor is a great resource to search salaries in different industries",
        contents: [{type: 'text', content: "It's difficult to know whether you’re being compensated fairly or not, using the resources below allows you to put more energy to other needs in your life." },
        {type: 'link', content: 'Bureau of Labor Statistics', href: 'https://www.bls.gov/'},
        {type: 'text', content: "Glassdoor is a great resource to search salaries in different industries. Search for your current or prospective roles to see if you're getting the average salary according to Glassdoor."},
        {type: 'image', content: "Screenshot of Glassdoor Salary Search", src: "https://i.ibb.co/PWvYn6p/Screenshot-2024-07-31-at-6-46-53-PM.jpg"},
        {type: 'link', content: "Glassdoor - Salaries", href: "https://www.glassdoor.com/Salaries/index.htm"}
        ]
    },  {
        title: 'Negotiation 101',
        description:'This resource will demonstrate strategies to effectively negotiate an initial salary or raise conducted through research an industry standards and salary benchmarks. Its very crucial to articulate your contributions to the organization.',
        contents: [{type: 'text', content: 'Knowing how to negotiate can help you get the pay you feel you deserve. Click the links below for tips on how to negotiate.'},
        {type: 'link', content: '3 Salary Negotiation Tips', href: 'https://www.pon.harvard.edu/daily/salary-negotiations/negotiate-salary-3-winning-strategies/'},
        {type: 'link', content: 'Teaching Negotiation', href: 'https://www.pon.harvard.edu/freemium/teaching-negotiation-understanding-the-impact-of-role-play-simulations/'},
        {type: 'text', content: 'Preparation, Investigation, and Roleplaying are three tips women should grasp to help level the playing field in the negotiation world. This article provides an brief dive of six tips that can place women in different tax brackets (Harvard, 2024). Using the article below, pick a tip that you may not have been aware of and think about how it would benefit you.'},
        {type: 'link', content: 'Are Salary Negotiation Skills Different for Men and Women?', href: 'https://www.pon.harvard.edu/daily/salary-negotiations/salary-negotiation-skills-different-for-men-and-women/'}
        ]
    },  {
        title: 'How to Market Yourself',
        description: 'An elevator pitch is the difference between creating meaningful connections and missing out on a new opportunity!',
        contents: [{type: 'text', content: "Sometimes when we’re on move, it's tough to read a full article, so here’s we’ve provided various podcasts that can be used listen in ten minutes to sixty minutes"},
            {type: 'link', content: '4 Top Podcasts Every Job Seeker Should Listen To', href: "https://www.trnstaffing.com/insights/4-top-podcasts-for-job-seekers/"},
            {type: 'link', content: "10 Marketing Podcasts for Beginners and Pros: 2024 List", href: "https://www.coursera.org/articles/marketing-podcasts"}
        ]
    },  {
        title: 'Creating and Normalizing Pay Discussions',
        description: `It is important that as adults we figure this equal and fair pay so that our children don't grow up having to worry about it.

        Here you will find information on normalizing discussions on pay. The organization should encourage open conversations on pay for transparency.`,
        contents: [
            {type:'text', content: "Child Social Experiment Looks At Gender Equality"},
            {type: 'text', content: "The video below shows us how simple Gender Equality is to understand! After watching this clip, try to explain this to someone who is not well versed in Gender Equality. If you’re able to explain it, then you’re one step closer to becoming an expert!"},
            {type: 'video', content: "Child Social Experiment", videoId: "QKgKaQzil1A?si=nZawXrvKzr7zM2y8" },
            {type: 'link', content: "What it Takes to Be a Fair-Pay Workplace"}
        ]
        
    }]
};
export default equal_pay;