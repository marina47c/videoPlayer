import { Subtitles } from "../../utils/types";
import "./transcript.styles.css";

type TranscriptProps = {
  currentTime: number;
  subtitles: Subtitles[];
};

const Transcript = (props: TranscriptProps) => {
  const { currentTime, subtitles } = props;

  const getTime = (startTime: string) => {
    return startTime.split(",")[0];
  };

  const isHighlited = (startSeconds: number, endSeconds: number) => {
    return currentTime >= startSeconds && currentTime < endSeconds;
  };

  return (
    <div className="transcriptWrapper">
      <div className="transcript">
        <h2>Transcript</h2>
        {subtitles.map((subtitle, index) => (
          <div
            key={index}
            className={`transcriptLine ${
              isHighlited(subtitle.startSeconds, subtitle.endSeconds)
                ? "highlited"
                : ""
            } `}
          >
            <div className="time">{getTime(subtitle.startTime)}</div>
            <div className="text">{subtitle.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transcript;
