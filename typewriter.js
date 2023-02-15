const sentence = "hello there from lighthouse labs \n";
const typewriter = () => {
  let delay = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
    delay += 50;
  }
};

typewriter(sentence);
