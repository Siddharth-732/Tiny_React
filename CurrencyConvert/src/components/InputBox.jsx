import { useId } from "react";

function InputBox({
  label, // 'from' or 'to' title
  amount, // The initial input that the user has entered
  onAmountChange, // this tell if the amount has been changed
  onCurrencyChange, // this tells if the currency types has been changed
  currencyOptions = [], // list of currency to choose from
  selectCurrency = "usd", // initial default currency and the selected currency
  amountDisable = false,
  currencyDisable = false,
}) {
  const amountId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex `}>
      <div className="w-150">
        <label htmlFor={amountId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>

        {/* MAIN INPUT HERE */}
        <input
          id={amountId}
          className="outline-none w-full bg-blue-100 py-1.5"
          type="number"
          placeholder="Amount" //Placeholder for amount
          disabled={amountDisable}
          value={amount}
          onChange={(e) => {
            //every time the inputfield is changes it is called
            onAmountChange && onAmountChange(Number(e.target.value));
            // console.log('this is the value',e.target.value);
          }}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select //dropdown list for the currency
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((Currency) => (          // this is to map the currency option to the values
            <option key={Currency} value={Currency}>    {/* We could have used a index as keys as well but  */}
              {Currency}                                {/* we do not bug if the order of the list changes anytime */}
            </option>                                   //* that would map the some idx to other currency */
          ))}
        </select>
      </div>
    </div>
  );
}
export default InputBox;
