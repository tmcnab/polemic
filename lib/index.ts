// INFO: this file gets exported to consumers of the module.

export namespace Data
{
	export interface Record 
	{
		identifier: FieldTypes.Identifier
	}

	export enum FieldTypes 
	{
		Blob = 'FieldTypes.Blob',
		DateTime = 'FieldTypes.DateTime',
		Email = 'FieldTypes.Email',
		Identifier = 'FieldTypes.Identifier',
		Password = 'FieldTypes.Password',
		Text = 'FieldTypes.Text',
		Url = 'FieldTypes.Url',
	}
}