
import Tower from "./Tower"
import './App.css';
import { useEffect, useState } from "react"
import { discs } from "./assets/discs.js"
import { DndContext } from "@dnd-kit/core";
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function Game(){
    const [towerState, setTowerState] = useState({
        t1: [],
        t2: [],
        t3: [...discs]
    })

    useEffect(() => {
        if (towerState.t3.length === discs.length){
            winningNote()
        }
    }, [towerState]);

    const [parent, setParent] = useState(null);

    const notify = () => toast.error('YOU CANT DO THAT', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
    });

    const winningNote = () => toast.success('Wow so easy!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
        });

    function handleDragEnd({ active, over }) {
        setParent(over ? over.id : null)
        const t1Arr = towerState.t1.filter(disc => disc.id !== active.id)
        const t2Arr = towerState.t2.filter(disc => disc.id !== active.id)    
        const t3Arr = towerState.t3.filter(disc => disc.id !== active.id)

        // get discs
        const disc = discs.find(disc => disc.id === active.id)

        // get discs from target tower
        const targetDiscs = towerState[over.id]
        if (targetDiscs.length > 0) {
            if (over.id === "t1"){
                t1Arr.push(disc)
            } else if (over.id === "t2"){
                t2Arr.push(disc)
            } else if (over.id === "t3"){
                t3Arr.push(disc)
            }
        } else {
            if (over.id === "t1"){
                t1Arr.push(disc)
            } else if (over.id === "t2"){
                t2Arr.push(disc)
            } else if (over.id === "t3"){
                t3Arr.push(disc)
            }

        }
        // check if the current diisc we got above has a larger ID than the last disc in the tower
        if (targetDiscs.length > 0) { 
            const lastDisc = targetDiscs[targetDiscs.length - 1]
            if (disc.id < lastDisc.id) {
                console.log("YOU CANT DO THAT")
                
                notify()
                return;
            }
        }

        setTowerState({
            t1: t1Arr,
            t2: t2Arr,
            t3: t3Arr  
        })
            
        
        
    }

    return(
        <div id="game" className="game">
            <DndContext onDragEnd={handleDragEnd}>
                <p></p>    
                <Tower towerId={"t1"} discs={towerState.t1} />
                <Tower towerId={"t2"} discs={towerState.t2} />
                <Tower towerId={"t3"} discs={towerState.t3} />
                <p></p>
            </DndContext>
        </div>
    )
}