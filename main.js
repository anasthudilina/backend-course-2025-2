
const date = "202202";

const nbuUrl = new URL("https://bank.gov.ua/NBUStatService/v1/statdirectory/res");


nbuUrl.searchParams.append("date", date);

nbuUrl.searchParams.append("json", "");


console.log(nbuUrl.toString());

