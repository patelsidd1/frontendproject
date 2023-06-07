import Course from "./Course";

class Institute {
    id: number;
    name: string;
    collegeId: number;
    email: string;
    address: string;
    city: string;
    postalCode: string;
    firebaseId: string;
    mobile: string;
    role: string;
    devices: string[];
    courses:Course[];
  
    constructor(
      id: number,
      name: string,
      collegeId: number,
      email: string,
      address: string,
      city: string,
      postalCode: string,
      firebaseId: string,
      mobile: string,
      role: string,
      devices: string[],
      courses:Course[]

    ) {
      this.id = id;
      this.name = name;
      this.collegeId = collegeId;
      this.email = email;
      this.address = address;
      this.city = city;
      this.postalCode = postalCode;
      this.firebaseId = firebaseId;
      this.mobile = mobile;
      this.role = role;
      this.devices = devices;
      this.courses=courses;
    }
  
    static parse(json: any): Institute {
      return new Institute(
        json.id,
        json.name,
        json.collegeId,
        json.email,
        json.address,
        json.city,
        json.postalCode,
        json.firebaseId,
        json.mobile,
        json.role,
        json.devices,
        json.courses
      );
    }
}  
export default Institute;