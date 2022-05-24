const URL = 'https://restcountries.com/v3.1/alpha/';

export async function getCodeCountrys(code){
  try{
    const response = await fetch(`${URL}${code}`);
    const data = await response.json();
    
    return data;
  } catch(error){
    console.log(error);
  }

}