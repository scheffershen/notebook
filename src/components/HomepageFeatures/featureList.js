import React from 'react';

const FeatureList = [
    {
      title: 'Apache',
      Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
      description: (
        <>
          Apache is the world's most used web server software. According to Netcraft, 50.8% of the top 10 million websites run on Apache.
        </>
      ),
    },
    {
      title: 'Bigbluebutton',
      Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
      description: (
        <>
          Bigbluebutton is an open source web conferencing system for online learning. It is used by millions of people around the world.
        </>
      ),
    },
    {
      title: 'Certbot',
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      description: (
        <>
          Certbot is a free, open source software tool for automatically using Let's Encrypt certificates on manually-administrated websites to enable HTTPS.
        </>
      ),
    },
    {
      title: 'CSS',
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      description: (
        <>
          CSS is a style sheet language used for describing the presentation of a document written in a markup language like HTML.
        </>
      ),
    },
    {
      title: 'Design Patterns',
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      description: (
        <>
          Design patterns are typical solutions to common problems in software design. Each pattern is like a blueprint that you can customize to solve a particular design problem in your code.
        </>
      ),
    },
    {
      title: 'Docker',
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      description: (
        <>
          Docker is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers.
        </>
      ),
    },
    {
      title: 'E-learning',
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      description: (
        <>
          E-learning is the use of electronic media and information and communication technologies in education. E-learning can be defined as "any learning that makes use of technology to enhance the learning experience".
        </>
      ),
    },
    {
      title: 'ElasticSearch',
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      description: (
        <>
          ElasticSearch is a distributed, open source search and analytics engine for all types of data, including textual, numerical, geospatial, structured, and unstructured.
        </>
      ),
    },
    {
      title: 'French',
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      description: (
        <>
          French language is a Romance language of the Indo-European family. It descended from the Vulgar Latin of the Roman Empire, as did all Romance languages.
        </>
      ),
    },
    {
      title: 'Git',
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      description: (
        <>
          Git is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files.
        </>
      ),
    },
    {
      title: 'GitHub',
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      description: (
        <>
          Github is a web-based hosting service for version control using Git. It is mostly used for computer code. It offers all of the distributed version control and source code management functionality of Git as well as adding its own features.
        </>
      ),
    },
    {
      title: 'Google',
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      description: (
        <>
          Google api is a set of application programming interfaces developed by Google which allow communication with Google Services and their integration to other services.
        </>
      ),
    },
    {
      title: 'HTML',
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      description: (
        <>
          HTML is the standard markup language for creating Web pages. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.
        </>
      ),
    },
    {
      title: 'JavaScript',
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      description: (
        <>
          JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.
        </>
      ),
    },
    {
      title: 'Linux',
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      description: (
        <>
          Linux is a family of open source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds.
        </>
      ),
    },
    {
      title: 'Machine Learning',
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      description: (
        <>
          Machine learning is the study of computer algorithms that improve automatically through experience. It is seen as a subset of artificial intelligence.
        </>
      ),
    },
    {
      title: 'Makefile',
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      description: (
        <>
          Makefile is a file that defines a set of tasks to be executed by a program called make. It is used to control the generation of executables and other non-source files of a program from the program's source files.
        </>
      ),
    },
    {
      title: 'MySQL',
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      description: (
        <>
          MySQL is an open-source relational database management system. Its name is a combination of "My", the name of co-founder Michael Widenius's daughter, and "SQL", the abbreviation for Structured Query Language.
        </>
      ),
    },
    {
      title: 'Nginx',
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      description: (
        <>
          Nginx is a web server which can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.
        </>
      ),
    },
    {
      title: 'OpenAI',
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      description: (
        <>
          OpenAI is a non-profit artificial intelligence research company founded in 2015 by Elon Musk, Sam Altman, and Greg Brockman.
        </>
      ),
    },
    {
      title: 'PHP',
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      description: (
        <>
          PHP is a server-side scripting language designed for web development but also used as a general-purpose programming language.
        </>
      ),
    },
    {
      title: 'Python',
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      description: (
        <>
          Python is a server-side scripting language designed for web development but also used as a general-purpose programming language.
        </>
      ),
    },
    {
      title: 'ReactJs',
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      description: (
        <>
          React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.
        </>
      ),
    },
    {
      title: 'Scorm',
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      description: (
        <>
          Scorm is a set of technical standards for e-learning. It is a collection of specifications and technical standards for web-based e-learning.
        </>
      ),
    },
    {
      title: 'SVN',
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      description: (
        <>
          SVN is a software versioning and revision control system distributed as free software under the Apache License.
        </>
      ),
    },
    {
      title: 'Symfony',
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      description: (
        <>
          SVN is a software versioning and revision control system distributed as free software under the Apache License.
        </>
      ),
    },
    {
      title: 'Tailwind CSS',
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      description: (
        <>
          Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.
        </>
      ),
    },
    {
      title: 'Template',
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      description: (
        <>
          Template is a file that contains the skeleton of a web page, including the basic HTML structure and the elements that are common to all pages of a website.
        </>
      ),
    },
    {
      title: 'UML',
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      description: (
        <>
          UML is a general-purpose, developmental, modeling language in the field of software engineering that is intended to provide a standard way to visualize the design of a system.
        </>
      ),
    },  
    {
      title: 'Voyage',
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      description: (
        <>
          Mes voyages en France et à l'étranger.
        </>
      ),
    },
    {
      title: 'Web API',
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      description: (
        <>
          Web API is a set of routines, protocols, and tools for building software applications. It is a software intermediary that allows two applications to talk to each other.
        </>
      ),
    },  
    {
      title: 'Webpack',
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      description: (
        <>
          Webpack is an open-source JavaScript module bundler. It is a module bundler primarily for JavaScript, but it can transform front-end assets like HTML, CSS, and images if the corresponding plugins are included.
        </>
      ),
    }, 
    {
      title: 'WebRTC',
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      description: (
        <>
          WebRTC is a free, open-source project that provides web browsers and mobile applications with Real-Time Communications (RTC) capabilities via simple APIs.
        </>
      ),
    }, 
    {
      title: 'WebSocket',
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      description: (
        <>
          WebSocket is a computer communications protocol, providing full-duplex communication channels over a single TCP connection.
        </>
      ),
    }, 
    {
      title: 'Windows',
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      description: (
        <>
          Windows is a group of several proprietary graphical operating system families, all of which are developed and marketed by Microsoft.
        </>
      ),
    }, 
    {
      title: 'xApi',
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      description: (
        <>
          xApi is a set of technical standards for e-learning. It is a collection of specifications and technical standards for web-based e-learning.
        </>
      ),
    }, 
  ];

export default FeatureList;
