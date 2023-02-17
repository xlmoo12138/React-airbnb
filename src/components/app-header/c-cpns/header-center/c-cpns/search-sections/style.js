import styled from "styled-components";

export const SectionsWrapper = styled.div`
  display: flex;
  width: 850px;
  height: 66px;
  border-radius: 32px;
  background-color: #fff;
  border: 2px solid #e5e5e5;

  .item {
    flex: 1;
    display: flex;
    align-items: center;

    .info {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      padding: 0 30px;

      .title {
        font-size: 12px;
        font-weight: 800;
        color: #484848;
      }

      .desc {
        font-size: 14px;
        color: #666;
      }
    }

    .divider {
      height: 32px;
      width: 1px;
      background-color: #ddd;
    }
  }
`
