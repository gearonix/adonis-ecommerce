export const getUIText = (mode: 'login' | 'signup') => {
  return mode == 'login' ? {
    title: 'Log in',
    linkText: 'Don’t have an account?',
    linkHref: '/signup',
    blueLinkText: 'Register now',
  } : {
    title: 'Register now',
    linkText: 'Already have an account?',
    linkHref: '/login',
    blueLinkText: 'Login in',
  };
};
