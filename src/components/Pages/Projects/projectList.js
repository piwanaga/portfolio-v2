import vetWait from '../../../assets/images/vet-wait.jpg';
import eventFinder from '../../../assets/images/event-finder.jpg';
import newsAggregator from '../../../assets/images/news-aggregator.jpg';
import covidStats from '../../../assets/images/covid-stats.jpg';
import foodDiscovery from '../../../assets/images/food-discovery.jpg';
import bulletinFAQ from '../../../assets/images/bulletin-faq.jpg';

const projects = [
    {   
        id: 1,
        links: {github: 'https://github.com/piwanaga/event-finder', live: 'https://event-finder.surge.sh/'},
        title: 'EventFinder',
        description: 'App for searching events based on location, keyword, or event type.',
        technologies: ['Node', 'Express', 'PostgreSQL', 'React', 'Redux', 'JWT'],
        implementation: 'Frontend built with React and Redux to manage state. Ticketmaster API for all event data. Backend user models and API built with Node and Express.',
        learned: 'How to build a component based UI, manage centralized state across an entire application and handle async function calls from components using redux-thunk and action creators.',
        forward:  'I am working to improve my design skills and my overall approach to building complex projects, especially how to prioritize certain features over others.',
        image: eventFinder,
        alt: 'event finder screenshot'
    },
    {
        id: 2,
        links: {github: 'https://github.com/piwanaga/vet-wait', live: 'https://piwanaga.github.io/vet-wait/'},
        title: 'VetWait',
        description: 'Wait list for checking in pet owners and  sending an SMS notification when ready.',
        technologies: ['React', 'Axios', 'TailwindCSS', 'Headless UI'],
        implementation: 'Used React and TailwindCSS to build UI. Textbelt SMS API to send text notifications.',
        learned: 'How to use TailwindCSS utility classes to style components and send text messages using an API endpoint.',
        forward: 'I want to improve my TailwindCSS skills and knowledge and use it more in future projects.',
        image: vetWait,
        alt: 'vet wait screenshot'   
    },
    {
        id: 3,
        links: {github: 'https://github.com/piwanaga/News-Aggregator'},
        title: 'NewsAggregator',
        description: "Site to search and browse current news articles using Bing's News API.",
        technologies: ['Python', 'Flask', 'PostgreSQL', 'SQLAlchemy', 'Jinja', 'JQuery', 'Bootstrap'],
        implementation: 'Server and routes built with Flask. HTML templates served via JINJA templating. Models and DB setup using SQLAlchemy.',
        learned: 'How to generate encrypted passwords and perform authentication using BCrypt as well as define models for creating and interacting with the database.',
        forward: 'I would like to do more complex things using Python that involve more data and computation.',
        image: newsAggregator,
        alt: 'news aggregator screenshot'
    },
    {
        id: 4,
        links: {github: 'https://github.com/piwanaga/covid-stats'},
        title: 'CovidStats',
        description: 'My intro to GraphQL and Apollo Server. Look up Covid-19 stats by U.S. state.',
        technologies: ['GraphQL', 'Apollo Server', 'Apollo Client', 'React', 'TailwindCSS'] ,
        implementation: 'Setup my server, schema, resolver and data source using Apollo Server and GraphQL as a wrapper for an existing API endpoint. Used Apollo Client to query the server and fetch my data.',
        learned: 'The basics of using GraphQL and Apollo Server.',
        forward: "I'd like to include functionality for comparing data between states with some sort of visualization.",
        image: covidStats,
        alt: 'covid stats screnshot'
    },
    {
        id: 5,
        links: {live: 'https://bulletin.zendesk.com/hc/en-us'},
        title: 'Bulletin FAQ',
        description: "Implemented a new theme for Bulletin's FAQ page using HTML and CSS.",
        technologies: ['HTML', 'CSS'],
        implementation: "Edited colors, text, links, layout and other visuals to match company branding and include company assets.",
        learned: 'How to edit existing code on a CRM platform to deliver results for a client.',
        forward: 'I would love to work on more complex freelance projects, building custom functionality in addition to visuals.',
        image: bulletinFAQ,
        alt: 'bulletin faq screenshot'
    },
    {
        id: 6,
        links: null,
        title: 'FoodDiscovery App',
        description: 'My first freelance gig. I created the homepage for (now defunct) FoodDiscovery App.',
        technologies: ['React', 'Material UI'],
        implementation: 'Using the mockup and images I was given, I created the homepage to the required specifications.',
        learned: 'How to recreate a UI design using React and Material UI.',
        forward: 'This was great practice for a frontend job, implementing the design and functionality provided to me by the client.',
        image: foodDiscovery,
        alt: 'food discovery screenshot'
    }
]

export default projects