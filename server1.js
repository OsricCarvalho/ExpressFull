

server.post("/createAccount",(req,res)=>{

 

    let name= req.body.name

    let country = req.body.country.substring(0,1)

    let accountType = req.body.accountType.substring(0,1)

 

    let findAccountNumberSQL=`select concat('${accountType}','${country}', ifnull( lpad(max(substr(accno,3,3)) + 1,3,'0'),'001')) as newAccno from bank where substr(accno,2,1)='${country}'`;

    db.query(findAccountNumberSQL,function(err,result){

 

        if(err){

            console.log(err)

        }else{

            let insertquery=`insert into bank values('${result[0].newAccno}','${name}')`

            db.query(insertquery,function(err,result){

                if (err){

                    console.log(err)

                }

            })

        }

    })

})
