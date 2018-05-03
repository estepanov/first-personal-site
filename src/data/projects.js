import tr1 from '../imgs/tr/1.png'
import tr2 from '../imgs/tr/2.png'
import tr3 from '../imgs/tr/3.png'
import tr4 from '../imgs/tr/4.png'
import tr5 from '../imgs/tr/5.png'
import tr6 from '../imgs/tr/6.png'

import bpp1 from '../imgs/bpp/1.png'
import bpp2 from '../imgs/bpp/2.png'
import bpp3 from '../imgs/bpp/3.png'
import bpp4 from '../imgs/bpp/4.png'
import bpp5 from '../imgs/bpp/5.png'
import bpp6 from '../imgs/bpp/6.png'

import scrapetorrentstats1 from '../imgs/scrapetorrentstats/1.png'
import scrapetorrentstats2 from '../imgs/scrapetorrentstats/2.png'

import lazysqlSplash from '../imgs/lazysql/splash.png'
import lazysqlDB from '../imgs/lazysql/db.png'
import lazysqlModel from '../imgs/lazysql/model.png'
import lazysqlAssoc from '../imgs/lazysql/assoc.png'
import lazysqlFinalAsoc from '../imgs/lazysql/final-asoc.png'
import lazysqlSave from '../imgs/lazysql/save.png'

const data = [
  {
    urlname: 'TorrentReport',
    name: 'Torrent Report',
    description:
      'A platform that actively scrapes and aggregates information on popular files from various bit torrent websites. The server automatically scrapes torrent sharing websites and collects download statistics on files are tracked over time. The website is a React application built with Redux and I am currently implementing GraphQL.',
    images: [
      {
        title: 'Home',
        src: tr1
      },
      {
        title: 'All New Listings',
        src: tr2
      },
      {
        title: 'Search All New Listings',
        src: tr3
      },
      {
        title: 'Torrent Name',
        src: tr4
      },
      {
        title: 'Torrent Info',
        src: tr5
      },
      {
        title: 'Login',
        src: tr6
      }
    ],
    breakdown: [
      {
        title: 'Frontend',
        value: [
          'React',
          'React-router-dom',
          'Redux',
          'Post CSS',
          'SASS',
          'Webpack'
        ]
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
        src: bpp1
      },
      {
        title: 'Logged Out Home Page ',
        src: bpp2
      },
      {
        title: 'Repo Read Me Page',
        src: bpp3
      },
      {
        title: 'Integration Choices',
        src: bpp4
      },
      {
        title: 'Deployment Choices',
        src: bpp5
      },
      {
        title: 'User Cloned Repos',
        src: bpp6
      }
    ],
    breakdown: [
      {
        title: 'Frontend',
        value: [
          'React',
          'React-router-dom',
          'Redux',
          'Bulma CSS',
          'Jest',
          'Webpack'
        ]
      },
      {
        title: 'Backend',
        value: ['Node', 'Express', 'Mocha', 'Postgres', 'Sequelize']
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
        src: scrapetorrentstats1
      },
      {
        title: 'CLI Result',
        src: scrapetorrentstats2
      }
    ],
    breakdown: [
      {
        title: 'Backend',
        value: ['Node', 'Bittorrent-dht', 'Bittorrent-tracker', 'Mocha']
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
        src: lazysqlSplash
      },
      {
        title: 'Define your Database',
        src: lazysqlDB
      },
      {
        title: 'Define your Model',
        src: lazysqlModel
      },
      {
        title: 'Add an Association',
        src: lazysqlAssoc
      },
      {
        title: 'Review Associations',
        src: lazysqlFinalAsoc
      },
      {
        title: 'Save Configuration File',
        src: lazysqlSave
      }
    ],
    breakdown: [
      {
        title: 'Frontend',
        value: ['Electron', 'React', 'React-router-dom', 'Redux', 'Webpack']
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
