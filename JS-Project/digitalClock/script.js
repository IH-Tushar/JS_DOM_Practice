const clocks = document.getElementById('clock');
console.log(clocks)
setInterval(function() {
  let date = new Date();
  clocks.innerHTML = date.toLocaleTimeString();
},1000)


function watch() {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  
  return `${hours}:${minutes}:${seconds}`;
}

// Update the clock display using the watch function
setInterval(function() {
  clocks.innerHTML = watch();
}, 1000);


