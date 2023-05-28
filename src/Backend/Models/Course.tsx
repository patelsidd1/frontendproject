class Course {
    id: number;
    name: string;
  
    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }
  
    static parse(responseData: any): Course {
        return new Course(
          responseData.id,
          responseData.name,
          
        );
      }
  }
  
  export default Course;