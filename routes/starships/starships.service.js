export const returnStarships = async (axios) => {
  try {
    const luke = await axios.get('people?name=Luke Skywalker');
    const {
      data: { results },
    } = luke;

    const starships = results[0]?.starships;

    const starshipPromises = starships.map((starship) => axios.get(starship));

    const starshipData = await Promise.all(starshipPromises);

    return starshipData.map((starship) => starship?.data);
  } catch (e) {
    console.error('Error fetching Luke Skywalker starship data', e);
  }
};
