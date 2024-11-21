import { getRepositoryDetails } from "../../utils";
import Community101 from '@src/assets/img/projects/community101.webp';
import Thoroughmas from '@src/assets/img/projects/tmyoutubeicon_1.jpg';
import ThirtyNineSteps from '@src/assets/img/tm39Steps_1.jpg';

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
    tags: ['Video']
  },
  {
    name: 'Community Rewatching 101',
    description: 'A podcast covering a lighthearted rewatch of the 2009 sitcom, Community.',
    demoLink: 'https://open.spotify.com/show/7JTEGXQ1R2NzhASvKikxtT',
    demoLinkRel: 'nofollow noopener noreferrer',
    linkType: 'Spotify',
    image: Community101,
    tags: ['Podcast', 'Television']
  },
  {
    name: 'The 39 Steps',
    description: "I'm performing in this play at Adelaide's Little Theatre, Oct-Nov 2024.",
    demoLink: 'https://t39s.au/',
    demoLinkRel: 'nofollow noopener noreferrer',
    linkType: 'Tickets',
    image: ThirtyNineSteps,
    tags: ['Theatre']
  },
]
