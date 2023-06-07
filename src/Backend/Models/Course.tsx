import Student from "./Student";
import Subject from "./Subject";

class Course {
    id: number;
    name: string;
    subjects:Subject[];
    students:Student[];
  
    constructor(id: number, name: string,subjects:Subject[], students:Student[]) {
      this.id = id;
      this.name = name;
      this.subjects=subjects;
      this.students=students
    }
  
    static parse(responseData: any): Course {
        return new Course(
          responseData.id,
          responseData.name,
          responseData.subjects,
          responseData.students
        );
      }
  }
  
  export default Course;