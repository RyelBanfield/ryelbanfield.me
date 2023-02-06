import QLinkPreview from "./images/screenshots/qlink/QLink-3.png";
import ViewFinderPreview from "./images/screenshots/view-finder/ViewFinder-3.png";
import StoryAnalyticsPreview from "./images/screenshots/story-analytics/StoryAnalytics-1.png";
import F1RacingNowPreview from "./images/screenshots/f1-racing-now/F1RacingNow-1.png";

import QLinkImage_1 from "./images/screenshots/qlink/QLink-1.png";
import QLinkImage_2 from "./images/screenshots/qlink/QLink-2.png";
import QLinkImage_3 from "./images/screenshots/qlink/QLink-3.png";
import QLinkImage_4 from "./images/screenshots/qlink/QLink-4.png";

import ViewFinder_1 from "./images/screenshots/view-finder/ViewFinder-1.png";
import ViewFinder_2 from "./images/screenshots/view-finder/ViewFinder-2.png";
import ViewFinder_3 from "./images/screenshots/view-finder/ViewFinder-3.png";
import ViewFinder_4 from "./images/screenshots/view-finder/ViewFinder-4.png";

import StoryAnalytics_1 from "./images/screenshots/story-analytics/StoryAnalytics-1.png";

import F1RacingNow_1 from "./images/screenshots/f1-racing-now/F1RacingNow-1.png";
import F1RacingNow_2 from "./images/screenshots/f1-racing-now/F1RacingNow-2.png";
import F1RacingNow_3 from "./images/screenshots/f1-racing-now/F1RacingNow-3.png";
import F1RacingNow_4 from "./images/screenshots/f1-racing-now/F1RacingNow-4.png";

export const projects = [
  {
    development: true,
    slug: "qlink",
    name: "QLink",
    shortDescription: "QR Code Generator & Link Host",
    longDescription:
      "A QR Code Generator & Link Host. Users able to create an account and purchase credits through Stripe. Once their credits have been saved to their account, the user is then able to use that credit to generate a QR Code with an image of their choice at the center. Users are also able to create their own QLink Website or Link Host. By selecting a theme and then entering the links you want to be hosted, users can generate their own website which comes with its own QR Code to allow it to be shared easily.",
    preview: QLinkPreview,
    stack: [
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "Prisma",
      "NextAuth",
      "Stripe",
      "Vercel",
    ],
    screenshots: [QLinkImage_1, QLinkImage_2, QLinkImage_3, QLinkImage_4],
    githubRepository: "https://github.com/RyelBanfield/qlink",
    liveLink: "https://qlink.tech",
  },
  {
    development: true,
    slug: "view-finder",
    name: "View Finder",
    shortDescription: "Event Image Sharing Platform",
    longDescription: "",
    preview: ViewFinderPreview,
    stack: [
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "React Native",
      "Firebase",
      "Vercel",
    ],
    screenshots: [ViewFinder_1, ViewFinder_2, ViewFinder_3, ViewFinder_4],
    githubRepository: "https://github.com/RyelBanfield/viewfinder-web",
    liveLink: "https://viewfinder-web.vercel.app",
  },
  {
    development: true,
    slug: "story-analytics",
    name: "Story Analytics",
    shortDescription: "-",
    longDescription: "",
    preview: StoryAnalyticsPreview,
    stack: [
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "Prisma",
      "NextAuth",
      "Vercel",
    ],
    screenshots: [StoryAnalytics_1],
    githubRepository: "https://github.com/RyelBanfield/story-analytics",
    liveLink: "https://storyanalytics.tech",
  },
  {
    development: false,
    slug: "f1-racing-now",
    name: "F1 Racing Now",
    shortDescription: "Current F1 Season Points & Schedule",
    longDescription: "",
    preview: F1RacingNowPreview,
    stack: ["React Native", "Vercel"],
    screenshots: [F1RacingNow_1, F1RacingNow_2, F1RacingNow_3, F1RacingNow_4],
    githubRepository: "https://github.com/RyelBanfield/f1-racing-now",
    liveLink: "https://f1-racing-now.vercel.app",
  },
];
