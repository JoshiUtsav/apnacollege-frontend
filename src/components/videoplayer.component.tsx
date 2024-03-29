const VideoPlayer = () => {
  return (
    <video
      id="player"
      className={`w-9/12 flex text-stone-50 h-screen ml-auto justify-center`}
      controls
    ></video>
  );
};

export default VideoPlayer;
