import { Data } from 'polemic'

// https://schema.org/Thing
export default interface Thing extends Data.Record
{
	// Properties from Thing
	description: Data.FieldTypes.Text
	image: Data.FieldTypes.Blob
	name: Data.FieldTypes.Text
	url: Data.FieldTypes.Url
}