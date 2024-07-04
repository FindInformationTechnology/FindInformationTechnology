'use client';

import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    window.location.replace('/en/page_not_found')
  }, [])

  return (
    <html>
      <body className='text-center'>
        <h1 className='mt-10 font-semibold'>Something went wrong!</h1>
      </body>
    </html>
  );
}
