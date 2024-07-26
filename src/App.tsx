import { useEffect, useState } from "react";

import VideoOptions from "./components/videoOptions/videoOptions.component";
import VideoPlayer from "./components/videoPlayer/videoPlayer.component";
import Transcript from "./components/transcript/transcript.component";
import { Subtitles } from "./utils/types";
import { getSubtitles, parseSrtText, getClips } from "./utils/util.functions";
import "./App.css";

function App() {
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [subtitles, setSubtitles] = useState<Subtitles[]>([]);
  const [clipUrl, setClipUrl] = useState<string>("");
  const [currentClipNumber, setCurrentClipNumber] = useState<number>(1);

  useEffect(() => {
    const clip = getClips(currentClipNumber);
    setClipUrl(clip);
  }, [currentClipNumber]);

  useEffect(() => {
    const fetchSubtitles = async () => {
      const text = await getSubtitles(currentClipNumber);
      const subtitleResult: Subtitles[] = parseSrtText(text);
      setSubtitles(subtitleResult);
    };

    fetchSubtitles();
  }, [currentClipNumber]);

  return (
    <div className="app">
      <div className="video">
        <VideoPlayer
          clipUrl={clipUrl}
          updateCurrentTime={setCurrentTime}
          subtitles={subtitles}
        ></VideoPlayer>
        <VideoOptions
          clipsCount={2}
          updateCurrentClipNumber={setCurrentClipNumber}
        ></VideoOptions>
      </div>
      <Transcript currentTime={currentTime} subtitles={subtitles}></Transcript>
    </div>
  );
}

export default App;
