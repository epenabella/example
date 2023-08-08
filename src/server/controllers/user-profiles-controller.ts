// src/server/entity/UserProfile.ts
import {
     Controller, Get, Route
   } from "tsoa";
// import { postGresDataSource } from "../app-data-source";
import { UserProfile } from '../entity/UserProfile';

@Route("api/user-profiles")
export class UserProfilesController extends Controller {
  @Get("")
  public async getUsers(): Promise<UserProfile[]> {
    //  const userProfiles = 
    //       await postGresDataSource.getRepository(UserProfile)
    //       .find();
    

     return [
      {
          Id: "f98b3535-12d0-4f32-acb0-9c314c2b0ff6",
          CreatedAt: new Date("2023-07-24T17:54:24.589Z"),
      },
      {
          Id: "be1f9388-04d8-4a8d-b02d-81b7d4721946",
          CreatedAt: new Date("2023-07-24T17:54:24.589Z"),
      },
      {
          Id: "b28bb5ad-a3df-410d-8ebe-46071c3a89bb",
          CreatedAt: new Date("2023-07-24T17:54:24.589Z"),
          FirstName: "Enrique",
      },
      {
          Id: "2a81f41e-94c0-434b-9109-398980eebed3",
          CreatedAt: new Date("2023-07-24T17:54:24.589Z"),
          FirstName: "Rick",
          LastName: "Penabella"
      },
      {
          Id: "281c1208-79c1-4cee-94e8-0f1aa39fb328",
          CreatedAt: new Date("2023-07-24T17:54:24.589Z"),
          FirstName: "Elizabeth ",
          LastName: "Eddy"
      }
  ];
  } 
}
