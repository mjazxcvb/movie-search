type Ratings = { Source: string, Value: string }

export interface IMedia {
    Title: string
    Year: string
    Rated?: string
    Released?: string
    Runtime?: string
    Genre?: string
    Director?: string
    Writer?: string
    Actors?: string
    Plot?: string
    Language?: string
    Country?: string
    Awards?: string
    Poster?: string
    Ratings?: Array<Ratings>
    Metascore?: string
    imdbRating?: string
    imdbVotes?: string
    imdbID?: string
    Type?: string
    TotalSeasons?: string
    Response?: string
}