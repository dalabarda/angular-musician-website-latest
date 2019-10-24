//
export class IMenu {
    id: number;
    menu: string;
    active: boolean;
    sub_menu? : IMenu[];
    component: string;
}

//
export interface IPlatform {
    id: number;
    active: boolean;
    category: ePlatformType;
    icon: string;
    icon_gray?: string;
    index_regio?: [];
    name: string;
    note?: string;
    site: string;
}
export enum ePlatformType {
  streamingService = 'streaming service',
  socialMedia = 'social media',
}

//
export interface IEvent {
  id: number;
  address?: string;
  availability?: eAvailability;
  category: eEventType;
  city: string;
  country: string;
  date?: Date;
  icon?: string;
  location?: ILocation;
  name: string;
  note?: string;
  place: string;
  site?: string;
}

export enum eEventType {
  concert = 'concert',
  conference = 'conference',
  festival = 'festival',
  pocketShow = 'pocket show',
}

export enum eAvailability {
  available = 'available',
  canceled = 'canceled',
  free = 'free',
  soldout = 'sold out',
}

export enum eLocation {
  lng = 'lng',
  lat = 'lat',
}

export interface ILocation {
  xLng: number;
  yLat: number;
}

////////////////////////////////////

export interface Point {
  x: number;
  y: number;
}

export class Rectangle {
  constructor(public topLeft: Point, public width: number, public height: number){}
}

export class Circle {
  constructor(public center: Point, public radius: number){}
}

function getArea(geometry: Rectangle | Circle): number {
  if (geometry instanceof Circle){
    return Math.PI * Math.pow(geometry.radius, 2);
  } else {
    return geometry.height * geometry.width;
  }
}

// this function is needed because point is an Interface. interfaces don't exist at runtime.
// typeguards can be done only with objects.
function isPoint(geometry: any): geometry is Point {
  return typeof geometry.x === 'number' && typeof geometry.y === 'number';
}

function logCenter(geometry: Point | Rectangle | Circle): void {
  if(isPoint(geometry)){
    // whitout typeguards we'd have to do some casting. like the following const
    // const point = <Point>geometry;
    console.log(geometry.x, geometry.y);
  } else if (geometry instanceof Rectangle){
    console.log(geometry.topLeft.x + geometry.width / 2, geometry.topLeft.y + geometry.height / 2);
  } else {
    console.log(geometry.center);
  }
}


