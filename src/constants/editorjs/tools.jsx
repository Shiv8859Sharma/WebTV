import Header from "@editorjs/header";
import NestedList from "@editorjs/nested-list";
import Marker from "@editorjs/marker";
import Underline from "@editorjs/underline";
import Embed from "@editorjs/embed";
import ImageTool from "@editorjs/image";
import TextVariantTune from "@editorjs/text-variant-tune";
import { convertFileToBase64URL } from "@/utills/helpers/base64Url";

export const EDITOR_JS_TOOLS = {
  header: {
    class: Header,
    inlineToolbar: true,
    config: {
      placeholder: "Enter a header",
      levels: [1, 2, 3, 4, 5, 6],
      defaultLevel: 3,
    },
  },
  List: {
    class: NestedList,
    config: {},
    inlineToolbar: true,
  },
  Marker: Marker,
  Underline: Underline,
  embed: Embed,
  textVariant: TextVariantTune,
  image: {
    class: ImageTool,
    config: {
      uploader: {
        uploadByFile: async (image) => {
          return {
            success: 1,
            file: {
              url: await convertFileToBase64URL(image),
            },
          };
        },
      },
    },
  },
};
