export interface IFeatureCollection {
  features: IFeature[]
}

export interface IFeature {
  geometry: {
    type: string
    coordinates: TCoordinate
  }
}

export type TCoordinate = number | number[] | TCoordinate[]
