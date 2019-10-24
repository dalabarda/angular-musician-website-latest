// virtual venues. 
export enum ePlatforms
{
    amazon        = 'amazon',
    deezer        = 'deezer',
    itunes 	      = 'itunes',
    spotify       = 'spotify',
    youtube       = 'youtube',
    facebook      = 'facebook',
    instagram     = 'instagram',
    Soundcloud    = 'Soundcloud',
}
// Soundcloud | iTunes | Google | Spotify | Deezer |
// export const platforms = ePlatforms;





// Link para matéria: https://www.nexojornal.com.br/podcast/2019/03/27/A-gest%C3%A3o-turbulenta-no-Minist%C3%A9rio-da-Educa%C3%A7%C3%A3o-de-V%C3%A9lez

// © 2019 | Todos os direitos deste material são reservados ao NEXO JORNAL LTDA., conforme a Lei nº 9.610/98. A sua publicação, redistribuição, transmissão e reescrita sem autorização prévia é proibida.





// 
export interface Song
{
    id: number;
    title: string;
    author: string;
    available: boolean;
    // category: Category;

}


// export const PLATFORMS = 
//   [
//     {id:  1, name: 'Amazon'    , icon: 'amazon_icon' },
//     {id:  2, name: 'Bandcamp'  , icon: 'bandcamp_icon' },
//     {id:  3, name: 'Deezer'    , icon: 'deezer_icon' },
//     {id:  4, name: 'iTunes'    , icon: 'itunes_icon' },
//     {id:  5, name: 'Spotify'   , icon: 'spotify_icon' },
//     {id:  6, name: 'Soundcloud', icon: 'soundcloud_icon' },
//     {id:  7, name: 'Tidal'     , icon: 'tidal_icon' },
//     {id:  8, name: 'Youtube'   , icon: 'youtube_icon' },
//     {id:  9, name: 'Facebook'  , icon: 'facebook_icon' },
//     {id: 10, name: 'Instagram' , icon: 'instagram_icon' },
//     {id: 11, name: 'Twitter'   , icon: 'twitter_icon' },
    
    
//   ];



// export const PLATFORMS = 
//   [
//     {id:  1, name: 'Amazon'    , icon: './icons/amazon_1.svg' },
//     {id:  2, name: 'Bandcamp'  , icon: './icons/bandcamp_1.svg' },
//     {id:  3, name: 'Deezer'    , icon: './icons/deezer_1.svg' },
//     {id:  4, name: 'iTunes'    , icon: './icons/applemusic_1.svg' },
//     {id:  5, name: 'Spotify'   , icon: './icons/spotify.svg' },
//     {id:  6, name: 'Soundcloud', icon: './icons/soundcloud_1.svg' },
//     {id:  7, name: 'Tidal'     , icon: './icons/tidal_1.svg' },
//     {id:  8, name: 'Youtube'   , icon: './icons/youtube_1.svg' },
//     {id:  9, name: 'Facebook'  , icon: './icons/facebook_1.svg' },
//     {id: 10, name: 'Instagram' , icon: './icons/instagram_1.svg' },
//     {id: 11, name: 'Twitter'   , icon: './icons/twitter_1.svg' },
    
    
//   ];







    // example of an Object
  const companies = [
    {name: "arroz", category: "food", start: 1987, end: 1994},
    {name: "", category: "", start: 1987, end: 1994},
    {name: "", category: "", start: 1987, end: 1994},
    {name: "", category: "food", start: 1987, end: 1994},
    {name: "", category: "", start: 1987, end: 1994},
    {name: "", category: "food", start: 1987, end: 1994}
  ];

  // example of an Array
  const ages = [33, 64, 12, 64, 98, 12, 25, 33, 65, 70, 25, 25, 22, 36, 50]

  const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);



export const eKeyCodes = {
    BACKSPACE: 8,
    TAB:       9,
    ENTER:     13,
    SHIFT:     16,
    CTRL:      17,
    ESC:       27,
    SPACE:     32,
    PGUP:      33,
    PGDOWN:    34,
    END:       35,
    HOME:      36,
    LEFT:      37,
    UP:        38,
    RIGHT:     39,
    DOWN:      40,
    DELETE:    46
};
