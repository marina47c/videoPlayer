import { useEffect, useMemo, useRef } from "react";

import { Subtitles } from "../../utils/types";
import { extractTimeFromTimestamp } from "../../utils/helper.functions";
import "./transcriptItem.styles.css";

type TranscriptItemProps = {
  subtitle: Subtitles;
  currentTime: number;
};

const TranscriptItem = (props: TranscriptItemProps) => {
  const { subtitle, currentTime } = props;

  const activeRef = useRef<HTMLDivElement | null>(null);

  const isActive = useMemo(() => {
    return (
      currentTime >= subtitle.startSeconds && currentTime < subtitle.endSeconds
    );
  }, [currentTime, subtitle.startSeconds, subtitle.endSeconds]);

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [isActive]);

  return (
    <div
      ref={isActive ? activeRef : null}
      className={`transcriptLine ${isActive ? "active" : ""} `}
    >
      <div className="time">{extractTimeFromTimestamp(subtitle.startTime)}</div>
      <div className="text">{subtitle.text}</div>
    </div>
  );
};

export default TranscriptItem;
