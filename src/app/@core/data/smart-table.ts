
export abstract class SmartTableData {
  abstract async getData(queryParam: string): Promise<unknown>;
  abstract async sendQuestion(queryParam: string, question: string): Promise<unknown>;
  abstract async sendAnswer(queryParam: string, answer: string): Promise<unknown>;

}
