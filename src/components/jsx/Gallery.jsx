import { useState } from "react";

import { ColumnsPhotoAlbum, RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function Gallery({ photos, columns, type = "columns" }) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      {type === "columns" ? (
        <ColumnsPhotoAlbum
          photos={photos}
          onClick={({ index }) => setIndex(index)}
          columns={(containerWidth) => {
            if (containerWidth < 400) return 1;
            if (containerWidth < 600) return 2;
            return columns;
            }}
         
        />
      ) : (
        <RowsPhotoAlbum
          photos={photos}
          onClick={({ index }) => setIndex(index)}
        />
      )}

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Zoom]}
      />
    </>
  );
}
