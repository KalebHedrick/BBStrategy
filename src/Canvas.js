import { Backdrop } from '@mui/material';
import {useOnDraw} from './Hooks';

const Canvas = ({
    width,
    height,
    brushColor,
    EraserMode,
    StrokeSize,

}) => {

    const {
        setCanvasRef,
        onCanvasMouseDown
    } = useOnDraw(onDraw);

    function onDraw(ctx, point, prevPoint) {
        drawLine(prevPoint, point, ctx, brushColor, 5);
    }

    function drawLine(
        start,
        end,
        ctx,
        color,
        width
    ) {
        var imageObj1 = new Image();
    imageObj1.src = 'https://s-media-cache-ak0.pinimg.com/236x/d7/b3/cf/d7b3cfe04c2dc44400547ea6ef94ba35.jpg'
 imageObj1.onload = function() {
        ctx.drawImage(imageObj1,0,0);
    }
        start = start ?? end;
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.strokeStyle = color;
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();
       
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(start.x, start.y, 2, 0, 2 * Math.PI);
        ctx.fill();

    }

    return(
        <canvas
            width={width}
            height={height}
            onMouseDown={onCanvasMouseDown}
            style={canvasStyle}
            ref={setCanvasRef}
            
        />
    );

}

export default Canvas;

const canvasStyle = {
    border: "1px solid black",
    
}