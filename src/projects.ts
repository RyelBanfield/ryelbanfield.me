import QLinkPreview from "./images/screenshots/qlink/QLink-3.png";
// import ViewFinderPreview from "./images/screenshots/view-finder/ViewFinder-3.png";
// import StoryAnalyticsPreview from "./images/screenshots/story-analytics/StoryAnalytics-1.png";
import F1RacingNowPreview from "./images/screenshots/f1-racing-now/F1RacingNow-1.png";

import QLinkImage_1 from "./images/screenshots/qlink/QLink-1.png";
import QLinkImage_2 from "./images/screenshots/qlink/QLink-2.png";
import QLinkImage_3 from "./images/screenshots/qlink/QLink-3.png";
import QLinkImage_4 from "./images/screenshots/qlink/QLink-4.png";

// import ViewFinder_1 from "./images/screenshots/view-finder/ViewFinder-1.png";
// import ViewFinder_2 from "./images/screenshots/view-finder/ViewFinder-2.png";
// import ViewFinder_3 from "./images/screenshots/view-finder/ViewFinder-3.png";
// import ViewFinder_4 from "./images/screenshots/view-finder/ViewFinder-4.png";

// import StoryAnalytics_1 from "./images/screenshots/story-analytics/StoryAnalytics-1.png";

import F1RacingNow_1 from "./images/screenshots/f1-racing-now/F1RacingNow-1.png";
import F1RacingNow_2 from "./images/screenshots/f1-racing-now/F1RacingNow-2.png";
import F1RacingNow_3 from "./images/screenshots/f1-racing-now/F1RacingNow-3.png";
import F1RacingNow_4 from "./images/screenshots/f1-racing-now/F1RacingNow-4.png";

export const projects = [
  {
    slug: "qlink",
    name: "QLink",
    shortDescription: "QR Code Generator & Link Host",
    longDescription:
      "A platform for generating QR codes and hosting links. Users can create an account and buy credits via Stripe. With the saved credits, they can generate a custom QR code by placing an image at the center. They can also create their QLink website or link host. By selecting a theme and adding desired links, users can generate their own website complete with a shareable QR code.",
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
  // {
  //   development: true,
  //   slug: "view-finder",
  //   name: "View Finder",
  //   shortDescription: "Event Image Sharing Platform",
  //   longDescription:
  //     "An event image sharing platform allowing photographers to securely and easily upload and share their event photos with attendees in one place. The platform will offer user management, customizable galleries, image downloads, a user-friendly interface, and affordable pricing, making it a convenient and accessible solution for photographers and attendees alike. The platform is powered by Firebase for its backend and is available as both a web app built with Next.js and a React Native app.",
  //   preview: ViewFinderPreview,
  //   stack: [
  //     "TypeScript",
  //     "Next.js",
  //     "TailwindCSS",
  //     "React Native",
  //     "Firebase",
  //     "Vercel",
  //   ],
  //   screenshots: [ViewFinder_1, ViewFinder_2, ViewFinder_3, ViewFinder_4],
  //   githubRepository: "https://github.com/RyelBanfield/viewfinder-web",
  //   liveLink: "https://viewfinder-web.vercel.app",
  // },
  // {
  //   development: true,
  //   slug: "story-analytics",
  //   name: "Story Analytics",
  //   shortDescription: "-",
  //   longDescription: "The scope of this project is being reconsidered.",
  //   preview: StoryAnalyticsPreview,
  //   stack: [
  //     "TypeScript",
  //     "Next.js",
  //     "TailwindCSS",
  //     "Prisma",
  //     "NextAuth",
  //     "Vercel",
  //   ],
  //   screenshots: [StoryAnalytics_1],
  //   githubRepository: "https://github.com/RyelBanfield/story-analytics",
  //   liveLink: "https://storyanalytics.tech",
  // },
  {
    slug: "f1-racing-now",
    name: "F1 Racing Now",
    shortDescription: "Current F1 Season Points & Schedule",
    longDescription:
      "A platform that keeps users up-to-date on the current F1 season. The app allows users to view the date and countdown of the next race, the schedule for the entire year, the points score of the last race, and the total points for each driver and team. The app provides comprehensive and real-time information on the F1 season, making it a must-have for F1 fans.",
    preview: F1RacingNowPreview,
    stack: ["React Native", "Vercel"],
    screenshots: [F1RacingNow_1, F1RacingNow_2, F1RacingNow_3, F1RacingNow_4],
    githubRepository: "https://github.com/RyelBanfield/f1-racing-now",
    liveLink: "https://f1-racing-now.vercel.app",
  },
];
