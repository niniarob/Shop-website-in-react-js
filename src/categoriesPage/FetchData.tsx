import React, { useEffect } from 'react';

interface FetchDataProps {
  url: string;
  onDataFetch: (data: any[]) => void;
}

const FetchData: React.FC<FetchDataProps> = ({ url, onDataFetch }) => {
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => onDataFetch(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [url, onDataFetch]);

  return null;
};

export default FetchData;
