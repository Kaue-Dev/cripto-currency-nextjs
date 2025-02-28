interface CriptoPriceProps {
  current_price: number;
}

export function CriptoPrice (props: CriptoPriceProps) {
  return (
    <div>
      <span className="text-xs font-bold">$ {props.current_price}</span>
    </div>
  )
}