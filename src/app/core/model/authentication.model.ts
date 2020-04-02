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
    results:hospitals[];
  }

  export interface suspectedcase{
       symptoms:string;
       period:string;
     age:string;
     gender:string;
   bodyTemperature:string;
     contactFromOutside:string;
    status :string,
    created_date :string
  }

  export interface hospitals{
    district_name:string;
    category_name:string;
    name:string;
    contact_num:string
  }

  export interface nepaldata{
    recovered:number;
    total_Samples_Tested:number;
    negative:number;
    positive:number;
    isolation:number;

  }
  export interface SAARCdata{
    country:string;
    Active_Cases:number;
    Total_Deaths:number;
    TotIn1M:number;
    DIn1M:number;

  }

  export interface misinformation{
    mInformation: string,
    link: string,
    source :string,
    status :string,
    created_date :string
  }
  export interface blackMarketing{
    productName: string,
    location: string,
    thenPrice :string,
    status :string,
    created_date :string,
    nowPrice:string,
    comments:string
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

  export interface mInformationres{
    status : string,
    message : string,
    obj : misinformation

  }

  export interface Credentials {
    user: User;
    accessToken: string;
    session: string;
  }
}
