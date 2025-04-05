export interface USER_DATA_TYPE {
  userID: string;
  name: string;
  email: string;
  role: string;
  profilePicture: string | null;
  isActive: boolean;
  token: string;
}

export interface TYPE_OF_DECODED_USER_DATA {
  userID: string;
  email: string;
}

export interface TYPE_OF_INITIAL_STATE {
  isLoggedIn: boolean;
  token: string | null;
  userData: USER_DATA_TYPE | null;
  loading: boolean;
  error: string | null;
}

export interface REVIEW_TYPE {
  id: number;
  rating: number;
  date: string;
  userType: string;
  title: string;
  content: string;
  images: string[];
  helpful: number;
}

export interface PROPERTY_CARD_TYPE {
  name: string;
  price: number;
  rating: number;
  image: string;
  distance: string;
  amenities: string[];
  isValueStays?: boolean;
  taxesAndFees: string;
}

export interface LANDMARK_TYPE {
  name: string;
  type: string;
  distance: string;
  isPopular?: boolean;
}