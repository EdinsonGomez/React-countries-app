/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useEffect, useRef } from 'react';

import '../../styles/filters/selectCustom.scss';

const regions = {
  Africa: 'Africa',
  America: 'Americas',
  Asia: 'Asia',
  Europe: 'Europe',
  Oceania: 'Oceania',
};

export default function SelectCustom({ value, placeholder, onChange }) {
  const [isActive, setIsActive] = useState(false);
  const elRef = useRef(null);

  const onClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const listener = (event) => {
      if (!elRef?.current) return;

      if (!elRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [elRef, onChange]);

  return (
    <div
      className={`select-custom ${isActive ? 'isActive' : ''}`}
      role="button"
      tabIndex={0}
      onClick={onClick}
      ref={elRef}
    >
      <input
        type="text"
        placeholder={placeholder}
        value={regions?.[value] ?? ''}
        readOnly
      />
      <ul role="menu" className={`select-custom__options ${isActive ? 'show-menu' : ''}`}>
        {Object
          .keys(regions)
          .map((countryKey) => (
            <li
              key={`option-${countryKey}`}
              role="menuitem"
              tabIndex="-1"
              onClick={() => onChange(countryKey, regions[countryKey])}
            >
              {regions[countryKey]}
            </li>
          ))}
      </ul>
    </div>
  );
}
