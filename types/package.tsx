export type Discount = {
  id: string;
  discount_name: string;
  discount_percentage: number;
  start_date: Date;
  end_date: Date;
};

export type Facility = {
  id: string;
  facility_name: string;
};

export interface Package {
  id: string;
  package_name: string;
  duration: string;
  description: string;
  price: string;
  meeting_point_latitude: string;
  meeting_point_longitude: string;
  latitude: string;
  longitude: string;
  province_id: string | null;
  regency_id: string | null;
  district_id: string | null;
  village_id: string | null;
  discount_id: string;
}
