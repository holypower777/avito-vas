import React from "react";
import Background from "./Background";
import Export from "./Export";
import Image from "./Image";
import Link from "./Link";
import Text from "./Text";

import withStore from "#root/helpers/withStore";

const BackgroundWithStore = withStore(Background);
const ImageWithStore = withStore(Image);
const TextWithStore = withStore(Text);
const LinkWithStore = withStore(Link);
const ExportWithStore = withStore(Export);

const EditForm = () => {
    return (
        <ul className="edit_panel">
            <BackgroundWithStore />
            <ImageWithStore />
            <TextWithStore />
            <LinkWithStore />
            <ExportWithStore />
        </ul>
    );
};

export default EditForm;