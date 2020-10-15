---
date: "2019-09-17"
title: "Building MachineServant Part 1"
author: "Evan Stern"
featuredImage: ./gatsby.png
tags: ["MachineServant", "Web Development", "GatsbyJS"]
published: true
---

# MachineServant is built using GatsbyJS and hosted on Netlify

There are numerous blog posts explaining how to build your website and host
it using Gatsby and Netlify. I won't be diving into the details too heavily
but I will provide a few resources at the end of the post. Future posts may
get into more of the technical details and challenges.

Mostly, I want to ramble about some of the design decisions, tools, and
general thoughts I've had after using GatsbyJS for a while.

## What is GatsbyJS?

If you're not familiar with it, [GatsbyJS](https://gatsbyjs.org) is a
framework built on top of React that generates static web sites from your
React components.

All your site information is served up to your React components via GraphQL
queries and a the GatsbyJS build process uses your React components combined
with those queries to generate static web pages based on your code.

The result is an exceedingly fast web site with an outstandingly simple and
intuitive build process.

## GatsbyJS is awesome

I've been wanting to use GatsbyJS for quite some time. Occasionally I am
asked to build static web sites for marketing or personal use and until
Gatsby the go-to for this kind of work has always been Wordpress. I'm not a
Wordpress guy. I've done it in the past and pretty much hated it.

I already know React though. And I was intrigued by a static site generator
built on top of a framework that I enjoy.

I also wanted to learn a bit more about GraphQL. I have not had much of a
chance to really dig into it before. So far my experience has been positive.

## Typescript

I opted to create this site using Typescript.

That decision required some research and a bit of trial and error. There are
plugins for Typescript in Gatsby but there is some configuration required and
it isn't perfect.

One of the things I noticed is that because GatsbyJS is a static site
generator, the code you write is passed through to a transpiler which negates
the ability for you to do "build time" type checks on your code.

Whereas when using "Create React App" you'd get build time errors, in
GatsbyJS, you simply don't.

You can get around this by writing scripts to do the checking for you on
demand and you can set your editor up to surface errors for you but it's not
exactly the same as having actual build errors preventing you from doing
stupid stuff in Typescript.

## More to come

I'll update this topic with a bit more detail in my next post.
