import { Data } from 'polemic'
import MusicAlbum from './MusicAlbum'
import MusicRecording from './MusicRecording'
import Thing from './BaseRecord'

// https://schema.org/MusicGroup
export default interface MusicGroup extends Thing
{
	// Properties from MusicGroup
	album: MusicAlbum[]
	genre: Data.FieldTypes.Text[]
	track: MusicRecording[]
}