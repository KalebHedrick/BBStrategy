import { Backdrop } from '@mui/material';
import { useOnDraw, InitCanvas } from './Hooks';
import React, { useEffect } from 'react';

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
    } = InitCanvas(onDraw, drawBackground);

    function drawBackground(ctx) {
        var imageObj1 = new Image();
        imageObj1.src = require('./district.png')
        imageObj1.onload = function () {
            ctx.drawImage(imageObj1, 0, 0);
        }
    }

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

    return (
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