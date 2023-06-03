interface AttendanceAmount {
  id: number;
  holiday: boolean;
  holidayDescription?: string;
  date: string;
  studentId: number;
  courseId: number;
  subjectId: number;
  instituteId: number;
}

interface Attendance {
  amount: { [key: string]: any };
}

interface AttendanceData {
  dates: string[];
  attendances: { [key: string]: AttendanceAmount[] }[];
}

class AttendanceAmount {
  id: number;
  holiday: boolean;
  holidayDescription?: string;
  date: string;
  studentId: number;
  courseId: number;
  subjectId: number;
  instituteId: number;

  constructor(data: {
    id: number;
    holiday: boolean;
    holidayDescription?: string;
    date: string;
    studentId: number;
    courseId: number;
    subjectId: number;
    instituteId: number;
  }) {
    this.id = data.id;
    this.holiday = data.holiday;
    this.holidayDescription = data.holidayDescription;
    this.date = data.date;
    this.studentId = data.studentId;
    this.courseId = data.courseId;
    this.subjectId = data.subjectId;
    this.instituteId = data.instituteId;
  }

  static fromJson(json: any): AttendanceAmount {
    return new AttendanceAmount({
      id: json.id as number,
      holiday: json.holiday as boolean,
      holidayDescription: json.holidayDescription as string,
      date: json.date as string,
      studentId: json.studentId as number,
      courseId: json.courseId as number,
      subjectId: json.subjectId as number,
      instituteId: json.instituteId as number,
    });
  }
}

class Attendance {
  amount: { [key: string]: any };

  constructor(data: { amount: { [key: string]: any } }) {
    this.amount = data.amount;
  }

  static fromJson(json: any): Attendance {
    return new Attendance({
      amount: json.Amount as { [key: string]: any },
    });
  }
}

class AttendanceData {
  dates: string[];
  attendances: { [key: string]: AttendanceAmount[] }[];

  constructor(data: { dates: string[]; attendances: { [key: string]: AttendanceAmount[] }[] }) {
    this.dates = data.dates;
    this.attendances = data.attendances;
  }

  static fromJson(json: any): AttendanceData {
    const dateList = json.dates as string[];
    const attendanceList = json.attendaces as { [key: string]: Attendance[] }[];

    const dates: string[] = dateList.map((date) => date);
    const attendances: { [key: string]: AttendanceAmount[] }[] = [];
    for (const subjectAtt of attendanceList) {
      const map: { [key: string]: AttendanceAmount[] } = {};
      for (const element in subjectAtt) {
        const list: AttendanceAmount[] = [];
        for (const att of subjectAtt[element]) {
          list.push(AttendanceAmount.fromJson(att));
        }
        map[element] = list;
      }
      const keys = Object.keys(map);
      console.log(keys)
      attendances.push(map);

    }

    return new AttendanceData({ dates, attendances });
  }
}
export default AttendanceData;