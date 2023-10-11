"use client";

import { useEffect, useState } from "react";

import PhotoBox from "./PhotoBox";
import { useFormikContext } from "formik";

interface PhotoGridProps {
  errors?: any;
  touched?: any;
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ errors, touched }) => {
  const [photosUrl, setPhotosUrl] = useState<string[]>([]);
  const formik = useFormikContext();

  useEffect(() => {
    formik.setFieldValue("images", photosUrl);
  }, [photosUrl]);

  return (
    <div className="flex flex-col items-center gap-5 lg:items-start">
      <div className="flex gap-5">
        <PhotoBox
          photoUrl={photosUrl[0]}
          setPhoto={setPhotosUrl}
          thumbnail
          error={errors == true && touched == true}
        />
        <PhotoBox photoUrl={photosUrl[1]} setPhoto={setPhotosUrl} />
        <PhotoBox photoUrl={photosUrl[2]} setPhoto={setPhotosUrl} />
      </div>
      <div className="flex gap-5">
        <PhotoBox photoUrl={photosUrl[3]} setPhoto={setPhotosUrl} />
        <PhotoBox photoUrl={photosUrl[4]} setPhoto={setPhotosUrl} />
        <PhotoBox photoUrl={photosUrl[5]} setPhoto={setPhotosUrl} />
      </div>
    </div>
  );
};

export default PhotoGrid;
