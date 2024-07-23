type useSubtitlesType = {
  currentClipNumber: number;
};

const useSubtitles = (props: useSubtitlesType) => {
  const { currentClipNumber } = props;

  console.info("useSubtitles render");

  return "subtitles" + { currentClipNumber };
};

export default useSubtitles;
