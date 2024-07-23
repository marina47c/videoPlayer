import Clip1 from "../../public/videos/video_1/clip.mp4";
import Clip2 from "../../public/videos/video_2/clip.mp4";
import { ClipsType } from "../utils/types";

const useClips = () => {
  console.log("use clips rerender");

  const clips: ClipsType = {
    1: Clip1,
    2: Clip2,
  };

  console.info("hook");
  console.info(clips);
  return clips;
};

export default useClips;
