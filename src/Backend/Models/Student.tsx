class Student {
    id: number;
    name: string;
  
    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }
  
    static parse(responseData: any): Student {
        return new Student(
          responseData.id,
          responseData.name,
          
        );
      }
  }
  
  export default Student;