interface UserLogin {
  username: string;
  password: string;
}

const login = async (userInfo: UserLogin) => {
  const response = await fetch('/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userInfo),
  });

  if (!response.ok) {
    throw new Error('Failed to login. Please check your credentials.');
  }

  const data = await response.json();
  return data;
};

export { login };