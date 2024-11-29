export async function fetchRepo(repoName) {
    const res = await fetch(`https://api/${repoName}`);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  }
  