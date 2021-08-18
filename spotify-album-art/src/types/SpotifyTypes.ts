export interface SpotifyClientCredentialsResult {
    access_token: string,
    token_type: string, // 'Bearer'
    expires_in: number // in seconds
};

export interface SpotifyAlbum {
    album_type: string, // type of album: 'album', 'single', or 'compilation'
    artists: SpotifyArtist[],
    available_markets: string[], // considered available if at least 1 track is available
    copyrights: SpotifyCopyright[],
    external_ids: SpotifyExternalId,
    external_urls: SpotifyExternalUrl,
    genres: string[], // empty if not yet classified into genres
    href: string, // link to the Web API endpoint providing full details of the album
    id: string, // Spotify ID for the album
    images: SpotifyImage[], // cover art in various sizes, widest first
    label: string,
    name: string, // may be empty in case of an album takedown
    popularity: number, // 0-100, with 100 being most popular. calculated from popularity of the tracks
    release_date: string, // 1981-12-15 (or 1981 or 1981-12, depending on precision)
    release_date_precision: string, // 'year', 'month', or 'day'
    restrictions: SpotifyAlbumRestriction, // included if content restriction is applied
    total_tracks: number,
    tracks: SpotifySimplifiedTrack[],
    type: string, // 'album'
    uri: string // Spotify URI for the album
};

export interface SpotifyAlbumRestriction {
    reason: string // additional reasons may be added in the future, so be sure to handle unknown values
    // 'market': the content item is not available in the given market
    // 'product': the content item is not available for the user's subscription type
    // 'explicit': the content item is explicit and the user's account is set to not play explicit content
};

export interface SpotifyTrackRestriction extends SpotifyAlbumRestriction {}

export interface SpotifyArtist {
    external_urls: SpotifyExternalUrl,
    followers: SpotifyFollowers,
    genres: string[], // empty if not yet classified into genres
    href: string, // link to the Web API endpoint providing full details of the artist
    id: string, // Spotify ID for the artist
    images: SpotifyImage[], // images of the artist in various sizes, widest first
    name: string,
    popularity: number, // 0-100, with 100 being most popular. calculated from popularity of artist's tracks
    type: string, // 'artist'
    uri: string // Spotify URI for the artist
};

export interface SpotifyCopyright {
    text: string,
    type: string // C = the copyright, P = the sound recording (performance) copyright
};

export interface SpotifyExternalUrl {
    spotify: string // the Spotify URL for the object
};

export interface SpotifyExternalId {
    ean: string, // International Article Number
    isrc: string, // International Standard Recording Code
    upc: string // Universal Product Code
};

export interface SpotifyFollowers {
    href: string, // link to the Web API endpoint providing full details of the followers; null if not available
    // (as of 8/18/21, href will always be null as Web API doesn't currently support this)
    total: number // total number of followers
};

export interface SpotifyImage {
    height?: number, // height in pixels; if unknown: null or not returned
    width?: number, // width in pixels; if unknown: null or not returned
    url: string // source URL of image
};

export interface SpotifySimplifiedTrack {
    artists: SpotifySimplifiedArtist[],
    available_markets: string[],
    disc_number: number,
    duration_ms: number,
    explicit: boolean, // false can also mean unknown
    external_urls: SpotifyExternalUrl,
    href: string, // link to Web API endpoint providing full details of the track
    id: string, // Spotify ID for the track
    is_local: boolean, // whether or not the track is from a local file
    is_playable: boolean, // supplied when Track Relinking is applied
    linked_from: SpotifyLinkedTrack,
    name: string,
    preview_url: string, // URL to a 30 second preview (MP3) of the track
    restrictions: SpotifyTrackRestriction,
    track_number: number,
    type: string, // 'track'
    uri: string // the Spotify URI for the track
};

export interface SpotifySimplifiedArtist {
    external_urls: SpotifyExternalUrl,
    href: string, // link to the Web API endpoint providing full details of the artist
    id: string, // Spotify ID for the track
    name: string,
    type: string, // 'artist'
    uri: string // the Spotify URI for the artist
};

export interface SpotifyLinkedTrack {
    external_urls: SpotifyExternalUrl,
    href: string, // link to the Web API endpoint providing full details of the track
    id: string, // Spotify ID for the track
    type: string, // 'track'
    uri: string // the Spotify URI for the track
}