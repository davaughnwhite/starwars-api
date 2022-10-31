export const getClassifications = async (axios) => {
  try {
    const firstEpisode = await axios.get('films/1/');
    const {
      data: { species },
    } = firstEpisode;

    const speciesPromises = species.map((specie) => axios.get(specie));

    const speciesData = await Promise.all(speciesPromises);

    return speciesData.map((specie) => specie?.data?.classification);
  } catch (e) {
    console.error('Unable to get classification of species in first episode', e);
  }
};
