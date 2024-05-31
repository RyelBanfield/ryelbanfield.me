import imageUrlBuilder from "@sanity/image-url";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { client } from "../../sanity/lib/client";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const urlFor = (source: string) => {
  const builder = imageUrlBuilder(client);
  return builder.image(source);
};

type ChessData = {
  avatar: string;
  player_id: number;
  "@id": string;
  url: string;
  username: string;
  followers: number;
  country: string;
  last_online: number;
  joined: number;
  status: string;
  is_streamer: boolean;
  verified: boolean;
  league: string;
  streaming_platforms: [];
};

type ChessStats = {
  chess_daily: {
    last: {
      rating: number;
      date: number;
      rd: number;
    };
    best: {
      rating: number;
      date: number;
      game: string;
    };
    record: {
      win: number;
      loss: number;
      draw: number;
      time_per_move: number;
      timeout_percent: number;
    };
  };
  chess_rapid: {
    last: {
      rating: number;
      date: number;
      rd: number;
    };
    best: {
      rating: number;
      date: number;
      game: string;
    };
    record: {
      win: number;
      loss: number;
      draw: number;
    };
  };
  chess_bullet: {
    last: {
      rating: number;
      date: number;
      rd: number;
    };
    best: {
      rating: number;
      date: number;
      game: string;
    };
    record: {
      win: number;
      loss: number;
      draw: number;
    };
  };
  chess_blitz: {
    last: {
      rating: number;
      date: number;
      rd: number;
    };
    best: {
      rating: number;
      date: number;
      game: string;
    };
    record: {
      win: number;
      loss: number;
      draw: number;
    };
  };
  tactics: {
    highest: {
      rating: number;
      date: number;
    };
    lowest: {
      rating: number;
      date: number;
    };
  };
  puzzle_rush: {};
};

export const getMyData = async () => {
  const res = await fetch("https://api.chess.com/pub/player/ryel369", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch player data.");
  }

  return res.json() as unknown as ChessData;
};

export const getMyStats = async () => {
  const res = await fetch("https://api.chess.com/pub/player/ryel369/stats", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch player stats.");
  }

  return res.json() as unknown as ChessStats;
};
