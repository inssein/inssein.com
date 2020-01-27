---
title: Free cloud based integrated development environment
date: "2020-01-19"
description: Walk through into setting up AWS Cloud 9.
---

This is part 2 of [reducing the barrier to entry of web development](https://inssein.comw/eb-development-reducing-barriers-to-entry/) where I will be exploring AWS Cloud 9 as a solution for a development environment for [The Odin Project](https://www.theodinproject.com/).

The goal was to setup a development environment accessible via only a web browser, reducing the barrier to entry as low as possible.

## AWS Cloud 9

> AWS Cloud9 is a cloud-based integrated development environment (IDE) that lets you write, run, and debug your code with just a browser. It includes a code editor, debugger, and terminal. Cloud9 comes prepackaged with essential tools for popular programming languages, including JavaScript, Python, PHP, and more, so you don’t need to install files or configure your development machine to start new projects. Since your Cloud9 IDE is cloud-based, you can work on your projects from your office, home, or anywhere using an internet-connected machine. Cloud9 also provides a seamless experience for developing serverless applications enabling you to easily define resources, debug, and switch between local and remote execution of serverless applications. With Cloud9, you can quickly share your development environment with your team, enabling you to pair program and track each other's inputs in real time.

The catch here is that the basic setup will be free for 12 months, and require a credit card, unless you are a student (in which case, take a look at the AWS Educate for Students program).

## Lets Get Started

1. Sign up for an [AWS Account](https://portal.aws.amazon.com/billing/signup#/start). This includes adding a credit card, and verifying your account.
2. Create a new [AWS Cloud9 Environment](https://us-west-2.console.aws.amazon.com/cloud9/home/create).
   - Pro-tip: Ensure a region is selected in the top right before creating an environment. If you are on the west coast of North America, I suggest `us-west-2` (Oregon).
   - The first page, you are just naming the environment.
   - In The second page ("Configure Settings"), ensure the Instancy Type is "t2.micro", and for the platform, I suggest "Ubuntu Server 18.04 LTS" as its more friendly for beginners, especially when searching for help.
   - Review the next page and click on "Create Environment".
3. Once the environment is setup, you now have a fully functioning development environment with a plethora of languages available.

## Continuing The Odin Project

You are now past the pre-requisite section of The Odin Project, without setting up anything locally, or learning about virtual machines, or figuring out how to dual boot.

The first section is on [Command Line Basics](https://www.theodinproject.com/courses/web-development-101/lessons/command-line-basics-web-development-101). This is perfect with Cloud 9 as you now have a full terminal available, which is by default in the bottom pane. You can maximize the terminal for this whole section.

## Hello World

If you are not following The Odin Project, or just want to see a quick example of the capabilities of AWS Cloud 9, lets create a quick Hello World example

- On the right side, there is a "Getting Started" option with the first option being "Create File". Go ahead and click on that.
- In the blank file, paste the content below, and then save the file (File -> Save) and name it `index.html`

```html
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Hello World</title>
  </head>

  <body>
    <h1>Hello World</h1>
  </body>
</html>
```

- Click on the Run button on the top menu to see what this would look like. It will open an inline browser.
- To open this example in a separate browser window, hit the "Pop Out in New Window" button in the top right.

## What's Next

Now you have a fully functioning development environment setup using Ubuntu Server 18.04, that is accessible from any computer in the world via just a browser. You can use it to complete The Odin Project, or you can follow any tutorial online that expects you to have linux installed. Instead of typing in the commands in a terminal installed on your machine, you can type it in the browser.

If you have access to a computer with admin privileges, I explore how we can use [Visual Studio Code](https://code.visualstudio.com/) to connect to this same environment in my [next blog post](https://inssein.com/aws-cloud9-vs-code-remote/).
