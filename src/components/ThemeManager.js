import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const ThemeManager = () => {
  
  const isDark = useSelector((store) => store.theme.isDark);

  useEffect(() => {
    const root = window.document.body; 
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]); 

  return null; 
};

export default ThemeManager;