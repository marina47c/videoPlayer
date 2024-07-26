import { useMemo, useState } from "react";
import { Subtitles } from "../../utils/types";
import "./videoPlayer.styles.css";

type VideoProps = {
  clipUrl?: string;
  updateCurrentTime?: (currentTime: number) => void;
  subtitles: Subtitles[];
};

const VideoPlayer = (props: VideoProps) => {
  const { clipUrl = "", updateCurrentTime, subtitles } = props;
  const [currentTime, setCurrentTime] = useState<number>(0);

  const handleTimeUpdate = (event: React.SyntheticEvent<HTMLVideoElement>) => {
    setCurrentTime(event.currentTarget.currentTime);
    updateCurrentTime && updateCurrentTime(event.currentTarget.currentTime);
  };

  const currentSubtitle = useMemo(() => {
    const subtitle = subtitles.find(
      (subtitle: Subtitles) =>
        currentTime >= subtitle.startSeconds &&
        currentTime < subtitle.endSeconds
    );

    return subtitle?.text;
  }, [currentTime, subtitles]);

  return (
    <div className="videoContainer">
      <video
        key={clipUrl}
        autoPlay
        id="clip"
        controls
        onTimeUpdate={handleTimeUpdate}
      >
        <source src={clipUrl} type="video/mp4" />
      </video>
      {currentSubtitle && (
        <div className="videoSubtitles">{currentSubtitle}</div>
      )}
    </div>
  );
};

export default VideoPlayer;
