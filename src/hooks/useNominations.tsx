import { useAppContext } from "../context/AppContext";
import { IMedia } from "../interfaces/Media.interface";

const useNominations = () => {
  const { state } = useAppContext();

  const isNominated = (media: IMedia) => {
    const nominees = state?.nominations || [];

    return (
      nominees.filter(
        (nominee) =>
          nominee.Title === media?.Title && nominee.Year === media.Year
      ).length > 0
    );
  };

  return {
    isNominated,
  };
};

export default useNominations;
