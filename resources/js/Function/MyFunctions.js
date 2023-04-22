import { useState, useEffect } from 'react';

export function WindowSize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // fungsi untuk memperbarui state width
    function handleResize() {
      setWidth(window.innerWidth);
    }

    // tambahkan event listener ke objek window
    window.addEventListener('resize', handleResize);

    // membersihkan event listener pada saat komponen di-unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
}
