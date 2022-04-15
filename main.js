const calculateTemp = () => {
  const numbertemp = document.getElementById('temp').value;
  const tempSelected = document.getElementById('temp_diff');
 const Valuetemp = 
 temp_diff.options[tempSelected.selectedIndex].value;
 const celtofah = (cel) => {
   let Faren = Math.round((cel * 9/5) + 32 );
   return Faren;
 }
  const fahtocel = (Far) => {
       let Cel = Math.round((Far - 32) * 5/9);
       return Cel;
  }
  let result;
  if (Valuetemp == 'cel') {
    result = celtofah(numbertemp);
    document.getElementById('resultContainer').innerHTML = `= ${result} °Farenhite`;
  } else {
    result = fahtocel(numbertemp);
    document.getElementById('resultContainer').innerHTML = `= ${result} °Celcius`;
  }
  resultContainer.style.color= 'white';
  resultContainer.style.fontWeight = 'bold';
  resultContainer.style.marginTop = '10px';
}
