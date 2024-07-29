import React, { useState } from "react";
import { HStack} from "@chakra-ui/react"

import CardSkills from "../CardSkills/CardSkills.jsx" 

import f1 from '../../../img/css.svg'
import f2 from '../../../img/html.svg'
import f3 from '../../../img/javascript.svg'
import f4 from '../../../img/java.svg'
import f5 from '../../../img/chakra-ui.svg'


const Prueba = () => {
    const logos = [
        {
            "imgUrl": f1,
            "tittle": "CSS.",
        },
        {
            "imgUrl": f2,
           
            "tittle": "HTML",

        },
        {
            "imgUrl": f3,
           
            "tittle": "JS",

        },
        {
            "imgUrl": f4,
           
            "tittle": "JAVA",

            
        },
        {
            "imgUrl": f5,
           
            "tittle": "CHAKRA-UI",

        }
        
    ]

    const objetoPivot = logos.length;

    return (
        <HStack className="skills-container" spacing={4} w="95%" ml="5%" mt="20px" justify="space-between">
                {logos.slice(0, objetoPivot).map((elemento, index) => (
                    <CardSkills 
                        key={index}
                        imgUrl={elemento.imgUrl}
                        tittle={elemento.tittle}
                    />
                ))}
        </HStack>
    );
};

export  {Prueba};