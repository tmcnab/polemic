import MusicGroup from './MusicGroup'
import MusicRecording from './MusicRecording'
import Thing from './BaseRecord'

// https://schema.org/MusicAlbum
export default interface MusicAlbum extends Thing
{
	// Properties from MusicAlbum
	byArtist: MusicGroup
	track: MusicRecording[]
}