import './App.css';
import {useDraggable} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities'

export default function Disk({ disc, isTopDisc}){

    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: disc.id,
        disabled: !isTopDisc
    });
    const style = {
        transform: CSS.Translate.toString(transform),
        
    };
    
    return(
        
        <img 
        src={disc.disc} 
        alt='disc'ref={setNodeRef} 
        style={style} 
        draggable={false} 
        {...listeners} 
        {...attributes}
        />   
        
    )
}