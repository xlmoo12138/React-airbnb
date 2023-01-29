import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${props => props.theme.text.secondaryColor};
  font-size: 14px;
  font-weight: 600;

  .btns {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    .btn {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      cursor: pointer;
      border-radius: 22px;

      &:hover {
        background-color: #f5f5f5;
      }
    }

    .btn-register {
      margin-left: -8px;
      padding: 12px 15px;
    }

    .btn-icon {
      padding: 14px 20px 10px 20px;
      margin-left: -8px;
    }

  }

  .profile {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    box-sizing: border-box;
    width: 77px;
    height: 42px;
    margin-right: 24px;
    border: 1px solid #ccc;
    border-radius: 25px;
    color: #717171;
    background-color: #fff;
    cursor: pointer;
  }
`
