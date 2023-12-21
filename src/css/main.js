import styled from "styled-components";

// Header Area
export const HeaderContainer = styled.header`
  border-bottom: 1px solid #ccc;

  a {
    cursor: pointer;
    margin: 0 8px;
    padding: 10px 6px;
    font-size: 17px;
    font-weight: bold;
  }

  .headerInner {
    max-width: 1200px;
    height: 80px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  
    .mainMenu {

      a:first-child {
      margin: 0px;
      margin-right: 8px;
      }
    }

    .sumMenu {

      a {
        font-size: 14px;
        color: #222;
        opacity: 0.6;
      }

      a:last-child {
      margin: 0px;
      margin-left: 8px;
      }
    }
  }
`;

// Nav Area
export const NavContainer = styled.nav`
  border-bottom: 1px solid #ccc;

  a {
    cursor: pointer;
    margin: 0 8px;
    padding: 10px 6px;
    font-size: 15px;
    font-weight: bold;
  }

  .navInner {
    max-width: 1200px;
    height: 50px;
    margin: 0 auto;
    display: flex;
    align-items: center;

    a:first-child {
    margin: 0px;
    margin-right: 8px;
    }

    a:last-child {
    margin: 0px;
    margin-left: 8px;
    }
  }
`;
       
// Footer Area
export const FooterContainer = styled.footer`
  background: #313542;

  a {
    cursor: pointer;
    margin: 6px;
    padding: 10px 6px;
    color: #fff;
    font-weight: bold;
    font-size: 15px;
  }

  .footerInner {
    max-width: 1200px;
    margin: 0 auto;
    height: 350px;
  

    .corpCS {
      padding-top: 40px;

      a:first-child {
      margin: 0px;
      margin-right: 6px;
      }

      a:last-child {
      margin: 0px;
      margin-left: 6px;
      }
    }

    .corpInfo {
      padding-top: 40px;

      p {
        color: #ccc;
        font-weight: bold;
        font-size: 14px;
        line-height: 26px;
        position: relative;
      }

      .divisionLine {
        padding: 0 10px;
      }

      p:first-child span::before {
        content: "";
        width: 1px;
        height: 14px;
        background: #ccc;
        position: absolute;
        top: 7px;
      }
    }

    .corpLink {
      padding-top: 40px;
      display: flex;

      p {
        color: #ccc;
        font-size: 22px;
        margin-right: 14px;
      }
    }
  }
`;

