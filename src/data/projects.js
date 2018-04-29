const data = [
  {
    urlname: 'TorrentReport',
    name: 'Torrent Report',
    description:
      'A platform that actively scrapes and aggregates information on popular files from various bit torrent websites. The server automatically scrapes torrent sharing websites and collects download statistics on files are tracked over time. The website is a React application built with Redux and I am currently implementing GraphQL.',
    images: [
      {
        title: 'Home',
        url: '/imgs/tr/1.png'
      },
      {
        title: 'All New Listings',
        url: '/imgs/tr/2.png'
      },
      {
        title: 'Search All New Listings',
        url: '/imgs/tr/3.png'
      },
      {
        title: 'Torrent Name',
        url: '/imgs/tr/4.png'
      },
      {
        title: 'Torrent Info',
        url: '/imgs/tr/5.png'
      },
      {
        title: 'Login',
        url: '/imgs/tr/6.png'
      }
    ],
    breakdown: [
      {
        title: 'Frontend',
        value: ['React', 'React-Router', 'Webpack']
      },
      {
        title: 'Backend',
        value: [
          'Node',
          'Express',
          'Mocha',
          'Postgres',
          'Sequelize',
          'Puppeteer',
          'GraphQL'
        ]
      }
    ],
    links: [
      {
        title: 'Website',
        href: 'https://Torrent.Report'
      },
      {
        title: 'GitHub Repo',
        href: 'https://github.com/estepanov/torrentReport'
      }
    ]
  },
  {
    urlname: 'BoilerPlatePro',
    name: 'Boiler Plate Pro',
    description:
      "Boilerplate Pro is a web app for developers that solve's the perplexing problem of choosing a boilerplate and beginning a project. ",
    readme:
      '### How to use it. \n \n Users start out by logging in with GitHub, which allows Boilerplate Pro access to all the necessary data to make new repos and clone data for a user. Upon login the user will see a list of boilerplates that are available for selection and sorting, but more importantly they can search for a specific word that exists in the README, title and package.JSON. \n \n This allows users complete control over their search. Users can then view a rendered version of the selected boilerplates README and, if they decide to build it, choose a name and start the Hyperclone™ process. The user will then see a link to the newly created GitHub repo on their account and options for Travis CI as well as Heroku for deployment. \n \n ### How it works. \n \n Boilerplate Pro uses Googles Firestore for realtime, NoSQL, database for data which posed interesting challenges for our team. Because we had no traditional backend we could not make API requests and we initially attempted to use cloud functions to circumvent this issue. However, timeout constraints forced us to forgo this and build out a backend in addtion to the Firestore. The backend eventually helped us utilize Travis for continuous integration on every project. \n \n The process of scraping the necessary boilerplates is very resource and time intensive, so much so that we had to build a rate limited and time based method to work in line with GitHubs API constraints. This process scrapes the boilerplate itself as well as the README and the dependencies which are necessary to make searching work. \n \n We also had unique challenges in determing the best way to streamline the user experience in terms of forking or cloning. The Hyperclone™ process condenses initial cloning, remote adding, pulling, adding, commiting and pushing into one button for the user.  \n \n Heroku was the most difficult challenge of the project and is still not fully working in the current build. Not all boilerplates are immediately deployable and the Heroku button will not function for every single boilerplate. Every boilerplate is different and may be missing one of any necessary files to enable working deployment.',
    images: [
      {
        title: 'Home Page',
        url: '/imgs/bpp/1.png'
      },
      {
        title: 'Logged Out Home Page ',
        url: '/imgs/bpp/2.png'
      },
      {
        title: 'Repo Read Me Page',
        url: '/imgs/bpp/3.png'
      },
      {
        title: 'Integration Choices',
        url: '/imgs/bpp/4.png'
      },
      {
        title: 'Deployment Choices',
        url: '/imgs/bpp/5.png'
      },
      {
        title: 'User Cloned Repos',
        url: '/imgs/bpp/6.png'
      }
    ],
    breakdown: [
      {
        title: 'Frontend',
        value: [
          'React',
          'React-Router',
          'Redux',
          'Axios',
          'Bulma CSS',
          'Jest',
          'Webpack'
        ]
      },
      {
        title: 'Backend',
        value: [
          'Node',
          'Express',
          'Simple Git',
          'Morgan',
          'Lodash',
          'Mocha',
          'Postgres',
          'Sequelize'
        ]
      }
    ],
    links: [
      {
        title: 'Presentation Video',
        href: 'https://www.youtube.com/watch?v=aDu8JJXnEIY'
      },
      {
        title: 'Website',
        href: 'https://boilerplate.pro'
      },
      {
        title: 'GitHub Repo',
        href: 'https://github.com/team-made/boilerplate-pro'
      }
    ]
  },
  {
    urlname: 'scrapeTorrentStats',
    name: 'scrapeTorrentStats',
    description:
      'Scrape information from the bittorrent trackers and the distributed hash table. Given a bittorrent magnet URI, scrapeTorrentStats can check both tracker and the DHT for downloads and peers. This project utilizes two great tools from the wizards that brought us WebTorrent. We use their DHT client bittorrent-dht, and their tracker client bittorrent-tracker. This project also uses native promises.',
    images: [
      {
        title: 'Yarn Run Example',
        url: '/imgs/scrapetorrentstats/1.png'
      },
      {
        title: 'CLI Result',
        url: '/imgs/scrapetorrentstats/2.png'
      }
    ],
    breakdown: [
      {
        title: 'Backend',
        value: ['Node', 'bittorrent-dht', 'bittorrent-tracker', 'Mocha']
      }
    ],
    links: [
      {
        title: 'NPM',
        href: 'https://www.npmjs.com/package/scrape-torrent-stats'
      },
      {
        title: 'GitHub Repo',
        href: 'https://github.com/estepanov/scrapeTorrentStats'
      }
    ]
  },
  {
    urlname: 'lazySuite',
    name: 'lazyBuilder, lazySQL, and lazyExpress',
    description:
      'An unopinionated Sequelize model and association builder. You give us just the Sequelize objects/tables you want, we give you production ready JavaScript files implementing your sequlize models to use in your projects. This package can be used either as a dependency in another project, command line tool, or with lazyBuilder (our GUI).',
    images: [
      {
        title: 'Home',
        url: '/imgs/lazysql/splash.png'
      },
      {
        title: 'Define your Database',
        url: '/imgs/lazysql/db.png'
      },
      {
        title: 'Define your Model',
        url: '/imgs/lazysql/model.png'
      },
      {
        title: 'Add an Association',
        url: '/imgs/lazysql/assoc.png'
      },
      {
        title: 'Review Associations',
        url: '/imgs/lazysql/final-asoc.png'
      },
      {
        title: 'Save Configuration File',
        url: '/imgs/lazysql/save.png'
      }
    ],
    breakdown: [
      {
        title: 'Frontend',
        value: [
          'Electron',
          'React',
          'React-Router',
          'Redux',
          'Webpack',
          'Commander'
        ]
      }
    ],
    links: [
      {
        title: 'Hackathon Presentation Video',
        href: 'https://www.youtube.com/watch?v=L-FJCWB9SEM'
      },
      {
        title: 'lazyBuilder GitHub Repo',
        href: 'https://github.com/brick-layers/lazyBuilder'
      },
      {
        title: 'lazySql NPM',
        href: 'https://www.npmjs.com/package/lazysql'
      },
      {
        title: 'lazySql GitHub Repo',
        href: 'https://github.com/brick-layers/lazySQL'
      },
      {
        title: 'lazyExpress NPM',
        href: 'https://www.npmjs.com/package/lazyexpress'
      },
      {
        title: 'lazyExpress GitHub Repo',
        href: 'https://github.com/brick-layers/lazyExpress'
      }
    ]
  }
]

export default data
