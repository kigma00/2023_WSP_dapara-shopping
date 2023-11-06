import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

export default function Product({ rate, count }) {
  return (
    <div className="flex">
      <Rating style={{ maxwidth: 100 }} value={rate} readOnly />
      {count} reviews
    </div>
  )
}
