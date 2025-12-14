let searchBtn = document.querySelector("#search-btn");
let result = document.querySelector("#result");

const getweatherData = async () => {
    try{
        let cityname = document.querySelector("#city-name").value.trim();
        if(!cityname){
         result.innerHTML = <p class="text-red-700 text-center mt-4 font-semibold"> Please Enter a City Name... </p>;
    }
        
    }catch(error){
        console.log(error,"Error in Featching weather Details");
        
    }
    
};
searchBtn.addEventListener("click",getweatherData);