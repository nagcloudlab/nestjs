"use strict";

const inv={
    number:12345,
    process:function(){
        console.log(`INV-${this.number}, processed partially!`)
        return ()=>{
            console.log(`INV-${this.number}, processed fully!`)
        }
    }
}

let completeProcess=inv.process()
completeProcess()