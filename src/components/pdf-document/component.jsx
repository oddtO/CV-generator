import React, { useEffect, useRef, useState } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { usePDF } from "@react-pdf/renderer";
import { pdfjs } from "react-pdf";
import DownloadIcon from "../../assets/reshot-icon-download-WSU7RD256F.svg";

import styles from "./pdf-document.module.scss";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url,
).toString();
export function PDFHolder({ pdfUrl }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageScale, setPageScale] = useState(0.5);

  const parentRef = useRef(null);
  const curPageRef = useRef(null);

  const canvasRef = useRef(null);
  function onPageLoadAutoscale(page) {
    const widthScale = parentRef.current.offsetWidth / page.originalWidth;
    const heightScale =
      parentRef.current.offsetHeight / page.originalHeight - 0.02;

    curPageRef.current = page;
    setPageScale(widthScale < heightScale ? widthScale : heightScale);
  }

  useEffect(() => {
    let timeoutId;
    const resizePage = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => onPageLoadAutoscale(curPageRef.current), 50);
    };
    window.addEventListener("resize", resizePage);
    return () => window.removeEventListener("resize", resizePage);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <div className={styles["pdf-viewer"]}>
      <div className={styles.toolbar}>
        <ul className={styles.buttons}>
          <li>
            <button
              className={styles.previous}
              type="button"
              disabled={pageNumber <= 1}
              onClick={previousPage}
            >
              Previous
            </button>
          </li>

          <li>
            <button
              className={styles.next}
              type="button"
              disabled={pageNumber >= numPages}
              onClick={nextPage}
            >
              Next
            </button>
          </li>
        </ul>
        <p className={styles["page-count"]}>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>

        <a href={pdfUrl} download="resume.pdf">
          <img src={DownloadIcon} alt="download" />
        </a>
      </div>
      <div className={styles.document} ref={parentRef}>
        <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
          <Page
            scale={pageScale}
            canvasBackground="transparent"
            pageNumber={pageNumber}
            canvasRef={canvasRef}
            onLoadSuccess={onPageLoadAutoscale}
          />
        </Document>
      </div>
    </div>
  );
}
