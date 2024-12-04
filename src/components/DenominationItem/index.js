// Write your code here
import './index.css'

const DenominationItem = props => {
  const {details, sub} = props
  const {value} = details
  const onSubmit = () => {
    sub(value)
  }
  return (
    <li>
      <button onClick={onSubmit} className="btn">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
