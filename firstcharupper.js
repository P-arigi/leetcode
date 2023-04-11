const days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']

for(let day of days){
    day = day.charAt(0).toUpperCase() + day.substring(1)
    console.log(day)
}