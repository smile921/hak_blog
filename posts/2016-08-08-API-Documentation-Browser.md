---
title: API Documentation Browser
date: 2016-08-08 09:06:41
tags:
  - api
  - devdoc
  - ruby
---

[DevDocs](http://devdocs.io)
[DevDocs github](https://github.com/Thibaut/devdocs )
## run devdocs in docker 
### First, build the image 

    git clone https://github.com/Thibaut/devdocs.git && cd devdocs 
    docker build -t thibaut/devdocs . 

### Finally, start a DevDocs container (access http://localhost:9292) 
    docker run --name devdocs -d -p 9292:9292 thibaut/devdocs 

------------------------------------------------------------------------------- 
## Sinatra：一个优雅地包装了Web开发的DSL 

你相信用100行代码可以实现一个博客吗？用Sinatra框架就可以做到。下面就是这样子的一个Web应用： 

    Reprise - A Minimalistic Blog 

这个应用的代码：点这里查看 


一个简单的hello world的web应用要写多少代码？用Sinatra只需5行代码： 

    require 'rubygems' 
    require 'sinatra' 
    
    get '/' do 
    'Hello World' 
    end 

安装方法： 

    $ gem install sinatra 
    $ ruby -rubygems hi.rb 
--------------------------------------------------------------------------------------- 
Aaron Patterson和Mike Dalessio开发了一个新的Ruby解析HTML/XML的ruby库 － Nokogiri。他的速度比目前应用的最广泛的Hpricot还要快许多。经过Benchmark测试表明，Nokogiri在加载XML文档的速度是Hpricot的7倍，在XPATH搜索的速度是Hpricot的5倍，而在CSS选择器的搜索上面是Hpricot的1.62倍。 

因此Nokogiri被认为有可能取代Hpricot的新一代Ruby的解析库，他能够解析HTML/XML文件，能够提供XPATH支持，CSS选择器支持。安装Nokogiri的办法很简单： gem install nokogiri 
-------------------------------------------------------------------------------------- 

## dash 
作为一名死coder，每天最常见的动作就是查看各种API文档，你一定也有过同时打开N个窗口（HTML、PDF、CHM），不停的在编辑器与文档之间切换的感受吧？怎么说呢，其实我很讨厌这种枯燥无味的动作，那么如何才能提高效率，减少无用功呢？下面就给大家介绍一款非常好用的Mac小工具：Dash，相比这个英文名，我跟喜欢叫它“叮当猫”，嘿嘿。 

官方用一句话就概括了它的用途：Dash是一个API文档浏览器（ API Documentation Browser），以及代码片段管理工具（Code Snippet Manager）。你没看错，它就只有这两个功能，但确实是程序员（至少对于我来说）最为关心的特性，自己之前也用过了不少类似的工具，可以毫不夸张地说，Dash是它们之中做的最好的一个！ 
强悍的API文档浏览、搜索功能 

想必这个功能是大家最常用的了吧，每天要反复查看、搜索那么多的API细节，没有一个好工具，单靠自己的双手如何应付得来？窗口不停的切来切去，很烦啊！Dash采用集成单一窗口的方式，很好的解决了这个问题
## [DevDocs](http://devdocs.io) [![Build Status](https://travis-ci.org/Thibaut/devdocs.svg?branch=master)](https://travis-ci.org/Thibaut/devdocs)

DevDocs combines multiple API documentations in a fast, organized, and searchable interface.

* Created by [Thibaut Courouble](http://thibaut.me)

Keep track of development news:

* Watch the repository on [GitHub](https://github.com/Thibaut/devdocs/subscription)
* Follow [@DevDocs](https://twitter.com/DevDocs) on Twitter
* Join the [mailing list](https://groups.google.com/d/forum/devdocs)

DevDocs is free and open source. If you like it, please consider supporting my work on [Gratipay](https://gratipay.com/devdocs/). Thanks!

**Table of Contents:** [Quick Start](#quick-start) · [Vision](#vision) · [App](#app) · [Scraper](#scraper) · [Commands](#available-commands) · [Contributing](#contributing) · [License](#copyright--license) · [Questions?](#questions)

## Quick Start

Unless you wish to contribute to the project, I recommend using the hosted version at [devdocs.io](http://devdocs.io). It's up-to-date and works offline out-of-the-box.

DevDocs is made of two pieces: a Ruby scraper that generates the documentation and metadata, and a JavaScript app powered by a small Sinatra app.

DevDocs requires Ruby 2.3.0, libcurl, and a JavaScript runtime supported by [ExecJS](https://github.com/rails/execjs#readme) (included in OS X and Windows; [Node.js](https://nodejs.org/en/) on Linux). Once you have these installed, run the following commands:

```
git clone https://github.com/Thibaut/devdocs.git && cd devdocs
gem install bundler
bundle install
thor docs:download --default
rackup
```

Finally, point your browser at [localhost:9292](http://localhost:9292) (the first request will take a few seconds to compile the assets). You're all set.

The `thor docs:download` command is used to download pre-generated documentations from DevDocs's servers (e.g. `thor docs:download html css`). You can see the list of available documentations and versions by running `thor docs:list`. To update all downloaded documentations, run `thor docs:download --installed`.

**Note:** there is currently no update mechanism other than `git pull origin master` to update the code and `thor docs:download --installed` to download the latest version of the docs. To stay informed about new releases, be sure to [watch](https://github.com/Thibaut/devdocs/subscription) this repository.

Alternatively, DevDocs may be started as a Docker container:

```
# First, build the image
git clone https://github.com/Thibaut/devdocs.git && cd devdocs
docker build -t thibaut/devdocs .

# Finally, start a DevDocs container (access http://localhost:9292)
docker run --name devdocs -d -p 9292:9292 thibaut/devdocs
```

## Vision

DevDocs aims to make reading and searching reference documentation fast, easy and enjoyable.

The app's main goals are to: keep load times as short as possible; improve the quality, speed, and order of search results; maximize the use of caching and other performance optimizations; maintain a clean and readable user interface; be fully functional offline; support full keyboard navigation; reduce “context switch” by using a consistent typography and design across all documentations; reduce clutter by focusing on a specific category of content (API/reference) and indexing only the minimum useful to most developers.

**Note:** DevDocs is neither a programming guide nor a search engine. All our content is pulled from third-party sources and the project doesn't intend to compete with full-text search engines. Its backbone is metadata; each piece of content is identified by a unique, "obvious" and short string. Tutorials, guides and other content that don't meet this requirement are outside the scope of the project.

## App

The web app is all client-side JavaScript, written in [CoffeeScript](http://coffeescript.org), and powered by a small [Sinatra](http://www.sinatrarb.com)/[Sprockets](https://github.com/rails/sprockets) application. It relies on files generated by the [scraper](#scraper).

Many of the code's design decisions were driven by the fact that the app uses XHR to load content directly into the main frame. This includes stripping the original documents of most of their HTML markup (e.g. scripts and stylesheets) to avoid polluting the main frame, and prefixing all CSS class names with an underscore to prevent conflicts.

Another driving factor is performance and the fact that everything happens in the browser. `applicationCache` (which comes with its own set of constraints) and `localStorage` are used to speed up the boot time, while memory consumption is kept in check by allowing the user to pick his/her own set of documentations. The search algorithm is kept simple because it needs to be fast even searching through 100,000 strings.

DevDocs being a developer tool, the browser requirements are high:

1. On the desktop:
  * Recent version of Chrome, Firefox, or Opera
  * Safari 8+
  * IE / Edge 10+
2. On mobile:
  * iOS 8+
  * Android 4.1+
  * Windows Phone 8+

This allows the code to take advantage of the latest DOM and HTML5 APIs and make developing DevDocs a lot more fun!

## Scraper

The scraper is responsible for generating the documentation and index files (metadata) used by the [app](#app). It's written in Ruby under the `Docs` module.

There are currently two kinds of scrapers: `UrlScraper` which downloads files via HTTP and `FileScraper` which reads them from the local filesystem. They both make copies of HTML documents, recursively following links that match a set of rules and applying all sorts of modifications along the way, in addition to building an index of the files and their metadata. Documents are parsed using [Nokogiri](http://nokogiri.org).

Modifications made to each document include:

* removing content such as the document structure (`<html>`, `<head>`, etc.), comments, empty nodes, etc.
* fixing links (e.g. to remove duplicates)
* replacing all external (not scraped) URLs with their fully qualified counterpart
* replacing all internal (scraped) URLs with their unqualified and relative counterpart
* adding content, such as a title and link to the original document

These modifications are applied via a set of filters using the [HTML::Pipeline](https://github.com/jch/html-pipeline) library. Each scraper includes filters specific to itself, one of which is tasked with figuring out the pages' metadata.

The end result is a set of normalized HTML partials and two JSON files (index + offline data). Because the index files are loaded separately by the [app](#app) following the user's preferences, the scraper also creates a JSON manifest file containing information about the documentations currently available on the system (such as their name, version, update date, etc.).

More information about scrapers and filters is available on the [wiki](https://github.com/Thibaut/devdocs/wiki).

## Available Commands

The command-line interface uses [Thor](http://whatisthor.com). To see all commands and options, run `thor list` from the project's root.

```
# Server
rackup              # Start the server (ctrl+c to stop)
rackup --help       # List server options

# Docs
thor docs:list      # List available documentations
thor docs:download  # Download one or more documentations
thor docs:manifest  # Create the manifest file used by the app
thor docs:generate  # Generate/scrape a documentation
thor docs:page      # Generate/scrape a documentation page
thor docs:package   # Package a documentation for use with docs:download
thor docs:clean     # Delete documentation packages

# Console
thor console        # Start a REPL
thor console:docs   # Start a REPL in the "Docs" module
Note: tests can be run quickly from within the console using the "test" command. Run "help test"
for usage instructions.

# Tests
thor test:all       # Run all tests
thor test:docs      # Run "Docs" tests
thor test:app       # Run "App" tests

# Assets
thor assets:compile # Compile assets (not required in development mode)
thor assets:clean   # Clean old assets