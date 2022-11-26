/*
 * Author: Mohammed Musthafa
 * Created Date: Friday November 25th 2022
 * Product : TensorIOT
 */

import SpaceXLogo from '../assets/spacex_logo.png';
import {CenteredFlex} from '../styles/tensor';
import styled from 'styled-components'

const CompanyLogo = styled.img`
  width: 100%;
  height: 100%;
`

const LogoContainer = styled.div`
  width: 200px;
  height: 75px;
`

const TopBar = styled(CenteredFlex)`
  box-shadow: 0px 3px 10px -3px rgb(0 0 0 / 10%)
`;

function NavBar() {
  return (
    <TopBar>
      <LogoContainer>
        <CompanyLogo src={SpaceXLogo} alt='Logo' />
      </LogoContainer>
    </TopBar>
  )
}

export default NavBar;