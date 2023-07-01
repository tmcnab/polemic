interface StoreOptions
{

}

export default class Store 
{
	#options: StoreOptions
	
	constructor (options?: StoreOptions)
	{
		this.#options = options ? options : {} as StoreOptions
	}
}