import styled from 'styled-components/native';

export default {
  Container: styled.View`
    flex: 1;
    background-color: ${props => props.theme.lighterBackground};
  `,
  LogoContainer: styled.View`
    padding: 10px 20px;
    border-bottom-width: 1px;
    border-bottom-color: ${props => props.theme.lighterBorder};
  `,
  Logo: styled.Image`
    width: 190px;
    height: 40px;
  `,
  Scroller: styled.ScrollView`
    flex: 1;
    margin: 20px 0;
  `,
  MenuButton: styled.TouchableOpacity`
    flex-direction: row;
    margin-bottom: 5px;
    border-radius: 5px;
    align-items: center;
  `,
  MenuSquare: styled.View`
    width: 5px;
    height: 35px;
    margin-right: 20px;
    background-color: transparent;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  `,
  MenuButtonText: styled.Text`
    font-size: 15px;
    margin-left: 10px;
    color: ${props => props.theme.drawerText};
  `,
  ChangePropertyContainer: styled.View`
    margin: 10px;
  `,
  ChangePropertyBtn: styled.TouchableOpacity`
    background-color: ${props => props.theme.purple};
    padding: 12px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
  `,
  ChangePropertyBtnText: styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: ${props => props.theme.buttonText};
  `,
  FooterContainer: styled.View`
    padding: 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
  FooterInfo: styled.View``,
  FooterProfile: styled.Text`
    font-size: 15px;
    color: ${props => props.theme.text};
  `,
  FooterPropertyText: styled.Text`
    font-size: 15px;
    color: ${props => props.theme.drawerText};
  `,
  FooterPropertyButton: styled.TouchableOpacity``,
};
