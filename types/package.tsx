export type Discount = {
  id: string;
  discount_name: string;
  discount_percentage: number;
  start_date: string;
  end_date: string;
};

export type Facility = {
  id: string;
  facility_name: string;
};

export interface Package {
  id: string;
  packgeName: string;
  duration: string;
  description: string;
  price: string;
  meetingPointLatitude: string;
  meetingPointLongitude: string;
  latitude: string;
  longitude: string;
  provinceId: string | null;
  regencyId: string | null;
  districtId: string | null;
  villageId: string | null;
  discountId: string;
}
