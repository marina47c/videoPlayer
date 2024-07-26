import { Subtitles } from "../../utils/types";
import "./transcript.styles.css";
import TranscriptItem from "./transcriptItem.component";

type TranscriptProps = {
  currentTime: number;
  subtitles: Subtitles[];
};

const Transcript = (props: TranscriptProps) => {
  const { currentTime, subtitles } = props;

  return (
    <div className="transcriptWrapper">
      <div className="transcript">
        <h2>Transcript</h2>
        {subtitles.map((subtitle, index) => (
          <TranscriptItem
            key={index}
            subtitle={subtitle}
            currentTime={currentTime}
          />
        ))}
      </div>
    </div>
  );
};

export default Transcript;
