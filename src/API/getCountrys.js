const URL = 'https://restcountries.com/v3.1/all';

export async function getAllCountrys(){
  try{
    const response = await fetch(URL);
    const data = await response.json();
    
    return data;
  } catch(error){
    console.log(error);
  }

}