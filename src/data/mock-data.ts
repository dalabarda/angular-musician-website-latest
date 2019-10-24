import { IMenu, IEvent, IPlatform, ePlatformType, eEventType, eAvailability } from './data';



export const MENUS: IMenu[] = [
  {id: 1, menu: 'Home',         active: true,  sub_menu: [], component: 'dv-hero'},
  {id: 2, menu: 'Band',         active: false, sub_menu: [], component: 'dv-band'},
  {id: 3, menu: 'Bio',          active: true,  sub_menu: [], component: 'dv-bio'},
  {id: 4, menu: 'News',         active: true,  sub_menu: [], component: 'dv-news'},
  {id: 5, menu: 'Discography',  active: false, sub_menu: [], component: 'dv-disco'},
  {id: 6, menu: 'Links',        active: false, sub_menu: [], component: 'dv-links'},
  {id: 7, menu: 'Photos',       active: false, sub_menu: [], component: 'dv-photos'},
  {id: 8, menu: 'Media',        active: true,  sub_menu: [], component: 'dv-media'},
  {id: 9, menu: 'Videos',       active: false, sub_menu: [], component: 'dv-videos'},
  {id: 10, menu: 'WebShop',     active: false, sub_menu: [], component: 'dv-shop'},
  {id: 11, menu: 'Tour',        active: false,  sub_menu: [], component: 'dv-tour'},
  {id: 12, menu: 'Contact',     active: true,  sub_menu: [], component: 'dv-contact'},
  {id: 13, menu: 'Promo',         active: true,  sub_menu: [], component: 'dv-promo'},
];


export const PLATFORMS: IPlatform[] = 
  [
    {
      id: 1, 
      name: 'Amazon',  
      active: true, 
      category: ePlatformType.streamingService,
      icon: 'amazon_icon', 
      site: 'https://music.amazon.de',
    },
    {
      id: 2, 
      name: 'Apple Music', 
      active: false,
      category: ePlatformType.streamingService,
      icon: 'applemusic_icon', 
      site: 'https://www.apple.com/de/apple-music/' 
    },
    {
      id: 3, 
      name: 'Bandcamp', 
      active: true,
      category: ePlatformType.streamingService,
      icon: 'bandcamp_icon', 
      site: 'https://bandcamp.com/' 
    },
    {
      id: 4, 
      name: 'Deezer',
      active: true,
      category: ePlatformType.streamingService,
      icon: 'deezer_icon', 
      site: 'https://www.deezer.com/' 
    },
    {
      id: 9, 
      name: 'Facebook', 
      active: false,
      category: ePlatformType.socialMedia,
      icon: 'facebook_icon', 
      site : 'https://www.facebook.com/jaghopakistani/videos/1041892465847267/'
    },
    {
      id: 10, 
      name: 'Instagram', // not in the icons
      active: false,
      category: ePlatformType.socialMedia,
      icon: 'instagram_icon', // it has to be done
      site: 'https://www.instagram.com/guitar.monkey/' 
    },
    {
      id: 11, 
      name: 'Spotify',
      active: true,
      category: ePlatformType.streamingService,
      icon: 'spotify_icon',
      site: 'https://open.spotify.com/artist/5UZZbtzlIKJO9HA6RHChKb' 
    },
    {
      id: 12, 
      name: 'Soundcloud',
      active: true,
      category: ePlatformType.streamingService,
      icon: 'soundcloud_icon',
      site: 'https://soundcloud.com/monkeypro' 
    },
    {
      id: 13, 
      name: 'Tidal', 
      active: true,
      category: ePlatformType.streamingService,
      icon: 'tidal_icon',
      site: 'https://soundcloud.com/monkeypro' 
    },
    {
      id: 14, 
      name: 'Youtube',  // not in the icons
      active: false,
      category: ePlatformType.socialMedia, // CHECK: not really sure about it
      icon: 'youtube_icon',  // not in the icons
      site: 'https://youtube.com/' 
    },
    {
      id: 15, 
      name: 'Twitter',  // not in the icons
      active: false,
      category: ePlatformType.socialMedia,
      icon: 'twitter_icon',  // not in the icons
      site: 'https://twitter.com/' 
    },
  ];



export const EVENTS: IEvent[] = 
  [
    {
      id: 1,
      address: '',
      availability: eAvailability.available,
      category: eEventType.concert,
      city: 'Melbourne',
      country: 'Australia',
      date: new Date("February 4, 2020 00:20:18 GMT+00:00"),
      icon: '',
      // location: ,
      name: '',
      note: '',
      place: 'City Recital Centre',
      site: '',
    },
    {
      id: 2,
      address: '',
      availability: eAvailability.free,
      category: eEventType.concert,
      city: 'Rio de Janeiro',
      country: 'Brazil',
      date: new Date("February 3, 2020 10:13:00"),
      icon: '',
      location: {yLat: -22.9828, xLng: -43.3628},
      name: '',
      note: '',
      place: 'Metropolitan Hall',
      site: '',
    },
    {
      id: 3,
      address: '',
      availability: eAvailability.available,
      category: eEventType.concert,
      city: 'New York',
      country: 'EUA',
      date: new Date("December 24, 2022 10:13:10"),
      icon: '',
      location: {yLat: 40.7318, xLng: -73.9892},
      name: '',
      note: '',
      place: 'Webster Hall',
      site: '',
    },
    {
      id: 4,
      address: '',
      availability: eAvailability.available,
      category: eEventType.concert,
      city: 'Mumbai',
      country: 'India',
      date: new Date("June 14, 2020 10:13:00"),
      icon: '',
      // location: ,
      name: '',
      note: '',
      place: 'Tata Theatre',
      site: '',
    },
    {
      id: 5,
      address: '',
      availability: eAvailability.available,
      category: eEventType.concert,
      city: 'Moscow',
      country: 'Russia',
      date: new Date("March 04, 2021 10:13:00"),
      icon: '',
      location: {yLat: 55.7571, xLng: 37.6007},
      name: '',
      note: '',
      place: 'Helikon-Opera',
      site: '',
    },
    {
      id: 6,
      address: '',
      availability: eAvailability.available,
      category: eEventType.concert,
      city: 'Santiago',
      country: 'Chile',
      date: new Date("March 04, 2018 10:13:00"),
      icon: '',
      // location: ,
      name: '',
      note: '',
      place: 'Chilean Areana',
      site: '',
    },
    {
      id: 7,
      address: '',
      availability: eAvailability.soldout,
      category: eEventType.concert,
      city: 'Berlin',
      country: 'Germany',
      date: new Date("August 12, 2021 10:13:00"),
      icon: '',
      location: {yLat: 52.5063, xLng: 13.4436},
      name: '',
      note: '',
      place: 'Mercedes-Benz Arena',
      site: '',
    },
    {
      id: 8,
      address: '',
      availability: eAvailability.available,
      category: eEventType.concert,
      city: 'Lisbon',
      country: 'Portugal',
      date: new Date("October 22, 2021 10:13:00"),
      icon: '',
      location: {yLat: 38.7167, xLng: -9.1402},
      name: '',
      note: '',
      place: 'Coliseu dos Recreios',
      site: '',
    },

  ];