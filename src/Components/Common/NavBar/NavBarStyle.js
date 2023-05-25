import styled from "styled-components";

export const Container = styled.div`
  background: transparent;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  /* Fix your navbar by using below two lines of code */
  position: sticky;
  top: 0;
  /* Fix your navbar by using above two lines of code */
  z-index: 10;
  .upper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 24px 200px;
    gap: 827px;

    width: 1920px;
    height: 157px;

    background: #ffffff;
  }
  .navLogo {
    ${
      "" /* color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.5 rem; */
    }

    ${
      "" /* margin-left: 4px;
    font-weight: bold;
    text-decoration: none; */
    }
    
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    position: relative;
    top: 20px;
    left: 260px;
    padding: 0px;
    gap: 24px;
    cursor: pointer;
    width: 427px;
    height: 109px;

    &:hover {
      color: #faeab1;
    }
  }
  .navLogo.linkColorChange {
    color: #c58940;
    &:hover {
      color: #e5ba73;
    }
  }
  .report_button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    position: relative;
    top: 13px;
    right: 230px;
    width: 18rem;
    height: 54px;
    font-family: "Lateef";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
 
    text-align: center;
    background-color: #ef0b0f;
    color: white;
  }
  .navbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    top: 80px;
    width: 100%;
    height: 54px;
    background: #02040b;
  }
  .navbar.colorChange {
    background-color: white;
  }
  .navContainer {
    display: flex;
    justify-content: space-between;
    height: 60px;
    z-index: 1;
    width: 100%;
    padding: 0px 34px;
    max-width: 1100px;
  }

  .navMenu {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    margin-right: -94px;
    list-style: none;
  }
  .navItem {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;

    ${
      "" /* width: 1174px;
    height: 46px; */
    }
  }
  .navLinks {
    color: white;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    position: relative;
    left: 170px;
    right: 400px;
    ${"" /* margin-left: 200px; */}

    gap: 20px;
    width: 8rem;
    height: 100%;
    font-family: "Lateef";
    font-style: normal;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      color: #ef0b0f;
    }
  }
  .navLinks.linkColorChange {
    color: #c58940;

    &:hover {
      text-decoration: none;
      color: #e5ba73;
    }
  }
  .socials {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding: 0px;
    gap: 40px;
    position: relative;
    left: 30rem;
    width: 20px;
    height: 24px;
  }

  .facebook {
    position: relative;
    right: 6px;
    width: 10px;
    height: 10px;
  }
  .instagram {
    position: relative;
    right: 8px;
    width: 10px;
    height: 10px;
  }
  .twitter {
    position: relative;
    right: 10px;
    width: 10px;
    height: 10px;
  }
  .translate {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding: 0px;
    gap: 20px;
    width: 20px;
    height: 20px;
  }
  .France45 {
    width: 10px;
    height: 10px;
  }
  .chevron {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    position: relative;
    top: -6px;
    padding: 0px;
    gap: 5px;
    width: 57px;
    height: 24px;
    color: white;
  }
  .chevron_down {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    position: relative;
    top: 2px;
    padding: 0px;
    width: 57px;
    height: 24px;
    color: white;
  }
`;

