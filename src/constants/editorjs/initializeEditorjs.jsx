import { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import { useDispatch, useSelector } from "react-redux";
import { EDITOR_JS_TOOLS as tools } from "./tools";
import { setBlog } from "@/globalStates/actions/blogActions";

const InitiEditorjs = () => {
  const editorjsRef = useRef(null);
  const dispatch = useDispatch();
  const initialContent = useSelector((state) => state.blog.blogDetails.content);

  function initializeEditorjs() {
    editorjsRef.current = new EditorJS({
      holder: "editorjs",
      placeholder: "write content...",
      tools: tools,
      tunes: ["textVariant"],
      data: initialContent,
      onChange: async () => {
        const data = await editorjsRef.current.save();
        dispatch(setBlog({ content: JSON.parse(JSON.stringify(data)) }));
      },
    });
  }

  let dat = true;
  useEffect(() => {
    if (editorjsRef.current === null && !dat) {
      initializeEditorjs();
      dat = true;
    }

    return () => {
      dat = false;
      editorjsRef.current = null;
    };
  }, []);

  return <div id="editorjs"></div>;
};

export default InitiEditorjs;
