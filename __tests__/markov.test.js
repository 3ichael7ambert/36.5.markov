const { MarkovMachine } = require('../markov');

describe('MarkovMachine', () => {
  it('should generate text from input', () => {
    const inputText = 'the cat in the hat';
    const mm = new MarkovMachine(inputText);
    const generatedText = mm.makeText();

    expect(typeof generatedText).toBe('string');
    expect(generatedText.length).toBeGreaterThan(0);
  });

  it('should correctly split input text into words', () => {
    const inputText = 'the cat in the hat';
    const mm = new MarkovMachine(inputText);
    const words = mm.words;
    expect(Array.from(words)).toEqual(['the', 'cat', 'in', 'the', 'hat']);
  });

  it('should respect the requested text length', () => {
    const inputText = 'the cat in the hat';
    const mm = new MarkovMachine(inputText);
    const requestedWordCount = 5; // Request 5 words
    const generatedText = mm.makeText(requestedWordCount);
  
    const wordCount = generatedText.split(' ').length;
    expect(wordCount).toBeLessThanOrEqual(requestedWordCount); // Adjusted expectation
  });
  
  it('should generate text respecting numWords', () => {
    const inputText = 'the cat in the hat';
    const mm = new MarkovMachine(inputText);
    const requestedWordCount = 10; // Request 10 words
    const generatedText = mm.makeText(requestedWordCount);
  
    const wordCount = generatedText.split(' ').length;
    expect(wordCount).toBeLessThanOrEqual(requestedWordCount); // Adjusted expectation
  });
  

});
