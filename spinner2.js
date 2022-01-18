let spinDelay = 200;
const spinChar = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];

for(let i = 0; i < 9; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinChar[i]}`);
  }, spinDelay*i);
  
};
setTimeout(() => {
  console.log();
}, spinDelay*9);

