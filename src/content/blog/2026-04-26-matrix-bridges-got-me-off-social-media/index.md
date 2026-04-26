---
featured: true
title: Matrix bridges mean I don't have to use social media anymore
slug: matrix-bridges-got-me-off-social-media
description: How Matrix got me off the social media I didn't want to be on
pubDate: April 26 2026
tags:
  - technology
  - self_hosting
  - internet
coverImage: ./matrix_beeper.jpg
listed: true
---
Setting up my own Matrix server came with the unexpected benefit of distancing me from all the worst social media platforms.

It was only afterwards that I realised there are paths to the same benefits with almost none of the hassle.

---
# Social Media

None of us really want to be on social media, do we? I mean, some platforms are better than others, but at this point we're pretty familiar with their capacity to drain the life force from our very souls.

Like many of you, I try to use them only when and as much as I need to. Over the years I've done a pretty good job of deleting apps from my phone and using [browser extensions](https://addons.mozilla.org/en-US/firefox/addon/news-feed-eradicator/) to limit my exposure to annoying social feeds, but it's hard to completely break that reliance on social media platforms. Particularly if you've been on some of them for 15 years.

![](Pasted%20image%2020260420174612.png)

The biggest thing that has made removing Instagram or Facebook Messenger from my phone totally unfeasible is that all of these apps are also direct message services. And I don't know about your generation, but all the millennials I know use these far and above SMS text messages.

I mean, I can't just tell everyone that I'm only using Signal now, and that's the only place I can be contacted. Well, I could. But I don't think that would leave me with many friends.

So the only way to become less reliant on these apps was to effectively funnel direct messages from all these disparate apps into another place that was more under my control.

Which is exactly what I did with Matrix.

# Matrix

Matrix is many things. It's an advanced open source messaging protocol. It's (relatively) popular. It's self-hostable. It's often considered to be one of the few worthwhile alternatives to Discord. And it's pretty bloody cool.

Matrix is one of those *online things* that can appear pretty daunting from afar. For years I'd heard about Matrix and what people were doing with it, but always felt like the whole thing was outside my reach.

But after [Pangolin](https://github.com/fosrl/pangolin) forced me to get comfortable with basic VPS management, I thought... how hard can it be?

And uh, look, I won't sugar-coat it... it's a bit hard.

It doesn't have to be. There are [Matrix homeservers](https://servers.joinmatrix.org/) that you can join and get started immediately, no self-hosting necessary. There are [platforms](https://apps.yunohost.org/app/synapse) that make self-hosting your own Matrix instance as streamlined as possible. There are [versions of Matrix](https://matrix-construct.github.io/tuwunel/) that are somewhat easier to setup and maintain.

But I went fully in: a full [Matrix Synapse](https://github.com/element-hq/synapse) instance. Partly because I'm silly, and partly because I wanted to ensure I was able to play with all the bells and whistles Matrix has to offer.

I lost days of my life to this thing. It's a pretty clean Docker Compose setup but all the variables and the *production.yaml* settings are quite fiddly. Admittedly, I did make the whole process harder for myself by making everything encrypted. You don't really have to do that.

Once I had it all up and running though... oh boy. Look on my works and despair etc (it's pretty great, although perhaps not as impressive as I initially thought).

I'm using the [Mautrix bridges](https://github.com/mautrix) for Whatsapp, Meta (Facebook Messenger and Instagram), Signal and Google Messages. There are also a bunch of bridges for the likes of Telegram and Discord, which I may try at some point. There have been [some reports](https://www.reddit.com/r/beeper/comments/1rx56xm/well_goodbye_beeper/) of Discord accounts [getting deactivated](https://www.reddit.com/r/beeper/comments/1rvduba/im_so_done_with_beeper_unless_something_changes/) when they use a bridge, but hey, these days if any platform wants to ban me just because I'm using it the way I want, I don't care.

And effectively, these bridges make messages from all those other services appear as if they are any other message in Matrix. I can see all the chat history, I can send and receive messages and media files. It's really so flexible. This is digital minimalism at its finest. Admittedly kinda complicated and cutting-edge in the background, but logical and effortless in my everyday life.

I've been using this setup for nearly 6 months now, and I can no longer imagine life without it. One glance at my phone or my computer and I know that I'm across all my incoming messages from every app. I know that I can respond to any message from any of my devices. I can start a conversation on my desktop and continue it on my phone. And it's always easy as pie to see a list of the several people I haven't responded to in weeks and really should (sorry).

What's wild is that most of the time I don't even know (or care!) what apps other people are using to message me. It could literally be any of these and it makes no practical difference to me.

![](Pasted%20image%2020260426174404.png)

It really did surprise me that this Matrix implementation works *beautifully*. I've used message aggregator apps and services in the past which were all useless.

Well, it's not entirely perfect. Some of the bridges (particularly Meta and Google Messages) get logged out from time to time. But honestly, far less frequently than I expected. I consider a quick reconnect once every month or two to be totally acceptable maintenance.

And thanks to this setup, I've been able to completely remove Facebook Messenger and Instagram from my phone. I have to keep Whatsapp and Signal running, because those messages have to be delivered to the phone before the Matrix bridges can pick them up. But I've turned off all notifications for those apps and Google Messages, so Element X (my current Matrix Android client of choice) essentially acts as my one and only messaging app.

So it's all great. What a win, right?

Well, it turns out I didn't really need to do any of that.

# Beeper

[Beeper](https://www.beeper.com/) has been around for several years now, but it was only after agonising through my custom Matrix setup that I learned it's based on exactly the same technology.

I had assumed Beeper would be no different to the many terrible universal messaging apps I'd tried in the past... but since it uses the Matrix protocol and Mautrix bridges, it essentially wraps up my entire complicated setup into a much more accessible package. In fact, Beeper is actually a primary sponsor of the Mautrix project, and therefore the reason my setup works as well as it does!

I've dabbled with the Beeper app, and it's really easy to use. No Matrix configuration, just create an account and you can dive straight into all the message bridges.

It's also cool that Beeper has options for cloud-based and device-based bridges. In theory this lets you completely remove WhatsApp (for example) from your phone. How well it works though, I haven't investigated.

It's also worth noting that Beeper is a private US-based company, so if you use their service you've got to have a bit of trust there.

![](Pasted%20image%2020260426173005%20-%20Edited.png)

Honestly, if I had discovered Beeper before experimenting with Matrix, I likely would have been satisfied with that. But at this point I'm definitely sticking with the Matrix setup. Not only because I'm a big sunk cost fallacy guy, but also because Matrix does give me a lot of ownership, control and flexibility that any pre-packaged software will struggle to match.

It's also nice to have all of Matrix's features that go beyond just the Mautrix bridges that Beeper offers: flexible self-hosted secure chat, compatibility with every Matrix client on desktop and mobile, a solid foundation for all future developments.

Right now though, I'm just so glad I don't have to use Meta's apps on my phone. Obviously, long-term we want to abandon many of these abominable social media platforms entirely... but I consider this to be a big step towards relying on them less, and progress is progress!