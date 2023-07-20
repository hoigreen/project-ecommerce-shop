import React, { useState } from 'react';

const FilterByPrice = ({ minPrice, maxPrice, onFilterChange }) => {
    const [selectedMinPrice, setSelectedMinPrice] = useState(minPrice);
    const [selectedMaxPrice, setSelectedMaxPrice] = useState(maxPrice);

    const handleMinPriceChange = (event) => {
        setSelectedMinPrice(event.target.value);
    };

    const handleMaxPriceChange = (event) => {
        setSelectedMaxPrice(event.target.value);
    };

    const handleFilterButtonClick = () => {
        onFilterChange(selectedMinPrice, selectedMaxPrice);
    };

    return (
        <div className='fillter-range'>
            <label className='fillter-range__label'>Giá bắt đầu:</label>
            <div className='fillter-range__control'>
                <span className='fillter-range__price'>{Number(selectedMinPrice).toLocaleString() + " đ"}</span>
                <input className='fillter-range__input' type="range" min={minPrice} max={maxPrice} value={selectedMinPrice} onChange={handleMinPriceChange} />
            </div>

            <label className='fillter-range__label'>Giá kết thúc:</label>
            <div className='fillter-range__control'>
                <span className='fillter-range__price'>{Number(selectedMaxPrice).toLocaleString() + " đ"}</span>
                <input className='fillter-range__input' type="range" min={minPrice} max={maxPrice} value={selectedMaxPrice} onChange={handleMaxPriceChange} />
            </div>

            <button className='fillter-range__btn' onClick={handleFilterButtonClick}>Lọc</button>
        </div>
    );
};

export default FilterByPrice;
