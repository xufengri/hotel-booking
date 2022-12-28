import styled from "styled-components";


export const RightWrapper = styled.div`
    flex:1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .btns {
        display: flex;
        font-size: 14px;
        font-weight: 600;
        color: ${props => props.theme.textColor.primaryColor};
        .btn {
            height: 18px;
            line-height: 18px;
            padding: 12px 15px;
            cursor: pointer;
            border-radius: 22px;
            &:hover {
                background-color: #f5f5f5;
                color: #484848;
            }
        }
    }
    .profile {
        display: flex;
        width: 77px;
        height: 42px;
        margin-right: 24px;
        justify-content: space-evenly;
        box-sizing: border-box;
        border:1px solid #ccc;
        border-radius: 25px;
        color: #999;
        cursor: pointer;
        align-items: center;
        /* 动画做了混入 */
        ${props=> props.theme.mixin.boxShadow}
        
    }
`