const fromAmount = document.querySelector(".amount");
const convertedAmountEl = document.querySelector(".convertedAmount");
const fromCurrencyEl = document.querySelector(".fromCurrency");
const toCurrencyEl = document.querySelector(".toCurrency");
const resultEl = document.querySelector(".result");
const converter_container = document.querySelector(".converter-container");

const currencies = [
  { code: "KWD", name: "Kuwaiti Dinar" }, // Most valuable
  { code: "BHD", name: "Bahraini Dinar" },
  { code: "OMR", name: "Omani Rial" },
  { code: "JOD", name: "Jordanian Dinar" },
  { code: "GBP", name: "British Pound Sterling" },
  { code: "EUR", name: "Euro" },
  { code: "CHF", name: "Swiss Franc" },
  { code: "USD", name: "United States Dollar" },
  { code: "CAD", name: "Canadian Dollar" },
  { code: "AUD", name: "Australian Dollar" },
  { code: "SGD", name: "Singapore Dollar" },
  { code: "NZD", name: "New Zealand Dollar" },
  { code: "AED", name: "United Arab Emirates Dirham" },
  { code: "SAR", name: "Saudi Riyal" },
  { code: "QAR", name: "Qatari Riyal" },
  { code: "CNY", name: "Chinese Yuan Renminbi" },
  { code: "HKD", name: "Hong Kong Dollar" },
  { code: "JPY", name: "Japanese Yen" },
  { code: "ILS", name: "Israeli New Shekel" },
  { code: "INR", name: "Indian Rupee" },
  { code: "MXN", name: "Mexican Peso" },
  { code: "THB", name: "Thai Baht" },
  { code: "MYR", name: "Malaysian Ringgit" },
  { code: "IDR", name: "Indonesian Rupiah" },
  { code: "PKR", name: "Pakistani Rupee" },
  { code: "PHP", name: "Philippine Peso" },
  { code: "ZAR", name: "South African Rand" },
  { code: "EGP", name: "Egyptian Pound" },
  { code: "VND", name: "Vietnamese Dong" },
  { code: "NGN", name: "Nigerian Naira" },
  { code: "BDT", name: "Bangladeshi Taka" },
  { code: "KES", name: "Kenyan Shilling" },
  { code: "GHS", name: "Ghanaian Cedi" },
  { code: "TZS", name: "Tanzanian Shilling" },
  { code: "UGX", name: "Ugandan Shilling" },
  { code: "MMK", name: "Myanmar Kyat" },
  { code: "LAK", name: "Lao Kip" },
  { code: "AFN", name: "Afghan Afghani" },
  { code: "IRR", name: "Iranian Rial" },
  { code: "LBP", name: "Lebanese Pound" },
  { code: "SYP", name: "Syrian Pound" },
  { code: "PYG", name: "Paraguayan Guarani" },
  { code: "MGA", name: "Malagasy Ariary" },
  { code: "BYN", name: "Belarusian Ruble" },
  { code: "KGS", name: "Kyrgyzstani Som" },
  { code: "AMD", name: "Armenian Dram" },
  { code: "UZS", name: "Uzbekistani Som" },
  { code: "AZN", name: "Azerbaijani Manat" },
  { code: "BWP", name: "Botswana Pula" },
  { code: "NAD", name: "Namibian Dollar" },
  { code: "XOF", name: "West African CFA Franc" },
  { code: "XAF", name: "Central African CFA Franc" },
  { code: "CDF", name: "Congolese Franc" },
  { code: "HTG", name: "Haitian Gourde" },
  { code: "ZMW", name: "Zambian Kwacha" },
  { code: "MWK", name: "Malawian Kwacha" },
  { code: "BZD", name: "Belize Dollar" },
  { code: "FJD", name: "Fijian Dollar" },
  { code: "SCR", name: "Seychellois Rupee" },
  { code: "MVR", name: "Maldivian Rufiyaa" },
  { code: "KYD", name: "Cayman Islands Dollar" },
  { code: "TTD", name: "Trinidad and Tobago Dollar" },
  { code: "ETB", name: "Ethiopian Birr" },
];

currencies.forEach((country) => {
  const option1 = document.createElement("option");
  const option2 = document.createElement("option");

  option1.value = option2.value = country.code;
  option1.textContent =
    option2.textContent = `${country.code}(${country.name})`;

  fromCurrencyEl.appendChild(option1);
  toCurrencyEl.appendChild(option2);
  fromCurrencyEl.value = "USD";
  toCurrencyEl.value = "INR";
});

const getExchangeRate = async () => {
  try {
    const amount = parseFloat(fromAmount.value);
    const fromCurrency = fromCurrencyEl.value;
    const toCurrency = toCurrencyEl.value;
    resultEl.textContent = "Fetching Exchange Rates...";

    //fetching exchange rates
    const response = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
    );
    const data = await response.json();

    const conversionRate = data.rates[toCurrency];
    const convertedAmount = (amount * conversionRate).toFixed(2);

    if (typeof conversionRate === undefined) {
      resultEl.textContent =
        "Exchange rates for this currency are not available ...";
      convertedAmountEl = "";
    } else {
      convertedAmountEl.value = convertedAmount;
      resultEl.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    }
  } catch (error) {
    converter_container.innerHTML = `<h1>Error while fetching rates....</h1>`;
  }
};

fromAmount.addEventListener("input", getExchangeRate);
fromCurrencyEl.addEventListener("change", getExchangeRate);
toCurrencyEl.addEventListener("change", getExchangeRate);
window.addEventListener("load", getExchangeRate);
