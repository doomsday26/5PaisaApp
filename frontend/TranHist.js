import React from 'react'
import orderbook from '../Dummydata/tranHist'
import TranHistComp from './TranHistComp'
import TranHistHead from './TranHistHead'

class TranHist extends React.Component{
	render(){
		return(
		<div>
			{orderbook.heading.map(item =>(
				<TranHistHead
					Date={item.Date}
					BuySell={item.BuySell}
                    Instrument={item.Instrument}
                    Exch={item.Exch}
                    Type={item.Type}
                    Qty={item.Qty}
                    Rate={item.Rate}
				/>
			))
			}

			{orderbook.content.map(item=>(
				<TranHistComp 
					Date={item.Date}
					BuySell={item.BuySell}
                    Instrument={item.Instrument}
                    Exch={item.Exch}
                    Type={item.Type}
                    Qty={item.Qty}
                    Rate={item.Rate}
				/>))
			}
		</div>
		)}
}

export default TranHist