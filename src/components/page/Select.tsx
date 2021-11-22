import React, { ReactNode, useRef } from 'react'
import styled from 'styled-components'
import { Colors } from '../../constants/styles'
import arrowDown from '../../assets/arrow-down.svg'
import { useClickOutside } from '../../hooks/useClickOutside'
import { useToggler } from '../../hooks/useToggler'

export interface SelectProps {
  list: ReactNode[]
  value: any
}

export const Select = ({ value, list }: SelectProps) => {
  const { visible, toggle } = useToggler()
  const ref = useRef(null)
  useClickOutside(ref, () => toggle(false))

  return (
    <SelectWrapper ref={ref}>
      {visible && (
        <SelectContent>
          {list.map((item, index) => (
            <SelectItem key={index}>{item}</SelectItem>
          ))}
        </SelectContent>
      )}
      <SelectButton onClick={() => toggle()} className={visible ? 'open' : ''}>
        {value}
      </SelectButton>
    </SelectWrapper>
  )
}

const SelectWrapper = styled.div`
  position: relative;
  width: 120px;
  color: ${Colors.White};
`

const SelectButton = styled.button`
  position: relative;
  width: 100%;
  background: ${Colors.Black};
  color: ${Colors.White};
  font-size: calc(24px + (36 - 24) * ((100vw - 320px) / (1440 - 320)));
  text-decoration: underline;
  padding-right: 50px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 40px;
    height: 20px;
    transform: translateY(-50%);
    background: url(${arrowDown}) center no-repeat;
    background-size: contain;
  }

  &.open::after {
    transform: translateY(-50%) rotate(180deg);
  }
`

const SelectContent = styled.ul`
  position: absolute;
  left: 10px;
  bottom: -12px;
  width: 100%;
  transform: translateY(100%);
  overflow-y: auto;
  background: ${Colors.Black};
  color: ${Colors.White};
  z-index: 1;
`

const SelectItem = styled.li`
  & + & {
    margin-top: 20px;
  }
`
