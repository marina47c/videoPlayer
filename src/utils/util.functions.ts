import srtParser2 from "srt-parser-2";

// import Clip1 from "../../public/videos/video_1/clip.mp4";
// import Clip2 from "../../public/videos/video_2/clip.mp4";
import { Subtitles } from "./types";

export const getSubtitles = async (clipNumber: number): Promise<string> => {
  const response = await fetch(
    `/public/videos/video_${clipNumber}/captions.srt`
  );
  const text: Promise<string> = response.text();
  return text;
};

export const parseSrtText = (srtText: string): Subtitles[] => {
  const parser = new srtParser2();
  const subtitles: Subtitles[] = parser.fromSrt(srtText);

  return subtitles;
};

export const getClips = (clipNumber: number) => {
  return `/videos/video_${clipNumber}/clip.mp4`;
};
