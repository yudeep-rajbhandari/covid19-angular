declare namespace Authentication {
  export interface LoginPayload {
    username: string;
    password: string;
  }

  export interface SignupPayload {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    cPassword: string;
  }

  export interface DataPayload {
    results: hospitals[];
  }

  export interface suspectedcase {
       symptoms: string;
       period: string;
     age: string;
     gender: string;
    description: string;
    statuses: string;
    status: string;
    created_date: string;
  }

  export interface data1 {
    data: data;
  }
  export  interface data {
    current:current;
  }

  // tslint:disable-next-line:class-name
  export interface current {
   pollution:pollution;
  }
  export  interface pollution{
    aqius:number;
    aqicn:number;
  }
  export interface coronaFear {
    location: string;
    responsibleHospital: string;
    age: string;
    gender: string;
    description: string;
    statuses: string;
    status: string;
    created_date: string;
  }
  export interface ProvinceData {
    total_death: number;
    num_of_isolation_bed: number;
    total_tested: number;
    total_negative: number;
    update_date: number;
    province_name: string;
    occupied_isolation_bed: number;
    total_in_isolation: number;
    total_recovered: number;
    facility_count: number;
    total_positive: number;
    province_id: number;
  }

  export interface hospitals {
    district_name: string;
    category_name: string;
    name: string;
    contact_num: string;
    municipality_name: string;
  }

  export interface nepaldata {
    recovered: number;
    confirmed: number;
    tested: number;
    positive: number;
    isolation: number;
    death: number;
    total_recovered: number;

  }
  export interface SAARCdata {
    country: string;
    Active_Cases: number;
    Total_Deaths: number;
    TotIn1M: number;
    DIn1M: number;

  }

  export interface misinformation {
    mInformation: string;
    link: string;
    source: string;
    status: string;
    created_date: string;
  }
  export interface blackMarketing {
    productName: string;
    location: string;
    thenPrice: string;
    status: string;
    created_date: string;
    nowPrice: string;
    comments: string;
  }


  export interface User {
    _id: string;
    firstName: string;
    lastName: string;
    emailVerified: boolean;
    emailHash: string;
    passwordLastUpdated?: any;
    lastLogin: Date;
    phone?: any;
    email: string;
    createdAt: Date;
    updatedAt: Date;
  }

  export interface mInformationres {
    status: string;
    message: string;
    obj: misinformation;

  }

  export interface Credentials {
    user: User;
    accessToken: string;
    session: string;
  }
}
