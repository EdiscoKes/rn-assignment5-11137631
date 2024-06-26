
// import React from 'react';

// export const themes = {
//   light: {
//     background: '#fff',
//     text: '#000',
//     icon: '#000',
//   },
//   dark: {
//     background: '#000435',
//     text: '#fff',
//     icon: '#fff',
//   },
// };

// export const ThemeContext = React.createContext({
//   theme: themes.light,
//   setTheme: () => {},
// });


import React from 'react';

export const themes = {
  light: {
    background: '#fff',
    text: '#000',
    icon: '#000',
  },
  dark: {
    background: '#000435',
    text: '#fff',
    icon: '#fff',
  },
};

export const ThemeContext = React.createContext({
  theme: themes.light,
  setTheme: () => {},
});
