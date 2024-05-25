export class MyFilereader {
  private static instance: MyFilereader | null = null;

  public static getInstance(): MyFilereader {
    if (!this.instance) {
      this.instance = new MyFilereader();
    }
    return this.instance;
  }

  public getTextFromData(data: string): string {
    return data;
  }

  public getWordsFromData(data: string): string[] {
    return data.split(/\s+/);
  }

  public getTotalWords(data: string): number {
    return this.getWordsFromData(data).length;
  }

  public getTotalCharacters(data: string): number {
    return data.replace(/[^a-z]/gi, '').length;
  }

  public getTotalSpaces(data: string): number {
    return data.split(' ').length - 1;
  }

  public getRepeatedWords(data: string): [string, number][] {
    const words = this.getWordsFromData(data);
    const wordCounts: { [key: string]: number } = {};
    console.log('words :>> ', words);

    words.reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, wordCounts);

    return Object.entries(wordCounts).filter(([word, count]) => count > 10);
  }
}
