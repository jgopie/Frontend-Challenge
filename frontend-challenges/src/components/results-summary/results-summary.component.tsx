import { FC } from 'react';
import './results-summary.component.css';

type ObjectTypes = {
    category: string;
    score: number;
    icon: string;
    color: string;
};

type ResultSummaryProps = {
  props: Array<ObjectTypes>
}

export const ResultsSummary: FC<ResultSummaryProps> = (props) => {
    let summaryCards = props.props.map(item => {
        let image = new URL(item.icon, import.meta.url).href;
        return (
            <div key={item.category} className={`summaryBox ${item.color}`} >
                <p id='summaryText'><img src={image}></img> {item.category}</p>
                <p>{item.score} <span>/ 100</span></p>
            </div>
        );
    })
    return (
        <div className='mainContainer'>
            <div className='topContainer'>
                <p className='transparent'>Your Result</p>
                <div className='bubble'>
                    <p className='largeText'>76</p> 
                    <p className='transparent'>of 100</p>
                </div>
                <p className='mediumText'>Great</p>
                <p className='transparent'>You scored higher than 65% of the people who have taken these tests.</p>
            </div>
            <div className='bottomContainer'>
                <p>Summary</p>
                <div className='cardContainer'>
                    {summaryCards}
                </div>
                <button type='button' className='continueButton'>Continue</button>
            </div>
        </div>
    );
}