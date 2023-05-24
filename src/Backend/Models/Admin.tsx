class Admin {
    id: number;
    name: string;
    firebaseId: string;
    authority: string;
    email: string;
    mobile: string;
    address: string;
    city: string;
    postalCode: string;
    dob: string;
    gender: string;
  
    constructor(
      id: number,
      name: string,
      firebaseId: string,
      authority: string,
      email: string,
      mobile: string,
      address: string,
      city: string,
      postalCode: string,
      dob: string,
      gender: string
    ) {
      this.id = id;
      this.name = name;
      this.firebaseId = firebaseId;
      this.authority = authority;
      this.email = email;
      this.mobile = mobile;
      this.address = address;
      this.city = city;
      this.postalCode = postalCode;
      this.dob = dob;
      this.gender = gender;
    }
  
    static parse(responseData: any): Admin {
      return new Admin(
        responseData.id,
        responseData.name,
        responseData.firebaseId,
        responseData.authority,
        responseData.email,
        responseData.mobile,
        responseData.address,
        responseData.city,
        responseData.postalCode,
        responseData.dob,
        responseData.gender
      );
    }
  }
  export default Admin;