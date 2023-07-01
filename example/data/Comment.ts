import Person from './User'
import Thing from './BaseRecord'

// https://schema.org/Comment
export default interface Comment extends Thing
{
	author: Person
}