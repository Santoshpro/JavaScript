let radius=[1,2,3,4,5]

//write hof for:
// diameter of circle
//area of Circle
//circumference of Circle

function diameterOfCircle(radius){
   return  2*radius

}
function areaOfCircle(radius){
        return Math.PI*radius*radius
}
function circumferenceOfCircle(){
        return 2*Math.PI*radius;
}

//higher order function takes callback as function

function calculate(radius, callback ){
    let ans=[];
    let area;
    for(let i=0; i<radius.length; i++){
        area=callback(radius[i])
        ans.push(area)

    }
    return ans;


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
  
}
let areaAns=calculate(radius, areaOfCircle)
let diameterAns=calculate(radius, diameterOfCircle)
let circumferenceAns=calculate(radius,circumferenceOfCircle)
console.log(areaAns,diameterAns,circumferenceAns )