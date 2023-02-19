const fakeSuggestion=async (req,res)=>{
    res.status(200)
       .json({
status:'sucess',
data:{
    keywords:["example1","example2","example3","example4"]
}


       })
}
//this is fake generated data
const fakeAnalysis=async (req,res)=>{
    const randomPercentage1 = (Math.random() * 100).toFixed(2);
    const randomPercentage2 = (Math.random() * 100).toFixed(2);
    const randomPercentage3 = (Math.random() * 100).toFixed(2);
    res.status(200)
    .json({
        status:'sucess',
        data:{
            likenessPorcentage:randomPercentage1,
            coherencePorcentage:randomPercentage2,
            //pourcentage of coherenece or comptability between the potentiol post and the potentiel followers 
            //calculated using ai
            possibleSuccessPourcentage:randomPercentage3,
        }
        
        
               })

}
module.exports={fakeAnalysis,fakeSuggestion}