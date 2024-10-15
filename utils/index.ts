export async function fetchCars() {
     const headers = {
          'X-RapidAPI-KEY': 'ab4041aba8msh19560050a4b84fcp111c02jsn4389eb87639f',
          'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
     }

     const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera', {
          headers: headers,
     });

     const result = await response.json();

     return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
     const basePricePerDay = 50;
     const milleageFactor = 0.1;
     const ageFactor = 0.05;

     const milleageRate = city_mpg * milleageFactor;
     const ageRate = (new Date().getFullYear() - year) * ageFactor;

     const rentalRatePerDay = basePricePerDay + milleageRate + ageRate;

     return rentalRatePerDay.toFixed(0);
};