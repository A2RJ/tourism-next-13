import { User } from "./user"

export type DiscountType = {
  id: string
  discount_name: string
  discount_percentage: number
  start_date: Date
  end_date: Date
}

export type FacilityType = {
  id: string
  facility_name: string
}

export type ImageType = {
  id: string
  image: string
}

export type PackageType = {
  id: string
  package_name: string
  duration: string
  unit: string
  description: string
  price: string
  meeting_point_latitude: string
  meeting_point_longitude: string
  latitude: string
  longitude: string
  province_id: string
  regency_id: string
  district_id: string
  village_id: string
  discount_id: string
  user: User
  images: ImageType[]
}

export type ReservationType = {
  activity_date: string
  created_at: string
  id: string
  number_of_tourist: number
  payment_status: string
  revenue: string
  tour_package_id: string
  updated_at: string
  user: User
  package: PackageType
}

export interface ApiResponse<T> {
  meta: {
    total: number
    per_page: number
    current_page: number
    last_page: number
    first_page: number
    first_page_url: string | null
    last_page_url: string | null
    next_page_url: string | null
    previous_page_url: string | null
  }
  data: T[]
}
