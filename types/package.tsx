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

export type Package = {
  id: string;
  package_name: string;
  duration: string;
  unit: string;
  description: string;
  price: string;
  meeting_point_latitude: string;
  meeting_point_longitude: string;
  latitude: string;
  longitude: string;
  province_id: string;
  regency_id: string;
  district_id: string;
  village_id: string;
  discount_id: string;
};
