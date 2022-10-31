export const getTotalPopulation = async (axios) => {
  try {
    let next = 'planets';
    let planets = [];
    while (next !== null) {
      const data = await axios.get(next);
      planets.push(...data?.data?.results);
      next = data?.data?.next;
    }
    return planets
      ?.filter((planet) => planet?.population && planet?.population !== 'unknown')
      ?.reduce((a, b) => parseInt(a?.population || '0') + parseInt(b?.population || '0'), '0');
  } catch (e) {
    console.error('Unable to get total population of all planets in the Galaxy', e);
  }
};
