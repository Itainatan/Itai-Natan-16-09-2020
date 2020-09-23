export interface FavoritesType {
    data: Array<FavoriteType>,
    loading: boolean
}

export interface CurrentCityType {
    cityInfo: CityInfoType,
    todayWeather: TodayWeatherType,
    fiveDayaWeather: FiveDayaWeatherType,
    loading: boolean,
    data: Object
}

export interface FavoriteType extends CurrentCityType { }

export interface CityInfoType {
    LocalizedName: string,
    Key: string
}

export interface TodayWeatherType {
    Temperature: TemperatureType,
    WeatherText: string,
    WeatherIcon: number
}

export interface TemperatureType {
    Metric: MetricImperialType,
    Imperial: MetricImperialType,
    Maximum: MetricImperialType,
    Minimum: MetricImperialType
}

export interface MetricImperialType {
    Value: number
}

export interface DegreeType {
    isCelsius: boolean
}

export interface CurrentCityDataType {
    data: CurrentCityType
}

export interface FiveDayaWeatherType {
    DailyForecasts: Array<WeatherItemType>
}

export interface WeatherItemType {
    Date: Date,
    Temperature: TemperatureType
}

export interface AutoCompleteType {
    loading: boolean,
    data: Array<CityInfoType>
}

export interface CoordsType {
    latitude: number,
    longitude: number
}

export interface NotificationsType {
    notifications: Array<NotificationsType>
}

export interface NotificationType {
    key: string,
    message: React.ReactNode,
    options: OptionsType,
    dismissed: boolean
}

export interface OptionsType {
    onClose: Function
}