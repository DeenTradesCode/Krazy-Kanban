import { jwtDecode, JwtPayload } from 'jwt-decode';

class AuthService {
  getProfile() {
    const token = this.getToken();
    if (token) {
      return jwtDecode<JwtPayload>(token);
    }
    return null;
  }

  
  loggedIn(): boolean {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token); 
  }

  
  isTokenExpired(token: string): boolean {
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      if (!decoded.exp) return true;
      return decoded.exp * 1000 < Date.now(); 
    } catch (err) {
      console.error('Error decoding token:', err);
      return true; 
    }
  }

  getToken(): string | null {
    return localStorage.getItem('id_token');
  }

  login(idToken: string): void {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/'); 
  }

  logout(): void {
    localStorage.removeItem('id_token');
    window.location.assign('/login'); 
  }
}

export default new AuthService();