import React from "react";
import copy from "copy-to-clipboard";
import html2canvas from "html2canvas-render-offscreen";

import exportHtml from "#root/helpers/exportHtml";

import Export from "./Export";

const ExportContainer = ({ state }) => {
    const handleExportPng = () => {
        html2canvas(document.getElementById("banner"), {
            useCORS: true
        }).then(canvas => {
            canvas.toBlob(
                blob => {
                    const anchor = document.getElementById('download-link');
                    anchor.download = 'banner.png';
                    anchor.href = URL.createObjectURL(blob);

                    anchor.click();
                    URL.revokeObjectURL(anchor.href);
                },
                'image/png',
                1
            )
        });
    }

    const buttons = [
        {
            text: "PNG",
            onClick: handleExportPng
        },
        {
            text: "HTML",
            onClick: () => copy(exportHtml(state)),
            className: "space-between"
        },
        {
            text: "JSON",
            onClick: () => copy(JSON.stringify(state))
        }
    ]

    return <Export buttons={buttons} />
};

export default ExportContainer;