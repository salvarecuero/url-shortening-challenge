const getShortenLink = async (originalLink) => {
  const createAndGetLink = await fetch(
    `https://api.shrtco.de/v2/shorten?url=${originalLink}`
  );

  const data = await createAndGetLink.json();

  return data;
};

export default getShortenLink;
