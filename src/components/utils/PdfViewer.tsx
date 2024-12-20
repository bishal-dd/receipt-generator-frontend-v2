import {
  Viewer,
  Worker,
  ViewerProps,
  CharacterMap,
} from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import packageJson from "../../../package.json";
type Props = ViewerProps;
const version = packageJson.dependencies["pdfjs-dist"];

const characterMap: CharacterMap = {
  isCompressed: true,
  // The url has to end with "/"
  url: `https://unpkg.com/pdfjs-dist@${version}/cmaps/`,
};
export const PdfViewer: React.FC<Props> = (props) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Worker
      workerUrl={`https://unpkg.com/pdfjs-dist@${version}/build/pdf.worker.js`}
    >
      <div style={{ height: "750px", width: "100%" }}>
        <Viewer
          characterMap={characterMap}
          fileUrl={props.fileUrl}
          plugins={[defaultLayoutPluginInstance]}
        />
      </div>
    </Worker>
  );
};
