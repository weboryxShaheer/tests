function centuryFromYear(year) {
    if(typeof year == 'string')
      if(year.toString().slice(-2) == '00')
        return year.toString().slice(0,2);
      else
        return (Math.floor(+year/100) +1).toString();
    else if(typeof year == 'number')
      return Math.floor((year-1)/100) + 1;
    else
      return undefined;
  } 
      
  console.log(centuryFromYear("2000"));
  console.log(centuryFromYear("1700"));
  console.log(centuryFromYear("2002"));
  console.log(centuryFromYear(2002));
  console.log(centuryFromYear(1999));
  console.log(centuryFromYear(2000));