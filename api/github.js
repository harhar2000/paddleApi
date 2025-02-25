async function fetchGithub() {
  try {
    const response = await fetch("https://api.github.com/repos/evanw/esbuild");
    console.log(response.status);
    if (!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();
    console.log(data.forks_count);
  } catch (error) {
    console.error(error.message);
  }
}

fetchGithub();
