import "./videoOptions.styles.css";

type VideoOptionsProps = {
  clipsCount: number;
  updateCurrentClipNumber: (clipNumber: number) => void;
};

const VideoOptions = (props: VideoOptionsProps) => {
  const { clipsCount, updateCurrentClipNumber } = props;

  return (
    <div className="buttonsWrapper">
      {Array.from({ length: clipsCount }, (_, index) => (
        <button key={index} onClick={() => updateCurrentClipNumber(index + 1)}>
          Clip {index + 1}
        </button>
      ))}
    </div>
  );
};

export default VideoOptions;
