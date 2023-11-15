window.onload = function() {
    const userInput = prompt('Enter a list of comma-separated froyo flavors:');
    if (userInput) {
      const flavorArray = userInput.split(',').map(flavor => flavor.trim());
      const flavorCounts = countFlavors(flavorArray);
      console.log(flavorCounts);
    }
  };
  
  function countFlavors(flavors) {
    const counts = {};
    for (const flavor of flavors) {
      counts[flavor] = counts[flavor] ? counts[flavor] + 1 : 1;
    }
    return counts;
  }
  