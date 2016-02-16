# **wukong** *https://wukong-bittiger.herokuapp.com*

## Description

Inspired by DMK-邹蓉, wukong是白驹过隙小组为Bittiger三人学习小组设计的成员分组平台
**How does it work?**

1. 把大家的信息都导入到membership数据库中, 成员有三种状态: active, 待分组, inactive.
2. 每当新成员填表后, 会进入待分组状态, 系统将根据他的preference推荐仍有open的小组, 或者将多位新人按照地区兴趣分组.
3. 每位小组长可以在自己小组贴上open职位及技能点需求, 想跳组的老成员or新成员可以直接联系组长.
4. 组长可以将inactive持续一周的组员放入inactive pool, 备注会有team history, 等他回到想做project的状态时再去激活状态, 重新入组.

**How we build it?**

Built by using MEAN stack, and deployed on Heroku.

## Who we are:

### <img src="packages/assets/img/logo.png" width="124px" height="124px" /> 白驹过隙
**More to be add here**

### <img src="packages/assets/img/bittigerlogo.png" width="124px" height="124px" /> BitTiger
**More to be add here**

## [![MEAN Logo](http://mean.io/system/assets/img/logos/meanlogo.png)](http://mean.io/) MEAN Stack

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

#### Hosting MEAN on [Docker](https://www.docker.com/what-docker)

Docker containers wrap up a piece of software in a complete filesystem that contains everything it needs to run: code, runtime, system tools, system libraries – anything you can install on a server. This guarantees that it will always run the same, regardless of the environment it is running in.

## Credits
  * To our awesome <a href="https://github.com/orgs/linnovate/teams/mean">core team</a> with help of our <a href="https://github.com/linnovate/mean/graphs/contributors">contributors</a> which have made this project a success.
  * <a href="https://github.com/vkarpov15">Valeri Karpov</a> for coining the term *mean* and triggering the mean stack movement.
  * <a href="https://github.com/amoshaviv">Amos Haviv</a>  for the creation of the initial version of Mean.io while working for us @linnovate.
  * <a href="https://github.com/madhums/">Madhusudhan Srinivasa</a> who inspired us with his great work.

## License
We believe that mean should be free and easy to integrate within your existing projects so we chose [The MIT License](http://opensource.org/licenses/MIT)
