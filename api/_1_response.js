async function fetchPokemon(pokemon) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    console.log(response.status);
    if (!response.ok) {
      throw new Error(response.status);
    }
  } catch (error) {
    console.error(error.message);
  }
}
fetchPokemon("pikachu");
