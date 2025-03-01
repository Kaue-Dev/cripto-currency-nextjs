interface CryptoPriceProps {
  current_price: number;
}

export function CryptoPrice (props: CryptoPriceProps) {
  return (
    <div>
      <span className="text-xs font-bold">$ {props.current_price}</span>
    </div>
  )
}