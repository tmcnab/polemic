import MusicGroup from "./MusicGroup"
import MusicAlbum from "./MusicAlbum"
import Thing from "./BaseRecord"

// https://schema.org/MusicRecording
export default interface MusicRecording extends Thing
{
	// Properties from MusicRecording
	byArtist: MusicGroup[]
	inAlbum: MusicAlbum[]
}