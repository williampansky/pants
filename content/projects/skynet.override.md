---
draft: true
featured: false
keywords: ["sabre corp", "time tracking", "app"]
Lastmod: 2019-04-15
publishDate: 2018-03-18
weight: 0
client: {
    avatar: "/images/resume.sabre.jpg",
    caption: "Styles and scripts powered by the User JavaScript & CSS Chrome extension to reconfigure the front-end of Skynet.",
    name: "Sabre Corporation",
    description: "Styles and scripts powered by the User JavaScript & CSS Chrome extension to reconfigure the front-end of Skynet.",
    location: "Dallas, TX",
    url: "https://chrome.google.com/webstore/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld?hl=en"
}
project: {
    category: "Personal project",
    employer: "William Pansky",
    image: "/projects/skynet.override/override-screen-tasks.jpg",
    lead: "Styles and scripts powered by the User JavaScript & CSS Chrome extension to reconfigure the front-end of Skynet.",
    name: "skynet.override",
    summary: "Styles and scripts powered by the User JavaScript & CSS Chrome extension to reconfigure the front-end of an internal task app ...",
    tag: "User JavaScript & CSS",
    thumbnail: "/projects/skynet.override/_thumb.jpg",
    title: "Upgrading a legacy app; without touching the source code",
    url: "https://github.com/williampansky/skynet.override"
}
---

> "Assuming direct control."

## Notice

The code found in this project does not, in any way, conflict with the original SVN repository. All JavaScript interaction is limited to front-end DOM manipulation; meaning it's tweaking the presentational aspect in a way anyone with Chrome devtools can do. It does not compromise or tap into the server, database, or other core aspects of Skynet. It's simply a visual _(aesthetic)_ upgrade.

## Upgrades

Skynet.Override strives to provide a modern interface experience for the outdated front-end with help from the UIkit framework.

### Login
![Login](/projects/skynet.override/login.jpg)
![Login Override](/projects/skynet.override/login.override.jpg)

### Tasks List
![Tasks](/projects/skynet.override/tasks.jpg)
![Tasks Override](/projects/skynet.override/tasks.override.jpg)

### Resource Links
![Resources](/projects/skynet.override/resources.jpg)
![Resources Override](/projects/skynet.override/resources.override.jpg)

### Account Page
![Account](/projects/skynet.override/account.jpg)
![Account Override](/projects/skynet.override/account.override.jpg)

### Single-task
![Single Task](/projects/skynet.override/single.jpg)
![Single Task Override](/projects/skynet.override/single.override.jpg)

### Task Comments
![Task Comments](/projects/skynet.override/comments.jpg)
![Task Comments Override](/projects/skynet.override/comments.override.jpg)

## Installing / Getting started

Quick and easy setup.

1. Install the User JavaScript & CSS Chrome extension.
2. Download the latest release, unzip it, and find the latest JSON file inside the /dist directory.
3. Open the extension's options view and navigate to the Settings > Backup section.
4. Click the Upload and apply button, navigate to your downloaded JSON file and upload it (confirm the pop-up alert). JSON Upload
5. Profit!

You should now be able to navigate through a reinvigorated and mordern Skynet.

## Development

### Built With
99% of the codebase is built with vanilla JavaScript (ES6). There's one or two @TODO items that need refactoring – (as Skynet already uses jQuery v1.3).

### Contributing
If you want to help out, feel free to edit the codebase (either via the /src directory copies or by exporting a JSON backup) and submit a pull request.

## Versioning
- v0.1.7 — July 6, 2018
    - `ENHANCEMENT` Formatted task edit views.
    - `ENHANCEMENT` Formatted task manager view.
    - `ENHANCEMENT` Formatted clients view.
    - `MAINTENANCE` Lots of clean-up due to core code edits.
- v0.1.5/6 — March 11, 2018
    - `MAINTENANCE` General refactoring and clean-up.
- v0.1.4 — February 22, 2018
    - `ENHANCEMENT` Added pulse animation to "updated" label types.
- v0.1.3 — February 21, 2018
    - `ENHANCEMENT` Added back labels to .live-results.
- v0.1.2 — February 2, 2018
    - `FEATURE` Finished new resource modal implementation. New resources can now be added to the JSON array defined inside of @name resourcesList.
    - `BUG FIX` General fixes.
- v0.1.1 — January 31, 2018
    - `BUG FIX` taskProgress call on js:315;
- v0.1.0 — January 31, 2018
    - Initial beta release
    - Developed & tested in Chrome v63.0.3239.132 (Official Build) (64-bit).
    - Bugs may be reported to the issues tracker.

---

Copyright © 2018 Sabre Hospitality Solutions