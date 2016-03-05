# wukong
> website: https://wukong-bittiger.herokuapp.com

> wukong-phase-1 vedio demo: https://vimeo.com/157355174

## Description

Inspired by DMK - Rong Zou, wukong is a platform built by Team BJGX (白驹过隙) to divide study groups for Bittiger members.

**How does it work?**

1. Members' information is stored in database and each member has one of the following three statuses: active, to be grouped or inactive.
2. Once new members fill information form, the default status will be "to be grouped". Our system will recommend joining certain opening groups based on their preferences and skills. Or several new members will become a new team based on their regions and interests.
3. Group leader can post wanting positions and skills. All the members who want to join a target group can contact their leader.
4. People being inactive for one week will be put into "inactive pool" by group leader. Their team history will be saved. After they want to do projects the status can be changed to active and they can enter the group again.

**How we build it?**

Built by using MEAN stack, and deployed on Heroku.

## How to run wukong

### Run wukong locally

__Step 1. Install mongodb and nodejs__

1. Install [mongodb](https://www.mongodb.org/downloads#production) and [node](https://nodejs.org/en/)
2. Create data directory for mongodb store data: ` mkdir ~/Desktop/dbdata`
3. Start mongodb server: ` mongod --dbpath ~/Desktop/dbdata`

__Step 2. get wukong source code and install package__

1. Clone wukong from github: ` $ git clone https://github.com/BitTigerInst/wukong.git `
2. Go into wukong forlder and install node package: ` cd wukong && npm install `
3. Run wukong: ` node index `

### Deploy wukong to heroku

1. Create a heroku account [more to read](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)
2. Login heroku: ` heroku login `
3. Inside wukong, create app on heroku: ` heroku create `. In this case, heroku will create a random name for you as the frist part of url. i.e. "https://random-name.herokuapp.com". You could also specify a name: ` heroku create wukong-bittiger `, then the name will become the frist part of url. i.e. "https://wukong-bittiger.herokuapp.com". __Notice:__ we already take the name "wukong-bittiger" as its offical name, so if you do command: ` heroku create wukong-bittiger `, you will encounter an error message "name already be taken". In this case, try other names.
4. Add mongoLab as add on: ` heroku addons:create mongolab `. This add on need account verification, you need to set up a valid payment information, by default, mongolab will set up a free plan for you, no need to worry about any charges. More to read [here](https://elements.heroku.com/buttons/mongolab/hello-mongoose) and [here](https://devcenter.heroku.com/articles/mongolab#adding-mlab-as-a-heroku-add-on)
5. Push code to heroku: ` git push heroku master `
6. Open it on your browser: ` heroku open `

## Who we are:

### <img src="public/images/markdown/logo.png" width="124px" height="124px" /> BJGX-白驹过隙
**More to be add here**

### <img src="public/images/markdown/bittigerlogo.png" width="124px" height="124px" /> BitTiger
**More to be add here**

### <img src="public/images/markdown/meanlogo.png" width="124px" height="124px" /> MEAN Stack

MEAN is a framework for an easy starting point with [MongoDB](https://www.mongodb.org/), [Node.js](http://www.nodejs.org/), [Express](http://expressjs.com/), and [AngularJS](https://angularjs.org/) based applications. It is designed to give you a quick and organized way to start developing MEAN based web apps with useful modules like Mongoose and Passport pre-bundled and configured. We mainly try to take care of the connection points between existing popular frameworks and solve common integration problems.

### Technologies

#### The MEAN stack

MEAN is an acronym for *Mongo*, *Express.js* , *Angular.js* and *Node.js*

<dl class="dl-horizontal">
<dt>MongoDB</dt>
<dd>Go through MongoDB Official Website and proceed to its Great Manual, which should help you understand NoSQL and MongoDB better.</dd>
<dt>Express</dt>
<dd>The best way to understand express is through its Official Website, particularly The Express Guide; you can also go through this StackOverflow thread for more resources.</dd>
<dt>AngularJS</dt>
<dd>Angular's Official Website is a great starting point. CodeSchool and google created a <a href="https://www.codeschool.com/courses/shaping-up-with-angular-js">great tutorial</a> for beginners, and the angular videos by <a href="https://egghead.io/">Egghead</a>.</dd>
<dt>Node.js</dt>
<dd>Start by going through Node.js Official Website and this StackOverflow thread, which should get you going with the Node.js platform in no time.</dd>
</dl>

#### Additional Tools
* <a href="http://mongoosejs.com/">Mongoose</a> - The mongodb node.js driver in charge of providing elegant mongodb object modeling for node.js
* <a href="http://passportjs.org/">Passport</a> - An authentication middleware for Node.js which supports authentication using a username and password, Facebook, Twitter, and more.
* <a href="http://getbootstrap.com/">Twitter Bootstrap</a> - The most popular HTML, CSS, and JS framework for developing responsive, mobile first projects.
* <a href="http://angular-ui.github.io/bootstrap/">UI Bootstrap</a> - Bootstrap components written in pure AngularJS

#### Hosting MEAN on [Heroku](https://www.heroku.com/products)

Heroku is a fully managed container-based cloud platform, with integrated data services and a powerful ecosystem, for deploying and running modern apps. The Heroku developer experience is based on an app-centric approach to software delivery, and integrates with today’s most popular developer tools and workflows.

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)

## Credits
  * To our awesome <a href="https://github.com/orgs/linnovate/teams/mean">core team</a> with help of our <a href="https://github.com/linnovate/mean/graphs/contributors">contributors</a> which have made this project a success.
  * <a href="https://github.com/vkarpov15">Valeri Karpov</a> for coining the term *mean* and triggering the mean stack movement.
  * <a href="https://github.com/amoshaviv">Amos Haviv</a>  for the creation of the initial version of Mean.io while working for us @linnovate.
  * <a href="https://github.com/madhums/">Madhusudhan Srinivasa</a> who inspired us with his great work.

## License
We believe that mean should be free and easy to integrate within your existing projects so we chose [The MIT License](http://opensource.org/licenses/MIT)
