// pages/index.js
import React, { useEffect, useRef } from 'react';

const CV=() =>{
	const canvasRef = useRef(null);

	useEffect(() => {
		(async function () {
			// We import this here so that it's only loaded during client-side rendering.
			const pdfJS = await import('pdfjs-dist/build/pdf');
			pdfJS.GlobalWorkerOptions.workerSrc =
				window.location.origin + '/pdf.worker.min.js';
			const pdf = await pdfJS.getDocument('cv.pdf').promise;

			const page = await pdf.getPage(1);
			const viewport = page.getViewport({ scale: 2.5 });

			// Prepare canvas using PDF page dimensions.
			const canvas = canvasRef.current;
			const canvasContext = canvas.getContext('2d');
			canvas.height = viewport.height;
			canvas.width = viewport.width;

			// Render PDF page into canvas context.
			const renderContext = { canvasContext, viewport };
			page.render(renderContext);
		})();
	}, []);

	return(<div className='cv' style={{marginLeft: "auto",marginRight:"auto", width:550, marginTop:20, marginBottom:10}}>
  <canvas ref={canvasRef} style={{ height: '100vh' }} />
  </div>

  );
}
export default CV;