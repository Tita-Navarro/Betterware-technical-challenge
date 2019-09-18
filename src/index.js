function formatDate(userDate) {
    // format from M/D/YYYY to YYYYMMDD
      let array = userDate.split("/");
      while(array[0].length < 2) {
          array[0] = "0" + array[0];
      }
      while(array[1].length < 2) {
          array[1] = "0" + array[1];
      }
      let arrayAnswer = array[2]+ array[0]+ array[1];
      return arrayAnswer;
  } 
  
  console.log(formatDate("9/18/2019"));
