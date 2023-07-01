import { Data } from "polemic"

export default interface Person extends Data.Record 
{
	email: Data.FieldTypes.Email
	password: Data.FieldTypes.Password
}