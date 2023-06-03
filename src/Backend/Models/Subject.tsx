class Subject {
    id: number;
    name: string;
  
    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }
  
    static parse(responseData: any): Subject {
        return new Subject(
          responseData.id,
          responseData.name,
          
        );
      }
  }
  
  export default Subject;