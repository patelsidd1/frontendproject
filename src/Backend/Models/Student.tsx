import Course from "./Course";
import Institute from "./Institute";
import Subject from "./Subject";

class Student {
  id: number;
  name: string;
  institute: Institute|null;
  firebaseId: string|null;
  authority: any; // Replace 'any' with the appropriate type if authority has a defined structure
  email: string | null;
  mobile: string | null;
  address: string | null;
  city: string | null;
  postalCode: string | null;
  dob: string | null;
  gender: string | null;
  course: Course|null;
  subjects: Subject[]|null;
  constructor(
    id: number,
    name: string,
    institute: Institute|null,
    firebaseId: string|null,
    authority: any|null,
    email: string | null,
    mobile: string | null,
    address: string | null,
    city: string | null,
    postalCode: string | null,
    dob: string | null,
    gender: string | null,
    course: Course|null,
    subjects: Subject[]|null
  ) {
    this.id = id;
    this.name = name;
    this.institute = institute;
    this.firebaseId = firebaseId;
    this.authority = authority;
    this.email = email;
    this.mobile = mobile;
    this.address = address;
    this.city = city;
    this.postalCode = postalCode;
    this.dob = dob;
    this.gender = gender;
    this.course = course;
    this.subjects = subjects;
  }
  static parse(json: any): Student {
    const student = new Student(
      json.id,
      json.name,
      json.institute,
      json.firebaseId,
      json.authority,
      json.email,
      json.mobile,
      json.address,
      json.city,
      json.postalCode,
      json.dob,
      json.gender,
      json.course,
      json.subjects
    );
    return student;
  
  }
}
export default Student;