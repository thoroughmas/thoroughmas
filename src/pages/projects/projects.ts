import { getRepositoryDetails } from "../../utils";
import Community101 from '@src/assets/img/projects/community101.webp';
import Thoroughmas from '@src/assets/img/projects/tmyoutubeicon_1.jpg';
import ThirtyNineSteps from '@src/assets/img/projects/tm39steps_1.jpg';
import AbsurdityUnit from '@src/assets/img/projects/absurdityunit_1.webp';
import FairPunishment from '@src/assets/img/projects/fairpunishment_1.jpg';
import Fiasco from '@src/assets/img/projects/fiascohero_1.png';
import BTN from '@src/assets/img/projects/tmbtnnews_1.jpg';
import Blog from '@src/assets/img/projects/tmmirrorselfie_1.jpg';
import MutantReviewers from '@src/assets/img/projects/heartbeeps.jpg';

export interface Project {
  name: string;
  demoLink: string;
  tags?: string[],
  description?: string;
  postLink?: string;
  demoLinkRel?: string;
  image?: ImageMetadata;
  linkType: string;
  [key: string]: any;
}

export const projects: Project[] = [
  {
    name: 'Thoroughmas',
    description: 'My personal YouTube Channel, covering all manner of technology and entertainment.',
    demoLink: 'https://www.youtube.com/@Thoroughmas',
    demoLinkRel: 'nofollow noopener noreferrer',
    linkType: 'YouTube',
    image: Thoroughmas,
    tags: ['Videos']
  },
  {
    name: 'Community Rewatching 101',
    description: "I'm a co-host of this lighthearted rewatch podcast for the 2009 sitcom, Community.",
    demoLink: 'https://open.spotify.com/show/7JTEGXQ1R2NzhASvKikxtT',
    demoLinkRel: 'nofollow noopener noreferrer',
    linkType: 'Spotify',
    image: Community101,
    tags: ['Podcast']
  },
  {
    name: 'Fair Punishment',
    description: "I'll be performing in this gothic mask show in Darwin, May 2025.",
    demoLink: 'https://brownsmart.com.au/fair-punishment/',
    demoLinkRel: 'nofollow noopener noreferrer',
    linkType: "Brown's Mart",
    image: FairPunishment,
    tags: ['Theatre']
  },
  {
    name: 'Behind The News',
    description: "Check out my latest children's news story for the ABC's eternally fantastic BTN.",
    demoLink: 'https://www.abc.net.au/btn/high/the-rise-of-misinformation/104504042',
    demoLinkRel: 'nofollow noopener noreferrer',
    linkType: 'ABC',
    image: BTN,
    tags: ['Video', 'News']
  },
  {
    name: 'Mutant Reviewers',
    description: "I'm an irregular (in every sense) writer on this long-standing cult movie site.",
    demoLink: 'https://mutantreviewersmovies.com/category/reviewer/thomas/',
    demoLinkRel: 'nofollow noopener noreferrer',
    linkType: 'Website',
    image: MutantReviewers,
    tags: ['Articles']
  },
  {
    name: 'The 39 Steps',
    description: "I performed in this romping hoot at Adelaide's Little Theatre, Oct-Nov 2024.",
    demoLink: 'https://t39s.au/',
    demoLinkRel: 'nofollow noopener noreferrer',
    linkType: 'Theatre Guild',
    image: ThirtyNineSteps,
    tags: ['Theatre']
  },
  {
    name: 'Fiasco',
    description: "The world is literally ending at a high school concert in this short film I directed in 2023.",
    demoLink: 'https://youtu.be/9F275JVjU4E',
    demoLinkRel: 'nofollow noopener noreferrer',
    linkType: 'YouTube',
    image: Fiasco,
    tags: ['Video', 'Short Film']
  },
  {
    name: 'Absurdity Unit',
    description: "A short fictional podcast about patients in a hospital with kinda annoying superpowers.",
    demoLink: 'https://pca.st/3pwltsia',
    demoLinkRel: 'nofollow noopener noreferrer',
    linkType: 'Pocket Casts',
    image: AbsurdityUnit,
    tags: ['Podcast', 'Storytelling']
  },
  {
    name: 'Blog',
    description: "My personal blog. Yeah, that's right, the one here on this website!",
    demoLink: 'https://thomid.me/posts/',
    linkType: 'Read',
    image: Blog,
    tags: ['Writing', 'Learning']
  },
]
