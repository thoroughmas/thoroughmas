---
featured: true
title: Yamtrack is the best escape from Trakt's enshitification
slug: yamtrack-beats-trakt
description: I'm tired of investing in online platforms that don't just go nowhere — they actively get worse over time.
pubDate: Feb 03 2026
updatedDate:
tags:
  - self_hosting
  - technology
  - films
  - television
coverImage: ./trakt_yamtrack.jpg
listed: true
---
About a year ago I [made a video](https://www.youtube.com/watch?v=ht75bGtniyc) about some dreadful decisions being made by the people behind Trakt, which until then had been my favourite movie and TV show tracking website.

Well it seems like bad decision has followed bad decision and now even more users, alienated by Trakt's latest blunders, are searching for alternative platforms.

---

## Trakt

It is a shame, really. I discovered [Trakt](https://trakt.tv) around 2012, and even [wrote a blog post about it](https://thomid.me/review-of-trakttv/) around that time, describing it as "a magnificent website which I highly recommend to lovers of TV or film." 

For years it was a pretty-good-looking website that made it easy as pie to track the media you watch. And simply by including TV shows as well as movies, it blew competitors like Letterboxd out of the water (TV is good!).

It also had a great community feel. It was big enough to get clever little comments on most episodes of popular shows, but small enough that you'd often see the same commenters and get to know their tastes. There are a handful of other users I genuinely enjoyed following, always interested in their take on the latest episode of Dexter or The Good Wife. Some of my own little one-line reviews were even pretty popular:

![](Pasted%20image%2020260203170205.png)

Trakt always had VIP features behind a paywall, but they were never related to the main tracking or list-making features. VIP was primarily sold as a way to support the site and the community. It was affordable, too. At $15 USD a year, it was early on that I thought, "hey, I like this site, I'm happy to throw in a few bucks!"

Cut to now, my 13 year VIP subscription is ending in a few weeks. Because this is no longer the friendly little tracking website it used to be. 

Basic features like making lists are now partially locked behind a paywall. And VIP subscriptions have blown up to $60 USD a year — for everyone, no grandfathered rates.

Alongside this, the developers seem determined to continually try to fix what ain't broke. 

"Trakt Lite" is the latest version of the site, that's been available in preview for some time. When it was first announced, I was one of many who asked "what is this and why are you making it?", and never received a coherent response. Now, it seems they're gearing up to replace the existing version of Trakt with this "Trakt Lite" monstrosity. And people aren't happy.

Why? Because it's simply worse. It's harder to navigate. It has missing features. It obscures access to simple navigation and tracking. The whole thing looks more like a mobile app than a website. There's only one positive thing I've heard anyone say about it — it runs fast. It's technically a slicker, faster version of the site. But it's no fun to use.

![](Pasted%20image%2020260203201857.png)

These changes go hand in hand with a mobile app redesign that recently came out of the blue and changed things for everyone. The pushback against these changes on Reddit and Trakt's forums over the past few weeks has been loud and clear...

![](Pasted%20image%2020260203204026.png)

![](Screenshot%202026-02-03%20201120.png)

These two posts capture the sentiment of many hundreds of disgruntled users who have been prompted to share their comments in recent weeks.

Possibly most egregious of all, in my opinion, is Trakt's partnership with [Younify](https://www.younify.tv/product/), to facilitate automatic scrobbling from streaming services. A feature that sounds pretty cool and useful on paper but is rumoured to be one of the key reasons they now need to charge $60/year. The collaboration was never openly described or explained to Trakt's users, and it demonstrates a core mission change from friendly community website to expensive commercial platform.

I have nothing against automatic scrobbling features, but if that's what they cost to run for each user, something is rotten. [The best scrobblers use open source code to send basic data from one location to another](https://github.com/FoxxMD/multi-scrobbler). 

All I want is a basic and easy-to-use website that remembers everything I've watched. Ultimately this is a glorified spreadsheet, with pretty pictures. But Trakt now seems to think itself some kind of fancy premium media kiosk.

I'm don't know the numbers, but my guess would be that Trakt is probably actually pretty popular. At some point it may have reached a point of critical mass, where word was positive and signups were bountiful. Perhaps it has more users (and more paying users) right now than ever before. Perhaps many of those users are even pleased with the latest changes. But just because something is mainstream, doesn't mean it's not stupid. And those who have used Trakt for a long time know it's only been getting worse.

Some users will hate these changes, but stick it out with Trakt. And sure, the higher costs and worsening interfaces can be tolerated... but on principle I do not want to be a part of a user base that is so obscenely and consistently ignored by its custodians.

Hence, the search for a new tracker.

There are actually a lot of alternatives out there, like [Simkl](https://simkl.com/) or [Serializd](https://www.serializd.com/) (why are the names all just letter salads nowadays?).

But I've been burned enough. Sure, I could try my luck with another one of these closed source web services, from developers I don't know, with unclear monetisation plans. But I've decided to break free.
## Yamtrack

![](Pasted%20image%2020260203173132.png)

[Yamtrack](https://github.com/FuzzyGrim/Yamtrack) is a self-hosted open source media tracking app that began development just a few years ago.

Yep, you've gotta self-host it. I swear that's not as daunting as it may sound. But I get it, if you've never self-hosted before, it can be hard to get started. Since I've been self-hosting for a couple years now, it's a topic I'm keen to write about much more soon. It's something that should be accessible to everyone, especially in this day and age.

Being free and open source are huge boons here. My data isn't trapped in some service with a tenuous future, it's mine forever. There's no chance of it being sold or misused, I'm the only one with access to it. Each update and change is transparent and community-led. The worst possible outcome for a project like this is that it's abandoned by the developer. Certainly a potential scenario, especially in this case where the project is led by [one sole developer](https://www.fuzzygrim.com/). But the collapse of Yamtrack's development would still leave me in full control of all of my data and plenty of options on where to take it next.

Open source means unlimited potential. [Someone has already forked Yamtrack and started adding features more rapidly](https://github.com/dannyvfilms/Yamtrack), if that's what you're into. (I suspect this fork is a little [vibe-coded](https://en.wikipedia.org/wiki/Vibe_coding), which is fine, but adds slight risk.)

![](Pasted%20image%2020260203173231.png)

And Yamtrack itself is exactly what I want. It's like the Trakt of yore: just the basics without too many frills. It's easy to find, rate and mark as watched any movie or TV show. It's got statistics, lists and a basic calendar. And thanks to a solid Trakt import feature, it was easy to move over all my data.

Yamtrack can even track other media like books and video games. I haven't tried these yet but I don't see why they shouldn't work quite well. Transferring in my book history from StoryGraph is on my to-do list for some point in the future.

Simplicity is underrated, and Yamtrack does what it should without over-complicating things.

Of course, it isn't perfect. It's still so new, how could it be? These are some of the most important features I'm patiently awaiting:

- Rating and commenting on individual episodes of TV Shows
- Easier controls for dropping and re-watching TV Shows
- Wrapped/Year in Review stats

It's easy to imagine (but much less easy to implement, I'm sure) that one day federation implementation could allows all Yamtrack servers to share comments between one another. At that point we essentially return to feature parity with Trakt at its best, the difference being we now have total control of our data.

I do believe the internet can actually be that good. One step at a time!

So from now on I'll be sticking with Yamtrack, and ignoring all the Trakt drama and nonsense. Thanks for 13 good years and good riddance.