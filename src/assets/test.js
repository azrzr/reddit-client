const fetchBootstrap = async () => {
  const response = await fetch("https://www.reddit.com/r/bootstrap.json");
  const data = await response.json();

  console.log(data.data.children);
};

fetchBootstrap();
