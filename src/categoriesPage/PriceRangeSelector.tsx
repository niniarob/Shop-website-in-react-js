import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Div, PriceArrow, Img, Line, P, PriceRangee } from './styles/Price.styled';
import ArrowUp from './assets/ArrowUp.svg';

interface PriceRangeSelectorProps {
  onChange: (value: number | number[]) => void;
}

const PriceRangeSelector: React.FC<PriceRangeSelectorProps> = ({ onChange }) => {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 695]);

  const handleSliderChange = (value: number | number[]) => {
    const newPriceRange = Array.isArray(value) ? value : [0, value as number];
    setPriceRange((prevPriceRange) => newPriceRange as [number, number]);

    onChange(newPriceRange);
  };
  const sliderStyles = {
    trackStyle: { backgroundColor: '#0b0b80' },
    handleStyle: [{ borderColor: '#0b0b80' }],
    railStyle: { backgroundColor: '#0b0b80' },
  };

  return (
    <Div>
      <PriceArrow>
        <P>Price</P>
        <Img src={ArrowUp} alt='ArrowUp.svg' />
      </PriceArrow>
      <Slider
        range
        min={7.95}
        max={695}
        step={1}
        value={priceRange}
        onChange={handleSliderChange}
        {...sliderStyles}
      />
      <PriceRangee>Price Range: ${priceRange[0]} - ${priceRange[1]}</PriceRangee>
      <Line></Line>
    </Div>
  );
};

export default PriceRangeSelector;
