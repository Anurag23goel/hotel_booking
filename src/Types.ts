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

export interface Hotel {
  id: string
  name: string
  location: string
  area: string
  stars: number
  originalPrice: number
  discountedPrice: number
  amenities: string[]
  viewers?: number
  tags: string[]
  savings: number
  featured: boolean
  rating?: {
    score: number
    type: string
    reviews: number
  }
  image: string
  bookings?: {
    times: number
    hours: number
  }
}