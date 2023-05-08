export default interface User {
  token: string;
  firstName: string;
  lastName: string;
  profileImageUrl: string;
  email: string;
  ministry: {
    name: string;
    id: string;
  }
  role: string;
  username: string;
  id: string;
  phoneNumber: string;
}