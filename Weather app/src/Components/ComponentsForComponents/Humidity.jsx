import styled from 'styled-components';

const ProgressBarContainer = styled.div`
    width: 100%;
    height: 8px;
    background: #e0e0de;
    border-radius: 10px;
    position: relative;
`;

const Filler = styled.div`
    height: 100%;
    border-radius: inherit;
    background: #FFEC65;
    width: ${props => props.percentage}%;
`;

const PercentageSign = styled.span`
    font-size: 12px;
    margin-left: 2px;
    margin-right: 2px; 
    position: absolute;
    bottom: -21px;
    right: 0;
    color: #fff;
`;


const Mark = styled.div`
    position: absolute;
    height: 120%;
    width: 1px;
    left: ${props => props.position}%;
    top: -10%;
    &:after {
        content: '${props => props.label}';
        font-size: 10px;
        pading-left: 2px;
        pading-right: 2px; 
        display: block;
        position: absolute;
        top: -15px;
        left: 50%;
        transform: translateX(-50%);
        color: #fff;
    }
`;

export function ProgressBar({percentage}) {
    return (
        <ProgressBarContainer>
            <Filler percentage={percentage} />
            <Mark position={0} label="0" />
            <Mark position={50} label="50" />
            <Mark position={100} label="100" />
            <PercentageSign>%</PercentageSign>
        </ProgressBarContainer>
    );
}

