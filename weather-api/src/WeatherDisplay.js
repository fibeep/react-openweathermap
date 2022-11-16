

function WeatherDisplay(props){
    const {temp, feelsLike, desc, cod, message} = props
    
    if (cod !== 200) {
        return(
            <small>{message}</small>
        )
    }
    return(
<div className = "Weather">
<h1>{temp}</h1>
<small>Feels Like: {feelsLike}</small>
<p>{desc}</p>
</div>
    )
}

export default WeatherDisplay