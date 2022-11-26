/*
 * Author: Mohammed Musthafa
 * Created Date: Friday November 25th 2022
 * Product : TensorIoT
 */
import styled from 'styled-components';

export const CenteredFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${props => props.mx || 0}px;
`
export const Label = styled.div`
  width: 100px;
  height: 30px;
  border-radius: 20px;
  text-align: center;
  font-size: 12px;
  line-height: 30px;
  font-weight: 600;
  background-color: ${props => {
    if (props.type === 'error') return '#FDE2E1';
    if (props.type === 'warn') return '#FEF3C7';
    return '#DEF7EC';
  }};

  color: ${props => {
    if (props.type === 'error') return '#9B1313';
    if (props.type === 'warn') return '#8E3401';
    return '#00482D'
  }}
  color: white;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
`;

export const DataLabel = styled.h2`
  font-size: 14px;
  color: darkgray;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
`