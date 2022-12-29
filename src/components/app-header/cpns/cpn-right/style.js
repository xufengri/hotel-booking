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
        position: relative;
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
        .panel {
            position: absolute;
            padding: 10px 0;
            width: 240px;
            height: 200px;
            top: 64px;
            right: 0;
            color: #000;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 4px rgba(0, 0, 0, .2);
            .register {
                font-weight: 600;
            }
            .top {
                border-bottom: 1px solid #999;
            }
            .item {
                height: 40px;
                line-height: 40px;
                padding: 0 16px;
            }
        }
    }
`