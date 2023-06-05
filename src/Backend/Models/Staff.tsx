import Course from "./Course";
import Institute from "./Institute";
import Subject from "./Subject";

class Staff {
    id: number;
    name: string;
    
    email: string;
    address: string;
    city: string;
    postalCode: string;
    firebaseId: string;
    mobile: string;
    role: string;
    dob: string;
    gender: string;
    institute: Institute;
    subjects: Subject[];
    courses:Course[];
  
    constructor(
      id: number,
      name: string,
      email: string,
      address: string,
      city: string,
      postalCode: string,
      firebaseId: string,
      mobile: string,
      role: string,
      institute: Institute,
      gender: string,
      dob: string,
      subjects: Subject[],
      courses:Course[],

    ) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.address = address;
      this.city = city;
      this.postalCode = postalCode;
      this.firebaseId = firebaseId;
      this.mobile = mobile;
      this.role = role;
      this.subjects = subjects;
      this.courses=courses;
      this.dob = dob;
      this.gender = gender;
      this.institute = institute;
    }
  
    static parse(json: any): Staff {
      return new Staff(
        json.id,
        json.name,
        json.email,
        json.address,
        json.city,
        json.postalCode,
        json.firebaseId,
        json.mobile,
        json.role,
        json.subjects,
        json.courses,
        json.dob,
        json.gender,
        json.institute,
      );
    }
}  
export default Staff;