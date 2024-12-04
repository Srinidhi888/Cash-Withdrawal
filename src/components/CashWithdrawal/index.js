// Write your code here
import './index.css'

import {Component} from 'react'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {money: 2000}
  deleteUser = value => {
    this.setState(prevState => ({money: prevState.money - value}))
  }
  render() {
    const {money} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg">
        <div className="inner-bg">
          <div className="name-card">
            <p className="icon">S</p>
            <h1 className="head">Sarah Williams</h1>
          </div>
          <div className="balance-card">
            <p className="balance">Your Balance</p>
            <div>
              <p className="mny">{money}</p>
              <p className="rp">In Rupees</p>
            </div>
          </div>
          <p className="cl">Withdraw</p>
          <p className="clo">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list">
            {denominationsList.map(each => (
              <DenominationItem
                sub={this.deleteUser}
                key={each.id}
                details={each}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
