import useAudio from "./useAudio";

const useSounds = () => {
  let { toggle: success } = useAudio("/audio/success.m4a");
  let { toggle: failed } = useAudio("/audio/failed.m4a");

  return { success, failed };
};

export default useSounds;
