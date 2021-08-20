'use strict';

var util = require('util');

const db = require('../../models');

module.exports = {
    getRna: getRna
};


function getRna(req, res) {
    db.rna.findOne({
        where:{id:24723073 }
    }).then( result =>{
        console.log(result);
        // res.status(200).send(result);
        res.json([result]);
    });
    
    // const rna = db.rna.findOne().then(
    //     result => {
    //         try{
    //             console.log(result);
    //             res.json([hello, result]);                    
    //         }catch(error){
    //             res.json('Erro ao consultar');
    //         }
    //     }   
    // );    
    // try {
    //     const rna = db.rna.findOne()
    //     console.log(rna);
    //     res.json(rna);
    // } catch (error) {
    //     res.json("Erro de consulta");
    // }

}
