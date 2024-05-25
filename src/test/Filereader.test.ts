import { MyFilereader } from '../singletons/FileReader';
// Generated by CodiumAI
describe('MyFilereader', () => {
  it('should return the same instance on multiple calls', () => {
    const instance1 = MyFilereader.getInstance();
    const instance2 = MyFilereader.getInstance();
    expect(instance1).toBe(instance2);
  });

  //It should return text from data
  it('should return text from data', () => {
    const instance = MyFilereader.getInstance();
    const result = instance.getTextFromData('data');
    expect(result).toBe('data');
  });

  //It should return words from data
  it('should return words from data', () => {
    const instance = MyFilereader.getInstance();
    const result = instance.getWordsFromData('data');
    expect(result).toEqual(['data']);
  });

  //It should return total words
  it('should return total words', () => {
    const instance = MyFilereader.getInstance();
    const result = instance.getTotalWords('data');
    expect(result).toBe(1);
  });

  //It should return total characters
  it('should return total characters', () => {
    const instance = MyFilereader.getInstance();
    const result = instance.getTotalCharacters('data');
    expect(result).toBe(4);
  });

  //It should return total spaces
  it('should return total spaces', () => {
    const instance = MyFilereader.getInstance();
    const result = instance.getTotalSpaces('data');
    expect(result).toBe(0);
  });

  //It should return repeated words
  it('should return repeated words', () => {
    const instance = MyFilereader.getInstance();
    const result = instance.getRepeatedWords('data');
    expect(result).toEqual([]);
  });

  //It should return repeated words
  it('should return words repeated more than 10 times', () => {
    const instance = MyFilereader.getInstance();
    const result = instance.getRepeatedWords('hi hi how how are are you you you you you you you you you you you');
    expect(result).toEqual([['you', 11]]);
  });
});
