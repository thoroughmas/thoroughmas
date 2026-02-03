import Community101 from '@src/assets/img/projects/community101.webp';
import Thoroughmas from '@src/assets/img/projects/tmyoutubeicon_1.jpg';
import ThirtyNineSteps from '@src/assets/img/projects/tm39steps_1.jpg';
import AbsurdityUnit from '@src/assets/img/projects/absurdityunit_1.webp';
import FairPunishment from '@src/assets/img/projects/fairpunishment_1.jpg';
import Fiasco from '@src/assets/img/projects/fiascohero_1.png';
import BTN from '@src/assets/img/projects/tmbtnnews_1.jpg';
import Blog from '@src/assets/img/projects/tmmirrorselfie_1.jpg';
import MutantReviewers from '@src/assets/img/projects/heartbeeps.jpg';
import TheWatsons from '@src/assets/img/projects/thewatsons2.jpg';
import Genius from '@src/assets/img/projects/genius2.jpg';
import PrideandPrejudice from '@src/assets/img/projects/prideandprejudice1.jpg';
import Streetcar from '@src/assets/img/projects/streetcar1.webp';

export interface Project {
	name: string;
	demoLink: string;
	tags?: string[];
	description?: string;
	postLink?: string;
	demoLinkRel?: string;
	image?: ImageMetadata;
	linkType: string;
	date?: string;
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
		tags: ['Video Channel'],
		date: 'Ongoing'
	},
	{
		name: 'Community Rewatching 101',
		description: "I'm a co-host of this lighthearted rewatch podcast for the 2009 sitcom, Community.",
		demoLink: 'https://open.spotify.com/show/7JTEGXQ1R2NzhASvKikxtT',
		demoLinkRel: 'nofollow noopener noreferrer',
		linkType: 'Spotify',
		image: Community101,
		tags: ['Podcast'],
		date: 'Ongoing'
	},
	{
		name: 'Pride and Prejudice',
		description: "I'm performing in this colourful classic around Adelaide, Jan 2026.",
		demoLink: 'https://www.blueskytheatre.com.au/current-production/',
		demoLinkRel: 'nofollow noopener noreferrer',
		linkType: 'Blue Sky Theatre',
		image: PrideandPrejudice,
		tags: ['Theatre'],
		date: 'Jan 2026'
	},
	{
		name: 'A Streetcar Named Desire',
		description: "I'm performing in the Tennessee Williams classic in Port Adelaide.",
		demoLink: 'https://butterflytheatre.net/next-production/',
		demoLinkRel: 'nofollow noopener noreferrer',
		linkType: 'Butterfly Theatre',
		image: Streetcar,
		tags: ['Theatre'],
		date: 'Nov 2025-Jan 2026'
	},
	{
		name: 'Genius',
		description: "I'm performing in this provocative new play in Cairns & Darwin.",
		demoLink: 'https://jute.com.au/genius/',
		demoLinkRel: 'nofollow noopener noreferrer',
		linkType: 'Jute Theatre',
		image: Genius,
		tags: ['Theatre'],
		date: 'Sep 2025-Mar 2026'
	},
	{
		name: 'Behind The News',
		description: "Check out one of my stories for the ABC's children's news show, BTN.",
		demoLink: 'https://www.abc.net.au/btn/high/the-rise-of-misinformation/104504042',
		demoLinkRel: 'nofollow noopener noreferrer',
		linkType: 'ABC',
		image: BTN,
		tags: ['Reporting'],
		date: 'Ongoing'
	},
	{
		name: 'The Watsons',
		description: 'I performed in this chaotic spin on Jane Austen in Adelaide, August 2025.',
		demoLink: 'https://trybooking.com/CXJIN',
		demoLinkRel: 'nofollow noopener noreferrer',
		linkType: 'Theatre Guild',
		image: TheWatsons,
		tags: ['Theatre'],
		date: 'Aug 2025'
	},
	{
		name: 'Mutant Reviewers',
		description: "I'm an irregular (in every sense) writer on this long-standing cult movie site.",
		demoLink: 'https://mutantreviewersmovies.com/category/reviewer/thomas/',
		demoLinkRel: 'nofollow noopener noreferrer',
		linkType: 'Website',
		image: MutantReviewers,
		tags: ['Movie Reviews'],
		date: 'Ongoing'
	},
	{
		name: 'Fair Punishment',
		description: 'I performed in this gothic mask show in Darwin, May 2025.',
		demoLink: 'https://brownsmart.com.au/fair-punishment/',
		demoLinkRel: 'nofollow noopener noreferrer',
		linkType: "Brown's Mart",
		image: FairPunishment,
		tags: ['Theatre'],
		date: 'May 2025'
	},
	{
		name: 'The 39 Steps',
		description: "I performed in this romping hoot at Adelaide's Little Theatre, Oct-Nov 2024.",
		demoLink: 'https://t39s.au/',
		demoLinkRel: 'nofollow noopener noreferrer',
		linkType: 'Theatre Guild',
		image: ThirtyNineSteps,
		tags: ['Theatre'],
		date: 'Oct-Nov 2024'
	},
	{
		name: 'Fiasco',
		description: 'The world is literally ending at a high school concert in this short film I directed in 2023.',
		demoLink: 'https://youtu.be/9F275JVjU4E',
		demoLinkRel: 'nofollow noopener noreferrer',
		linkType: 'YouTube',
		image: Fiasco,
		tags: ['Short Film'],
		date: '2023'
	},
	{
		name: 'Absurdity Unit',
		description: 'A short fictional podcast about patients in a hospital with kinda annoying superpowers.',
		demoLink: 'https://pca.st/3pwltsia',
		demoLinkRel: 'nofollow noopener noreferrer',
		linkType: 'Pocket Casts',
		image: AbsurdityUnit,
		tags: ['Podcast'],
		date: '2020'
	},
	{
		name: 'Blog',
		description: "My personal blog. Yeah, that's right, the one here on this website!",
		demoLink: 'https://thomid.me/posts/',
		linkType: 'Read',
		image: Blog,
		tags: ['Writing'],
		date: 'Ongoing'
	}
];

/**
 * Sorts projects by date with "Ongoing" projects at the top, followed by most recent to oldest.
 * Supports various date formats including:
 * - "Ongoing" (always first)
 * - "2023" (year only)
 * - "Jan 2026" (month year)
 * - "Oct-Nov 2024" (month range year)
 * - "August 2025" (full month name)
 */
function sortProjectsByDate(projects: Project[]): Project[] {
	return [...projects].sort((a, b) => {
		// Handle "Ongoing" cases - they should always be at the top
		if (a.date === 'Ongoing' && b.date !== 'Ongoing') return -1;
		if (a.date !== 'Ongoing' && b.date === 'Ongoing') return 1;
		if (a.date === 'Ongoing' && b.date === 'Ongoing') return 0;

		// Extract year and month information for comparison
		const getYear = (dateStr: string): number => {
			// Extract 4-digit year from date string
			const yearMatch = dateStr.match(/\b(19|20)\d{2}\b/);
			return yearMatch ? parseInt(yearMatch[0]) : 0;
		};

		const getMonthValue = (dateStr: string): number => {
			// Map month names to numbers
			const months: { [key: string]: number } = {
				Jan: 1,
				January: 1,
				Feb: 2,
				February: 2,
				Mar: 3,
				March: 3,
				Apr: 4,
				April: 4,
				May: 5,
				June: 6,
				July: 7,
				August: 8,
				Sep: 9,
				September: 9,
				Oct: 10,
				October: 10,
				Nov: 11,
				November: 11,
				Dec: 12,
				December: 12
			};

			for (const [monthName, value] of Object.entries(months)) {
				if (dateStr.includes(monthName)) return value;
			}
			return 0; // No month found, treat as year-only
		};

		const yearA = getYear(a.date || '');
		const yearB = getYear(b.date || '');
		const monthA = getMonthValue(a.date || '');
		const monthB = getMonthValue(b.date || '');

		// First sort by year (descending)
		if (yearA !== yearB) return yearB - yearA;

		// Then by month (descending)
		return monthB - monthA;
	});
}

export const sortedProjects = sortProjectsByDate(projects);

/**
 * Categorizes projects into Upcoming, Ongoing, and Archive based on current date
 * Automatically sorts each category chronologically
 */
export function categorizeProjectsByDate(projects: Project[]) {
	const now = new Date();
	const currentYear = now.getFullYear();
	const currentMonth = now.getMonth() + 1; // 1-indexed

	const categories = {
		upcoming: [] as Project[],
		ongoing: [] as Project[],
		archive: [] as Project[]
	};

	const getDateValue = (dateStr: string, project: Project): { year: number; month: number; fullDate: Date } => {
		// Find ALL years in the date string (handles ranges like \"Sep 2025-Mar 2026\")
		const yearMatches = dateStr.match(/(19|20)\d{2}/g);
		const years = yearMatches ? yearMatches.map((y) => parseInt(y)) : [currentYear];
		// Use the LATEST year (for ranges, this gives us the end year)
		const year = Math.max(...years);

		// Find ALL months in the date string
		const months: { [key: string]: number } = {
			Jan: 1,
			January: 1,
			Feb: 2,
			February: 2,
			Mar: 3,
			March: 3,
			Apr: 4,
			April: 4,
			May: 5,
			Jun: 6,
			June: 6,
			Jul: 7,
			July: 7,
			Aug: 8,
			August: 8,
			Sep: 9,
			September: 9,
			Oct: 10,
			October: 10,
			Nov: 11,
			November: 11,
			Dec: 12,
			December: 12
		};

		const foundMonths: number[] = [];
		for (const [monthName, value] of Object.entries(months)) {
			if (dateStr.includes(monthName)) {
				foundMonths.push(value);
			}
		}

		// For ranges, use the latest month; if no months found, default to December of the latest year
		const month = foundMonths.length > 0 ? Math.max(...foundMonths) : 12;

		return {
			year,
			month,
			fullDate: new Date(year, month - 1, 1) // First day of the month
		};
	};

	projects.forEach((project) => {
		if (!project.date) {
			// No date - put in archive
			categories.archive.push(project);
			return;
		}

		if (project.date === 'Ongoing') {
			categories.ongoing.push(project);
			return;
		}

		const dateInfo = getDateValue(project.date, project);

		// Compare with current date
		if (dateInfo.year > currentYear || (dateInfo.year === currentYear && dateInfo.month > currentMonth)) {
			// Future date - upcoming
			categories.upcoming.push(project);
		} else {
			// Past or current date - archive
			categories.archive.push(project);
		}
	});

	// Sort each category chronologically
	const sortByDate = (projects: Project[]) => {
		return projects.sort((a, b) => {
			if (a.date === 'Ongoing' && b.date === 'Ongoing') return 0;
			if (a.date === 'Ongoing') return -1;
			if (b.date === 'Ongoing') return 1;

			const dateA = getDateValue(a.date || '', a);
			const dateB = getDateValue(b.date || '', b);

			// Sort upcoming in chronological order (earliest first)
			// Sort archive in reverse chronological order (most recent first)
			if (dateA.year !== dateB.year) return dateB.year - dateA.year;
			return dateB.month - dateA.month;
		});
	};

	// Sort archive in reverse chronological order (most recent first)
	categories.archive = sortByDate(categories.archive);

	// Sort upcoming in chronological order (earliest first)
	categories.upcoming = sortByDate(categories.upcoming).reverse();

	// Ongoing stays as-is (they're already sorted from the original array)

	return categories;
}

export const categorizedProjects = categorizeProjectsByDate(projects);
