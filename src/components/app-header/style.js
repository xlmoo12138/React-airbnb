import styled from "styled-components";

export const HeaderWrapper = styled.div`
  border-bottom: 1px solid #eee;

  &.Fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
  }

  .content {
    position: relative;
    z-index: 19;
    background-color: #fff;
    .c-top {
      display: flex;
      align-items: center;
      height: 80px;
    }
  }

  .cover {
    position: fixed;
    z-index: 9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,.3);
  }
`


export const SearchAreaWrapper = styled.div`
  transition: height 250ms ease;
  height: ${props => props.isSearch ? "100px" : "0"};
`
