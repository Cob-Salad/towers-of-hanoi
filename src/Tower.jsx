
import Disk from './Disk';
import './App.css';
import { useDroppable } from '@dnd-kit/core';


export default function Tower({ towerId, discs }){
    const {isOver, setNodeRef} = useDroppable({
        id: towerId
      });
    const style = {
        backgroundcolor: isOver ? 'green' : undefined,
    };
    
    return(
        <div ref={setNodeRef} style={ style } className="tower">
            
            {discs.map((disc, i) =>
                <Disk key={i} disc={disc} isTopDisc={i === discs.length - 1}/> 
            )}

        </div>
    )
}