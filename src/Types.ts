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
