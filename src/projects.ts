import QLinkScreenshot from "./images/screenshots/qlink/QLink-3.png";
import ViewFinderScreenshot from "./images/screenshots/view-finder/ViewFinder-3.png";
import StoryAnalyticsScreenshot from "./images/screenshots/story-analytics/StoryAnalytics-1.png";
import F1RacingNowScreenShot from "./images/screenshots/f1-racing-now/F1RacingNow-1.png";

export const projects = [
  {
    development: true,
    slug: "qlink",
    name: "QLink",
    shortDescription: "QR Code Generator & Link Host",
    longDescription:
      "A QR Code Generator & Link Host. Users able to create an account and purchase credits through Stripe. Once their credits have been saved to their account, the user is then able to use that credit to generate a QR Code with an image of their choice at the center. Users are also able to create their own QLink Website or Link Host. By selecting a theme and then entering the links you want to be hosted, users can generate their own website which comes with its own QR Code to allow it to be shared easily.",
    preview: QLinkScreenshot,
    stack: [
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "Prisma",
      "NextAuth",
      "Stripe",
      "Vercel",
    ],
    githubRepository: "https://github.com/RyelBanfield/qlink",
    liveLink: "https://qlink.tech",
  },
  {
    development: true,
    slug: "view-finder",
    name: "View Finder",
    shortDescription: "Event Image Sharing Platform",
    longDescription: "",
    preview: ViewFinderScreenshot,
    stack: [
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "React Native",
      "Firebase",
      "Vercel",
    ],
    githubRepository: "https://github.com/RyelBanfield/viewfinder-web",
    liveLink: "https://viewfinder-web.vercel.app",
  },
  {
    development: true,
    slug: "story-analytics",
    name: "Story Analytics",
    shortDescription: "-",
    longDescription: "",
    preview: StoryAnalyticsScreenshot,
    stack: [
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "Prisma",
      "NextAuth",
      "Vercel",
    ],
    githubRepository: "https://github.com/RyelBanfield/story-analytics",
    liveLink: "https://storyanalytics.tech",
  },
  {
    development: false,
    slug: "f1-racing-now",
    name: "F1 Racing Now",
    shortDescription: "Current F1 Season Points & Schedule",
    longDescription: "",
    preview: F1RacingNowScreenShot,
    stack: ["React Native", "Vercel"],
    githubRepository: "https://github.com/RyelBanfield/f1-racing-now",
    liveLink: "https://f1-racing-now.vercel.app",
  },
];
