import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #2f2f2f;
  border-radius: 20px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 14px;
  padding: 12px;
`;

export const Tipo = styled.View`
  flex-direction: row;
`;

export const TipoText = styled.Text`
color: #FFF;
font-size: 16px;
font-style: italic;
`;

export const IconView = styled.View`
  flex-direction: row;
  background-color: ${props => props.tipo === 'despesa' ? '#c62c36' : '#049301'};
  padding-bottom: 4px;
  padding-top: 4px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 15px;
  margin-bottom: 2px;
`;

export const ValorText = styled.Text`
  color: #FFF;
  font-size: 22px;
`;


export const DescricaoText = styled.Text`
  color:  #BA4DE3;
  font-size: 12px;
`;
